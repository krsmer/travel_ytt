import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='pt-12 pb-16'>
        {/* Section Heading*/}
        <SectionHeading heading="Exciting Travel News for You"/>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20'>
            <div>
                <NewsCard 
                image="/images/n1.jpg"
                title="Top 10 Places to visit in Australia "
                date= "15 November"
                />
            </div>
            <div>
                <NewsCard 
                image="/images/n2.jpg"
                title="Top 10 Places to visit in Bangladesh "
                date= "15 November"
                />
            </div>
            <div>
                <NewsCard 
                image="/images/n3.jpg"
                title="Top 10 Places to visit in Pakistan "
                date= "25 November"
                />
            </div>
            <div>
                <NewsCard 
                image="/images/n4.jpg"
                title="Top 10 Places to visit in New Zealand "
                date= "30 November"
                />
            </div>
        </div>
      
    </div>
  )
}

export default News
