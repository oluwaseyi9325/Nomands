import AdminNavbars from '@/pages/(admin)/AdminWrappers'
import AllCohortsPage from '@/pages/(student)/AllCohortsPage'
import ViewCohortPage from '@/pages/(student)/ViewCohortPage'
import { lazy } from 'react'
import { Route } from 'react-router-dom'
// import StudentLayout from '../layouts/StudentLayout'

const StudentDashboardPage = lazy(() => import('../pages/(student)/dashboard'))

const studentRoutes = (
  <Route element={<AdminNavbars />}>
    <Route path="/user" element={<StudentDashboardPage />} />
    <Route path="/all-cohort" element={<AllCohortsPage />} />
    <Route path="/view" element={<ViewCohortPage />} />
    {/* <Route path="/student" element={<StudentDashboardPage />} /> */}
  </Route>
)

export default studentRoutes
