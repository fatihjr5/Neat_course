import { BootcampCard } from "@/component/cards/bootcampCard";
import { MainLayout } from "@/layout/main";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col-reverse md:grid grid-cols-1 lg:grid-cols-2 items-center bg-[#f9f8ff] px-10 lg:px-24 py-20 border-b lg:py-36">
        <section className="space-y-6 mt-36 lg:mt-0">
          <div className="gap-y-2">
            <h5 className="text-4xl font-bold mb-3">Advance your career with <br className="hidden sm:block"/> our best courses.</h5>
            <p className="text-base font-normal text-gray-400 leading-normal">Accelerate your tech career with our intensive bootcamp <br className="hidden sm:block"/> and online classes. Choose from a variety of programs <br className="hidden sm:block"/> covering the latest skills and technologies.</p>
          </div>
          <div className="flex flex-row items-center gap-x-4">
            <section className="flex flex-col">
              <p className="text-2xl font-bold text-[#7000fd]">144</p>
              <span className="text-base text-gray-400">Online Classes</span>
            </section>
            |
            <section className="flex flex-col">
              <p className="text-2xl font-bold text-[#7000fd]">144</p>
              <span className="text-base text-gray-400">Bootcamps</span>
            </section>
            |
            <section className="flex flex-col">
              <p className="text-2xl font-bold text-[#7000fd]">3842</p>
              <span className="text-base text-gray-400">Student Enrolled</span>
            </section>
          </div>
          <button className="px-4 py-2 rounded-md text-base lg:text-lg font-medium bg-[#7000FD] text-white ease-in duration-200">Join for free</button>
        </section>
        <Image src='/world.svg' alt="world" width={100} height={100} className="w-full absolute top-0 inset-x-0 lg:relative z-0" />
      </div>
      <div className="px-10 lg:px-24 my-20 space-y-12">
        <section className="space-y-2">
          <h5 className="text-3xl lg:text-4xl font-bold">Bootcamp Classes</h5>
          <p className="text-lg font-normal text-gray-500">For you that want to get early to learning</p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BootcampCard/>
          <BootcampCard/>
          <BootcampCard/>
          <BootcampCard/>
          <BootcampCard/>
          <BootcampCard/>
        </div>
        <div className="text-center">
          <button className="px-4 py-2 rounded-md text-base lg:text-lg font-medium ring-1 ring-[#7000FD] text-[#7000FD] ease-in duration-200">See all Bootcamps</button>
        </div>
      </div>
    </MainLayout>
  )
}
