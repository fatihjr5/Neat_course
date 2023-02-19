import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='px-10 lg:px-24 mb-5 mt-20 gap-y-28'>
      <div className="flex flex-col gap-y-6 md:flex-row items-start justify-between">
        <div className="flex flex-col space-y-2">
          <Image src="/neat_logo.svg" alt='Neat' className='w-8' width={100} height={100}/>
          <p className="text-sm text-gray-500">Being fully bootstrapped, we`re not <br className='hidden lg:block' /> driven by money or interested in <br className='hidden lg:block' /> becoming a mystical unicorn.</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h5 className='text-lg font-bold'>Lets learn together</h5>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2">
            <section className='flex flex-col space-y-2'>
              <Link href="" className='text-sm text-gray-500 hover:text-[#7000FD] ease-in duration-200'>Data Scientist</Link>
              <Link href="" className='text-sm text-gray-500 hover:text-[#7000FD] ease-in duration-200'>Machine Learning</Link>
              <Link href="" className='text-sm text-gray-500 hover:text-[#7000FD] ease-in duration-200'>Web Development</Link>
              <Link href="" className='text-sm text-gray-500 hover:text-[#7000FD] ease-in duration-200'>Mobile Development</Link>
              <Link href="" className='text-sm text-gray-500 hover:text-[#7000FD] ease-in duration-200'>UI/UX Design</Link>
            </section>
            <section className='flex flex-col space-y-2'>
              <Link href="" className='text-sm text-gray-500 hover:text-[#7000FD] ease-in duration-200'>Blockchain Development</Link>
              <Link href="" className='text-sm text-gray-500 hover:text-[#7000FD] ease-in duration-200'>Clouds Development</Link>
              <Link href="" className='text-sm text-gray-500 hover:text-[#7000FD] ease-in duration-200'>Cybersecurity</Link>
              <Link href="" className='text-sm text-gray-500 hover:text-[#7000FD] ease-in duration-200'>Product Design</Link>
              <Link href="" className='text-sm text-gray-500 hover:text-[#7000FD] ease-in duration-200'>Devops Engineer</Link>
            </section>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <Image src="/neat_logo.svg" alt='Neat' className='w-8' width={100} height={100}/>
          <p className="text-sm text-gray-500">Being fully bootstrapped, we`re not <br className='hidden lg:block' /> driven by money or interested in <br className='hidden lg:block' /> becoming a mystical unicorn.</p>
        </div>
        <div className="flex flex-col space-y-2">
          <Image src="/neat_logo.svg" alt='Neat' className='w-8' width={100} height={100}/>
          <p className="text-sm text-gray-500">Being fully bootstrapped, we`re not <br className='hidden lg:block' /> driven by money or interested in <br className='hidden lg:block' /> becoming a mystical unicorn.</p>
        </div>
      </div>
    </div>
  )
}
