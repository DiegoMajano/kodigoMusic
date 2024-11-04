import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import Index from '../components'


export default function Rutas() {

  const demoWindow = () => window
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index window={demoWindow} />}/>
                <Route path='/index' element={<Index window={demoWindow} />} />
                <Route path='/login'  element={<Login />} />
            </Routes>
        </BrowserRouter>
  )
}
