import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { AuthProvider } from './contexts/AuthContext'
import { CarreraProvider } from './contexts/CarreraContext'
import { ParticipantProvider } from "./contexts/ParticipantContext";

const App = () => {
  return (
    <>
    <AuthProvider>
      <ParticipantProvider>
        <CarreraProvider>
          <RouterProvider router={router} />
        </CarreraProvider>
      </ParticipantProvider>
    </AuthProvider>
    </>
  )
}



export default App