import { Routes } from 'react-router-dom'
import { Suspense } from 'react'
import publicRoutes from './publicRoutes'
import adminRoutes from './adminRoutes'
import studentRoutes from './studentRoutes'
import authRoutes from './authRoutes'


const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {publicRoutes}
        {adminRoutes}
        {studentRoutes}
        {authRoutes}
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
