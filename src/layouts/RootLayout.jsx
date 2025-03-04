import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='bg-[#909590]'>
      <header className='sticky top-0 w-full h-28 flex items-center bg-gradient-to-r from-[#2c302e] to-[#537a5a]'>
          <h1 className='text-white flex px-12 text-4xl font-bold'>Runnify</h1>
      </header>
      <main>
          <Outlet />
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default RootLayout