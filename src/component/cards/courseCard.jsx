import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const CourseCard = (props) => {
  return (
    <div>
        <Image src="/dummy.svg" alt='couse' width={100} height={100} className='w-full'/>
        <section className='mt-3'>
            <h5 className="text-lg font-bold">{props.title}</h5>
            <div className="flex flex-row items-center gap-x-1 mt-1 mb-3">
                <div className="p-1 rounded-full animate-pulse bg-[#7000FD]"></div>
                <p className='text-sm font-medium'>{props.student} Active Student</p>
            </div>
            <Link href={`/courses/${props.url}`}>
              <button className="w-full py-2 mx-auto bg-[#7000FD] rounded-md text-white font-semibold">Enroll Now</button>
            </Link>
        </section>
    </div>
  )
}
