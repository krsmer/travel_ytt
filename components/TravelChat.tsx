"use client";

import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function TravelChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply ?? data.error ?? "Bir hata oluştu." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Sunucuya ulaşılamadı." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50">
      <div className="bg-blue-600 text-white px-4 py-3 font-semibold text-sm">
        ✈️ Seyahat Asistanı
      </div>

      <div className="flex flex-col gap-2 p-3 h-64 overflow-y-auto text-sm">
        {messages.length === 0 && (
          <p className="text-gray-400 text-xs text-center mt-8">
            Seyahat hakkında bir şeyler sorun!
          </p>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`rounded-xl px-3 py-2 max-w-[90%] ${
              m.role === "user"
                ? "bg-blue-100 text-blue-900 self-end"
                : "bg-gray-100 text-gray-800 self-start"
            }`}
          >
            {m.text}
          </div>
        ))}
        {loading && (
          <div className="bg-gray-100 text-gray-500 rounded-xl px-3 py-2 self-start text-xs animate-pulse">
            Yanıt yazılıyor...
          </div>
        )}
      </div>

      <div className="flex border-t border-gray-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Mesajınızı yazın..."
          className="flex-1 px-3 py-2 text-sm outline-none"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="px-3 py-2 text-blue-600 hover:text-blue-800 disabled:opacity-40 font-bold"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
