import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import logo from './assets/Logo.png';


const page = () => {
  return (
    <div className='fixed flex-col bg-transparent w-full lg:h-[8rem] z-50'>
      <div className='flex bg-gold w-[100vw] items-center justify-center lg:h-[5rem]'>
            <Image
          src={logo}
          alt="Beach View"
          width={150}
          priority
        />
      </div>
       <div className='flex bg-transparent lg:w-[100vw] lg:h-[3rem]'>
         <div className='absolute flex lg:w-[100vw] lg:h-[3rem] bg-gold z-30 opacity-80'/>
         <div className='flex lg:w-[100vw] h-auto z-40'>
               <div className='flex justify-center items-center h-auto w-[10vw]'>

              </div>

              <div className='flex justify-center items-center font-kanit h-auto w-[80vw] lg:space-x-6' style={{
                fontWeight:'200'
              }}>
                      <Link href='/' className=' text-primary'>
                      Retreats
                      </Link>
                      <Link href='/' className=' text-primary'>
                      Offers
                      </Link>
                      <Link href='/' className=' text-primary'>
                      Cuisine
                      </Link>
                      <Link href='/' className=' text-primary'>
                      Dining
                      </Link>
                      <Link href='/' className=' text-primary'>
                      Meetings
                      </Link>
                      <Link href='/' className=' text-primary'>
                      Weddings
                      </Link>
                      <Link href='/' className=' text-primary'>
                      Spa & Wellness
                      </Link>
                      <Link href='/' className=' text-primary'>
                      Private Jets
                      </Link>
                      <Link href='/' className=' text-primary'>
                      Contact Us
                      </Link>
                      <Link href='/' className=' text-primary'>
                      Feature
                      </Link>
              </div>

              <div className='flex justify-center items-center h-auto w-[10vw]'>

              </div>
         </div>

        
      </div>
    </div>
  )
}

export default page
