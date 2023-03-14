import { CourseNav } from '@/component/navbar'
import { CourseLayout } from '@/layout/course'
import Courses from 'data/course'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const getStaticProps = async ({params}) => {
  const dataCourse = Courses.filter(p => p.course.toString() === params.id)
  return {
      props:{
          getCourse: Courses,
          course: dataCourse[0],
      },
  }
}

export const getStaticPaths = async () => {
  const paths = Courses.map(item => ({
      params: { id: item.course.toString() },
  }));
  return {paths, fallback: false}
}

function DetailCourse({course, getCourse}) {

  return (
    <>
      <CourseLayout>
        {/* head */}
        <Head>
          <title>{course.course}</title>
          <meta name="description" content={course.course} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/neat_logo.svg" />
        </Head>
        {/* Navbar -  the reason is i want to add the title that stick in navbar, so if i take props too far, it wont work */}

        <CourseNav title={course.course} category={course.type}/>

        {/* Content start here */}
        <div className="px-10 lg:px-24 py-20 lg:py-24">
          <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${course.videoUrl}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex flex-row items-center gap-x-2 border-b border-gray-200 pb-4">
              <Image src={course.mentor.photo} className='w-10 bg-gray-100 rounded-full' alt={course.mentor.name + "" + "Photo"} width={100} height={100}/>
              <div className="flex flex-col">
                <p className="text-base font-medium">{course.mentor.name}</p>
                <p className="text-sm font-normal text-gray-500">{course.mentor.job}</p>
              </div>
            </div>
              <div className="flex flex-col gap-y-8 lg:gap-y-0">
                {/* Category & Description */}
                <div className="flex flex-col items-start justify-between gap-4">
                    {/* spacer */}
                    <div className="flex flex-col space-y-1">
                      <p className="text-xs font-medium text-gray-500">Category</p>
                      <p className="text-base font-normal text-gray-500 bg-slate-50 px-4 py-2 rounded-md flex flex-row gap-x-2 items-center">
                        <div className="w-2 h-2 rounded-full animate-pulse duration-75 bg-[#7000FD]"></div>
                        {course.technology}</p>
                    </div>
                    {/* spacer */}
                    <div className="flex flex-col space-y-1">
                      <p className="text-xs font-medium text-gray-500">Description</p>
                      <p className="text-base font-normal leading-relaxed w-full">{course.description}</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </CourseLayout>
    </>
  )
}

export default DetailCourse