'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-800 p-8 shadow-md rounded-md">
        <h1 className="text-white text-center text-2xl font-bold mb-4">Welcome to Unilink !</h1>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full mb-2"
            onClick={() => router.push('/register')}
          >
            Register Your University
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full"
            onClick={() => router.push('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
