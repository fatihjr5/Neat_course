import Head from 'next/head'
import { Inter } from '@next/font/google'
import { MainNavbar } from '@/component/navbar'
import { Footer } from '@/component/footer'

const inter = Inter({ subsets: ['latin'] })

export const MainLayout = ({children}) => {
  return (
    <div className={inter.className}>
        <MainNavbar/>
          <section>
            {children}
          </section>
        <Footer/>
    </div>
  )
}
