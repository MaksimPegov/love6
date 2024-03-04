import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { cn } from '@bem-react/classname'
import { MainPage } from './pages/main/MainPage'
import { Router } from './Router'

const bem = cn('App')

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
