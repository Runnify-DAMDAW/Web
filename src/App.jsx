import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { AuthProvider } from './contexts/AuthContext'
import { CarreraProvider } from './contexts/CarreraContext'


const App = () => {
  return (
    <>
    <AuthProvider>
      <CarreraProvider>
        <RouterProvider router={router} />
      </CarreraProvider>
    </AuthProvider>
    </>
  )
}

export default App