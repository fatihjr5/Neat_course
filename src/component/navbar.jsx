import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Dropdown, Drawer, Modal } from 'antd'

import {TbMenu} from 'react-icons/tb'
import { BsArrowLeft } from 'react-icons/bs'
import {GrCircleInformation} from 'react-icons/gr'


export const MainNavbar = () => {
    // drawer
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
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
                    <Link href="/courses" className='text-sm text-gray-400 hover:text-[#7000FD] hover:font-semibold duration-200 ease-in'>Online Courses</Link>
                    <Link href="/" className='text-sm text-gray-400 hover:text-[#7000FD] hover:font-semibold duration-200 ease-in'>Bootcamps</Link>
                    <Link href="/" className='text-sm text-gray-400 hover:text-[#7000FD] hover:font-semibold duration-200 ease-in'>Resources</Link>
                    <Link href="/" className='text-sm text-gray-400 hover:text-[#7000FD] hover:font-semibold duration-200 ease-in'>Careers</Link>
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
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
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
