'use client'

import Typewriter from 'typewriter-effect'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='text-gray-100'>
      <div className='max-w-[800px] w-full h-screen mx-auto flex flex-col justify-center items-center -mt-24'>
        <p className='uppercase text-primary font-semibold p-2'>
          growing with data analytics
        </p>
        <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold mb-4 md:mb-6'>
          Grow with data
        </h1>
        <div className=' flex gap-2 md:gap-3'>
          <p className='text-2xl md:text-5xl'>Fast, flexible financing for </p>

          <div className='text-2xl md:text-5xl  mb-6'>
            <Typewriter
              options={{
                strings: ['BTB', 'BTC', 'SAAS'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <p className='px-4 text-lg md:text-3xl text-gray-500 text-center mb-4 md:mb-6'>
          Monitor your data analytics to increase revenue for BTB, BTC, & SAAS
        </p>
        <div>
          <Link
            className='inline-block px-6 py-3 md:py-4 md:px-8 bg-primary text-gray-950 rounded-md font-semibold hover:bg-primary/80 transition duration-300'
            href='/'
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Hero
