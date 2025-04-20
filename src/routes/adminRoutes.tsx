import { lazy } from 'react'
import { Route } from 'react-router-dom'
import CohortsPage from '@/pages/(admin)/cohorts'
import ManageCohortPage from '@/pages/(admin)/cohorts/manage'
import ModuleQuestionsPage from '@/pages/(admin)/cohorts/modules'
import StudentListPage from '@/pages/(admin)/users/StudentListPage'
import ExamsResults from '@/pages/(admin)/results'
import PageLayout from '@/_compoents/layout'
import RouteGuard from './RouteGuard'

const AdminDashboardPage = lazy(() => import('../pages/(admin)/dashboard'))

const adminRoutes = (
  <Route element={<RouteGuard role="admin" />}>
    <Route path='admin' element={<PageLayout role="admin"/>}>
    <Route index element={<AdminDashboardPage />} />
    <Route path='cohorts' element={<CohortsPage />} />
    <Route path='manage_cohort' element={<ManageCohortPage />} />
    <Route path='questions' element={<ModuleQuestionsPage />} />
    <Route path='students' element={<StudentListPage />} />
    <Route path='results' element={<ExamsResults />} />
  </Route>
  </Route>
)

export default adminRoutes
