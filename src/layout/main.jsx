import Head from 'next/head'
import { Inter } from '@next/font/google'
import { MainNavbar } from '@/component/navbar'
import { Footer } from '@/component/footer'

const inter = Inter({ subsets: ['latin'] })

export const MainLayout = ({children}) => {
  return (
    <div className={inter.className}>
        <Head>
            <title>NEAT - Digital platform to Learn Everything</title>
            <meta name="description" content="Digital platform to learn everything" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/neat_logo.svg" />
        </Head>
        <MainNavbar/>
          <section>
            {children}
          </section>
        <Footer/>
    </div>
  )
}
