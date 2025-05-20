import Contact from '@/pages/(landingpages)/Contact'
import NotFound from '@/pages/not-found'
import DeviceTypeCheck from '@/pages/quiz/Device'
import Passcode from '@/pages/quiz/Passcode'
import Quiz from '@/pages/quiz/Quiz'
import Unauthorized from '@/pages/quiz/Unauthorized'
import { lazy } from 'react'
import { Route } from 'react-router-dom'


const LandingPage = lazy(() => import('../pages/(landingpages)/Home/Landingpage'))

const publicRoutes = (
  <>
    <Route path="/" element={<LandingPage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/quiz-start" element={<Quiz />} />
    <Route path="/quiz-js" element={<Passcode />} />
    <Route path="/quiz-unauthorized" element={<Unauthorized />} />
    <Route path="/devices" element={<DeviceTypeCheck />} />
    <Route path="*" element={<NotFound/>} />
  </>
)

export default publicRoutes
