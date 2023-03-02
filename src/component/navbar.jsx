import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Drawer } from 'antd'

import {TbMenu} from 'react-icons/tb'
import { BsArrowLeft } from 'react-icons/bs'
import { BiArrowBack } from 'react-icons/bi'

export const MainNavbar = () => {
    // drawer
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('top');
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
  return (
    <>
        <div className='px-24 hidden lg:flex flex-row justify-between items-center py-5 bg-white drop-shadow-sm z-50 fixed top-0 inset-x-0 w-full'>
            <Link href="/">
                <Image src="/neat_logo.svg" alt='Neat' className='w-8' width={100} height={100}/>
            </Link>
            <section className='flex flex-row items-center gap-x-4 lg:ml-12'>
                    <Link href="/courses" className='text-sm text-gray-400 hover:text-[#7000FD] hover:font-semibold duration-150 ease-in'>Online Courses</Link>
                    <Link href="/" className='text-sm text-gray-400 hover:text-[#7000FD] hover:font-semibold duration-150 ease-in'>Bootcamps</Link>
                    <Link href="/" className='text-sm text-gray-400 hover:text-[#7000FD] hover:font-semibold duration-150 ease-in'>Resources</Link>
                    <Link href="/" className='text-sm text-gray-400 hover:text-[#7000FD] hover:font-semibold duration-150 ease-in'>Careers</Link>
            </section>
            <section>
                <button className="px-4 py-2 rounded-md ring-1 ring-[#7000FD] text-sm font-medium text-[#7000FD] hover:bg-[#7000FD] hover:text-white ease-in duration-200">
                  <Link href="/auth/register">Sign up for free</Link>
                </button>
            </section>
        </div>
        <div className="flex flex-row justify-between px-10 items-center py-6 bg-white drop-shadow-sm lg:hidden z-50 fixed top-0 inset-x-0 w-full">
            <Link href="/">
                <Image src="/neat_logo.svg" alt='Neat' className='w-8' width={100} height={100}/>
            </Link>
            <button onClick={showDrawer}>
                <TbMenu/>
            </button>
            <Drawer placement={placement} closable={false} onClose={onClose} open={open} key={placement}>
              <p className="text-sm font-semibold text-gray-400 border-b border-gray-100 pb-4">Menu</p>
              <section className='flex flex-col items-start gap-y-1 mt-4'>
                <Link href="/courses" className='text-base text-gray-500 hover:text-[#7000FD] hover:font-semibold duration-150 ease-in'>Online Courses</Link>
                <Link href="/" className='text-base text-gray-500 hover:text-[#7000FD] hover:font-semibold duration-150 ease-in'>Bootcamps</Link>
                <Link href="/" className='text-base text-gray-500 hover:text-[#7000FD] hover:font-semibold duration-150 ease-in'>Resources</Link>
                <Link href="/" className='text-base text-gray-500 hover:text-[#7000FD] hover:font-semibold duration-150 ease-in'>Careers</Link>
              </section>
              <div className="mt-32">
                <button className="w-full py-2 rounded-md ring-1 ring-[#7000FD] text-sm font-medium text-[#7000FD] hover:bg-[#7000FD] hover:text-white ease-in duration-200">
                  <Link href="/auth/register">Sign up for free</Link>
                </button>
              </div>
            </Drawer>
        </div>
    </>
  )
}

export const AuthNavbar = () => {
  return (
    <div className='px-10 lg:px-24 flex flex-row justify-between items-center py-5 bg-white drop-shadow-sm z-50'>
      <Link href="/">
        <Image src="/neat_logo.svg" alt='Neat' className='w-8' width={100} height={100}/>
      </Link>
      <Link href="/" className="flex flex-row items-center gap-x-2 text-gray-400 hover:text-[#7000FD] duration-200 ease-in">
        <BsArrowLeft className='w-3'/>
        <p className='text-sm'>Go Back</p>
      </Link>
    </div>
  )
}

export const CourseNav = (props) => {
  return (
    <div className="px-10 lg:px-24 flex flex-row justify-between items-center py-5 bg-white drop-shadow-sm z-50 fixed top-0 inset-x-0 w-full">
        <Link href="/courses" className="flex flex-row items-center gap-x-2">
            <BiArrowBack className="text-sm"/>
            <h5 className="text-sm font-normal hidden md:block">Back</h5>
            <h5 className="text-xl font-medium block md:hidden">{props.title}</h5>
        </Link>
        <h5 className="text-xl font-medium hidden md:block">{props.title}</h5>
        <div className="md:flex flex-row items-center gap-x-2 hidden">
          <div className="p-1 rounded-full animate-pulse duration-75 bg-[#7000FD]"></div>
          <h5 className="text-sm font-medium mb-0">{props.category}</h5>
        </div>
    </div>
  )
}