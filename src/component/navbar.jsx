import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Dropdown, Drawer, Modal } from 'antd'

import {TbMenu} from 'react-icons/tb'
import {GrCircleInformation} from 'react-icons/gr'


export const MainNavbar = () => {
    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    // drawer
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const onChange = (e) => {
      setPlacement(e.target.value);
    };
    // dropdown
    const items = [
        {
          key: '1',
          label: (
            <section>
                <Link href="/">Web Development</Link>
            </section>
          ),
        },
        {
          key: '2',
          label: (
            <section>
                <Link href="/">Blockchain Development</Link>
            </section>
          ),
        },
        {
          key: '3',
          label: (
            <section>
                <Link href="/">Cloud Engineer</Link>
            </section>
          ),
        },
        {
          key: '4',
          label: (
            <section>
                <Link href="/">DevOps Engineer</Link>
            </section>
          ),
        },
      ];
  return (
    <>
        <div className='px-24 hidden lg:flex flex-row justify-between items-center py-5 bg-white drop-shadow-sm z-50 fixed top-0 inset-x-0 w-full'>
            <Link href="/">
                <Image src="/neat_logo.svg" alt='Neat' className='w-8' width={100} height={100}/>
            </Link>
            <section className='flex flex-row items-center gap-x-4 lg:ml-12'>
                    <Dropdown menu={{items}}>
                        <button onClick={(e) => e.preventDefault()}>
                            <span className='text-sm'>Online Courses</span>
                        </button>
                    </Dropdown>
                    <Dropdown menu={{items}}>
                        <button onClick={(e) => e.preventDefault()}>
                            <span className='text-sm'>Bootcamps</span>
                        </button>
                    </Dropdown>
                    <Dropdown menu={{items}}>
                        <button onClick={(e) => e.preventDefault()}>
                            <span className='text-sm'>Resources</span>
                        </button>
                    </Dropdown>
                    <Link href="/" className='text-sm'>Careers</Link>
                    <button onClick={showModal}>
                      <GrCircleInformation/>
                    </button>
                    <Modal title="Hello There" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <p className="text-lg">We still developed and hopefully it will be done in the end of the month or soon as possible.</p>
                    </Modal>
            </section>
            <section>
                <button className="px-4 py-2 rounded-md ring-1 ring-[#7000FD] text-sm font-medium text-[#7000FD] hover:bg-[#7000FD] hover:text-white ease-in duration-200">Sign up for free</button>
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
