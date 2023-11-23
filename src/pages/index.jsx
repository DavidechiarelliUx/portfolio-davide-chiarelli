import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import HomePage from './HomePage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <HomePage />
      <Head>
        <title>Portfolio Chiartelli Davide</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
      {/* <img src="/logo.svg" alt="Logo" />
        <h1>Ciao</h1>
        <h2>Ciao</h2>
        <h3>Ciao</h3>
        <p>Ciao</p>
        <button className={styles.button}>ciao</button> */}
      </main>
    </>
  )
}