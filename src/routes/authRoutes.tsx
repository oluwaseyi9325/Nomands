import { lazy } from 'react'
import { Route } from 'react-router-dom'
import AdminNavbars from '../pages/(admin)/AdminWrappers'
import CohortsPage from '@/pages/(admin)/CohortsPage'
import ManageCohortPage from '@/pages/(admin)/ManageCohortPage'
import ModuleQuestionsPage from '@/pages/(admin)/ModuleQuestionsPage'
import StudentListPage from '@/pages/(admin)/StudentListPage'

const AdminDashboardPage = lazy(() => import('../pages/(admin)/dashboard'))

const adminRoutes = (
  <Route element={<AdminNavbars />}>
    <Route path="/admin" element={<AdminDashboardPage />} />
    <Route path='/create_cohort' element={<CohortsPage />} />
    <Route path='/manage_cohort' element={<ManageCohortPage />} />
    <Route path='/questions' element={<ModuleQuestionsPage />} />
    <Route path='/student' element={<StudentListPage/>} />
  </Route>
)

export default adminRoutes
