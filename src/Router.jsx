import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { MainPage } from './pages/main/MainPage'
import { Alinka } from './pages/alinka/Alinka'
import { Game } from './pages/game/Game'

export const Router = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <div className="AnimationRoutes">
        <Routes location={location} key={location.pathname}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/alinka" element={<Alinka />} />
          <Route path="/game" element={<Game />} />
          <Route path="/*" element={<Navigate to="/main" />} />
        </Routes>
      </div>
    </AnimatePresence>
  )
}
