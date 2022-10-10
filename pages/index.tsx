import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainContainer from '../components/MainContainer'

const Home: NextPage = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Fake Image Detection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer />
    </div>
  )
}

export default Home
