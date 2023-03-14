import { useState } from 'react';
import { CourseCard } from '@/component/cards/courseCard';
import { MainLayout } from '@/layout/main';
import { Input } from 'antd';
import Head from 'next/head';
import Courses from 'data/course';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

export const getStaticProps = async () => {
    return {
      props: {
        dataCourse: Courses,
      }
    }
}

const DetailCourse = ({dataCourse}) => {
    return (
        <MainLayout>
            <Head>
              <title>Courses</title>
              <meta name="description" content="Digital platform to learn everything" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/neat_logo.svg" />
            </Head>
            <section className="flex flex-col gap-y-2 mt-32">
                <h5 className='text-3xl lg:text-4xl font-bold text-center lg:leading-snug'>Accelerate Your Learnings <br /> Journey with Our Classes</h5>
                <p className="text-base font-normal text-gray-500 text-center">Choose from our online and in-person learning methods, <br /> both designed to be hands-on and interactive.</p>
            </section>
            <section className="flex flex-row items-center mt-8">
                <Input className='w-96 py-2 mx-auto' placeholder="Search courses" />
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 lg:px-24 gap-6 mt-20">
              {dataCourse.length === 0 ? (
                <AiOutlineLoading3Quarters className='animate-spin mx-auto'/>
              ) : (
                dataCourse.map((items) =>
                  <CourseCard key={items.id} title={items.course} student={items.student} url={items.course}/>
                )
              )}
            </div>
        </MainLayout>
    );
}

export default DetailCourse;
