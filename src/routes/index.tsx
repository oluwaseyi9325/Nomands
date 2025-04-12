import { Routes } from 'react-router-dom'
import { Suspense } from 'react'
import publicRoutes from './publicRoutes'
import adminRoutes from './authRoutes'
import studentRoutes from './studentRoutes'


const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {publicRoutes}
        {adminRoutes}
        {studentRoutes}
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
