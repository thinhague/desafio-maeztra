import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CarouselHome } from '@/components/CarouselHome'
import { Tipbar } from '@/components/Tipbar'
import { Brands } from '@/components/Brands'
import { Shelf } from '@/components/Shelf'
import { InfoCard } from '@/components/InfoCard'
import { Modal } from '@/components/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Desafio Maeztra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <CarouselHome />
        <Tipbar />
        <Brands />
        <Shelf />
        <InfoCard />
        <Footer />
        <Modal />
      </main>
    </>
  )
}
