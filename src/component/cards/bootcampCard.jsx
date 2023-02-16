import Image from 'next/image'
import React from 'react'

export const BootcampCard = () => {
  return (
    <div>
        <section className='flex flex-col'>
            <Image src="/dummy.svg" alt="" width={100} height={100} className='w-full rounded-lg'/>
            <span className="px-4 py-2 text-xs font-semibold text-[#7000FD] bg-white rounded-full absolute translate-y-3 ml-3">Live Bootcamp</span>
        </section>
        <section className='mt-3 space-y-3'>
            <h5 className="text-xl font-bold">UI/UX Design Essentials: Create Engaging and User Interfaces</h5>
            <div className="flex flex-row items-center gap-x-2">
                <p className='text-sm font-bold text-[#7000FD]'>Garry Kra</p>
                <p className='text-sm text-gray-400'>|</p>
                <p className='text-sm text-gray-400'>Product Design</p>
            </div>
            <button className="w-full py-2 mx-auto bg-[#7000FD] rounded-md text-white font-semibold">Enroll Now</button>
        </section>
    </div>
  )
}
