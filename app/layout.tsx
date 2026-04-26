import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import {Poppins} from "next/font/google"
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import TravelChat from "@/components/TravelChat";

const font = Poppins({
  weight:["100", "200", "300","400","500","600","700","800","900"],
  subsets: ["latin"],

})
//const geistSans = Geist({
//  variable: "--font-geist-sans",
//  subsets: ["latin"],
//});
//
//const geistMono = Geist_Mono({
//  variable: "--font-geist-mono",
//  subsets: ["latin"],
//});

export const metadata: Metadata = {
  title: "Travel For Next Js ",
  description: "Travel Landing page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav />
        
        
        
        {children}
        <Footer/>
        <TravelChat />
        
      </body>
    </html>
  );
}
