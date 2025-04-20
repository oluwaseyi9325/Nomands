import PageLayout from '@/_compoents/layout'
import AllCohortsPage from '@/pages/(student)/mycohort'
import ViewCohortPage from '@/pages/(student)/mycohort/viewCohort'
import { lazy } from 'react'
import { Route } from 'react-router-dom'
import RouteGuard from './RouteGuard'

const StudentDashboardPage = lazy(() => import('../pages/(student)/dashboard'))

const studentRoutes = (
  <Route element={<RouteGuard role="student" />}>
     <Route path='student' element={<PageLayout role="student"/>}>
    <Route index element={<StudentDashboardPage />} />
    <Route path="mycohort" element={<AllCohortsPage />} />
    <Route path="mycohort/:id" element={<ViewCohortPage />} />
  </Route>
 </Route>
)

export default studentRoutes
