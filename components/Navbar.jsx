'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const navlink = [
  { path: '/', label: 'Home' },
  { path: '/', label: 'Resources' },
  { path: '/', label: 'About' },
  { path: '/', label: 'Contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNav = () => {
    return setIsOpen(!isOpen)
  }

  return (
    <div className='text-gray-100 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 sm:text-sm md:text-base'>
      <Link href='/'>
        <h1 className='w-full text-3xl font-bold text-primary'>CODECO.</h1>
      </Link>
      <ul className='md:flex hidden'>
        {navlink.map((item) => (
          <li className='p-4' key={item.label}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
        <li className='p-4'>
          <Link
            className='px-4 py-2 bg-gray-100 text-gray-950 rounded-md font-semibold'
            href='/'
          >
            Get Started
          </Link>
        </li>
      </ul>
      <div className='md:hidden cursor-pointer' onClick={handleNav}>
        {!isOpen ? (
          <AiOutlineClose size={25} className='text-gray-100' />
        ) : (
          <AiOutlineMenu size={25} className='text-gray-100' />
        )}
      </div>
      <div
        className={
          !isOpen
            ? 'fixed left-0 top-0 w-[60%] bg-[#000300] border-r border-r-gray-900 h-full z-30 ease-out duration-500 md:hidden'
            : 'fixed left-[-120%] ease-linear duration-500'
        }
      >
        <Link className='inline-block m-4' href='/'>
          <h1 className='w-full text-3xl font-bold text-primary'>CODECO.</h1>
        </Link>
        <ul className='flex flex-col p-4 uppercase h-full'>
          {navlink.map((item) => (
            <li
              className='p-4 border-b border-b-gray-900 hover:bg-gray-950/80'
              key={item.label}
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
          <li className='p-4 my-8'>
            <Link
              className='px-4 py-2 bg-gray-100 text-gray-950 rounded-md font-semibold'
              href='/'
            >
              Get Started
            </Link>
          </li>
          <li className='border border-gray-900 p-4 '>
            <p className='normal-case text-gray-700 text-justify'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
              non?
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
