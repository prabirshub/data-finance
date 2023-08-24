import Image from 'next/image'
import Link from 'next/link'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Image
          className='w-[500px] mx-auto my-4'
          src='/laptop.jpg'
          width={1080}
          height={1000}
          alt='laptop'
        />
        <div className='flex flex-col justify-center '>
          <p className='uppercase text-primary font-semibold mb-2 md:mb-4'>
            data analytics dashboard
          </p>
          <h2 className='capitalize text-3xl md:text-4xl font-bold mb-4'>
            Manage data analytics centrally
          </h2>
          <p className=' mb-4 md:mb-8'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            voluptates atque dolor quia pariatur. Iure eius quis sit debitis
            deserunt voluptates natus tempore hic alias, culpa earum nam sed!
            Fugiat?
          </p>
          <div>
            <Link
              className='inline-block w-full py-3 md:w-auto md:py-4 md:px-8 bg-[#000300] text-primary rounded-md font-semibold hover:bg-black/80 transition duration-300 text-center md:text-left tracking-wider uppercase'
              href='/'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Analytics
