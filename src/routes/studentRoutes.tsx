import PageLayout from '@/_compoents/layout'
import AllCohortsPage from '@/pages/(student)/mycohort'
import ViewCohortPage from '@/pages/(student)/mycohort/viewCohort'
import { lazy } from 'react'
import { Route } from 'react-router-dom'
// import StudentLayout from '../layouts/StudentLayout'

const StudentDashboardPage = lazy(() => import('../pages/(student)/dashboard'))

const studentRoutes = (
  <Route path='student' element={<PageLayout role="student"/>}>
    <Route index element={<StudentDashboardPage />} />
    <Route path="mycohort" element={<AllCohortsPage />} />
    <Route path="view" element={<ViewCohortPage />} />
  </Route>
)

export default studentRoutes
