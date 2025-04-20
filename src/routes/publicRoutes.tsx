import Contact from '@/pages/(landingpages)/Contact'
import NotFound from '@/pages/not-found'
import { lazy } from 'react'
import { Route } from 'react-router-dom'


const LandingPage = lazy(() => import('../pages/(landingpages)/Home/Landingpage'))

const publicRoutes = (
  <>
    <Route path="/" element={<LandingPage />} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="*" element={<NotFound/>} />
  </>
)

export default publicRoutes
