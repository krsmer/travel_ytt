import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ChooseCard from './ChooseCard'


const ChooseUs = () => {
  return (
    <div className='pt-20 pb-20'>
      {/* Section Heading */}
        <SectionHeading heading='Why Choose Us' />
        <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-12'>
          {/* Why Choose Card */}
          <div>
            <ChooseCard image="images/c1.svg" title="Best Prices Guarantee"/>
          </div>
          <div>
            <ChooseCard image="images/c2.svg" title="Easy and Quick"/>
          </div>
          <div>
            <ChooseCard image="images/c3.svg" title="Customer Care"/>
          </div>
        </div>

      
    </div>
  )
}

export default ChooseUs
