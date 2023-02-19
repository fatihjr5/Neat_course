import Image from 'next/image'
import React from 'react'

export const CourseCard = () => {
  return (
    <div>
        <Image src="/dummy.svg" alt='couse' width={100} height={100} className='w-full'/>
        <section className='mt-3 space-y-3'>
            <h5 className="text-lg font-bold">UI/UX: Create Engaging and User Interfaces</h5>
            <div className="flex flex-row items-center gap-x-2">
                <p className='text-sm font-medium'>40 Classes</p>
                <div className="flex flex-row items-center gap-x-2">
                    <div className="p-1 rounded-full animate-pulse bg-[#7000FD]"></div>
                    <p className='text-sm font-medium'>1322 Active Student</p>
                </div>
            </div>
            <button className="w-full py-2 mx-auto bg-[#7000FD] rounded-md text-white font-semibold">Enroll Now</button>
        </section>
    </div>
  )
}
