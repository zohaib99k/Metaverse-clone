import React from 'react'
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  return (
    <div className="bg-black relative ">
    <h1>Login screen</h1>
    <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
      <Image className="object-cover rounded-full"
      src="https://variety.com/wp-content/uploads/2021/10/Guy-oseary-ape.jpg?w=1000" width={150} height={150} />

      <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the Metaverse</button>
    </div>
    
    <div className="w-full h-screen">
        <Image src="https://links.papareact.com/55n" 
        layout="fill"
        objectFit="cover"
         />
    </div>
    </div>
  )
}

export default Login