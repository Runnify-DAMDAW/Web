import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <header className='sticky top-0 w-full h-24'>
        <h1 className='bg-[#4E4E50] text-white h-24 flex px-12 text-4xl items-center font-bold'>Runnify</h1>
    </header>
    <main>
        <Outlet />
    </main>
    <footer>
    </footer>
    </>
  )
}

export default RootLayout