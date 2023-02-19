import Head from 'next/head'
import { Inter } from '@next/font/google'
import { AuthNavbar, MainNavbar } from '@/component/navbar'

const inter = Inter({ subsets: ['latin'] })

export const AuthLayout = ({children}) => {
  return (
    <div className={inter.className}>
        <Head>
            <title>NEAT - Digital platform to Learn Everything</title>
            <meta name="description" content="Digital platform to learn everything" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/neat_logo.svg" />
        </Head>
        <AuthNavbar/>
        <section>
          {children}
        </section>
    </div>
  )
}
