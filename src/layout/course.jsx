import React from 'react'
import { Inter } from '@next/font/google'

import { Footer } from '@/component/footer'

const inter = Inter({ subsets: ['latin'] })

export const CourseLayout = ({children}) => {
  return (
    <div className={inter.className}>
        <section>
            {children}
        </section>
        <Footer/>
    </div>
  )
}
