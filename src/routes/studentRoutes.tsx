import PageLayout from '@/_compoents/layout'
import { ROLES } from '@/constants/roles'
import AllCohortsPage from '@/pages/(student)/mycohort'
import ViewCohortPage from '@/pages/(student)/mycohort/viewCohort'
import { lazy } from 'react'
import { Route } from 'react-router-dom'


const StudentDashboardPage = lazy(() => import('../pages/(student)/dashboard'))
// element={<RouteGuard role={ROLES.STUDENT} />}
const studentRoutes = (
  <Route >
    <Route path='student' element={<PageLayout role={ROLES.STUDENT} />}>
    <Route index element={<StudentDashboardPage />} />
    <Route path="mycohort" element={<AllCohortsPage />} />
    <Route path="mycohort/:id" element={<ViewCohortPage />} />
  </Route>
 </Route>
)

export default studentRoutes
