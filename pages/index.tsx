import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";

const Home: NextPage = () => {
  const { authenticate, isAuthenticated, user , logout} = useMoralis();

  // const isAuthenticated = false;

  if (!isAuthenticated) return <Login/>;
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hello</h1>
      <button onClick={logout}>logout</button>
      {/* <Login /> */}
    </div>
  )
}

export default Home
