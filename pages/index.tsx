import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Header, Footer} from '../components/index'
import HomePage from './Features/Home/index';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home – Dhalem</title>
      </Head>
      <Header />
      <HomePage />
      <Footer />
    </>
  )
}

export default Home
