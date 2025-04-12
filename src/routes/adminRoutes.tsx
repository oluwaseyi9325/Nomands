// import AdminNavbars from '@/pages/admin/AdminWrappers'
// import { lazy } from 'react'
// import { Route } from 'react-router-dom'


// const AdminDashboardPage = lazy(() => import('../pages/admin/dashboard'))

// const adminRoutes = (
//   <Route element={<AdminNavbars/>}>
//     <Route path="/admin" element={<AdminDashboardPage/>} />
//   </Route>
// )

// export default adminRoutes


import AdminNavbars from '@/pages/(admin)/AdminWrappers'
import { lazy } from 'react'
import { Route } from 'react-router-dom'
import CohortsPage from '@/pages/(admin)/CohortsPage'

const AdminDashboardPage = lazy(() => import('../pages/(admin)/dashboard'))

const adminRoutes = (
  <Route  element={<AdminNavbars />}>
    <Route path='/' element={<CohortsPage/>} />
    <Route path='/settings' element={<div>Setting page here</div>} />
    <Route path='/create_cohort' element={<CohortsPage/>} />
  </Route>
)

export default adminRoutes
