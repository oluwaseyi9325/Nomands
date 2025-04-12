import NotFound from '@/pages/not-found'
import { lazy } from 'react'
import { Route } from 'react-router-dom'
// import AuthLayout from '../layouts/AuthLayout'

const SignupPage = lazy(() => import('../pages/(auth)/signup'))
const ResetPasswordPage = lazy(() => import('../pages/(auth)/Reset_password'))
const ForgotPasswordPage = lazy(() => import('../pages/(auth)/forgot_password'))
const OtpPage = lazy(() => import('../pages/(auth)/otp_password'))
const LandingPage = lazy(() => import('../Landingpage'))

const publicRoutes = (
  <>
    <Route path="/" element={<LandingPage />} />
    <Route>
    <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/reset" element={<ResetPasswordPage />} />
      <Route path="/forgot" element={<ForgotPasswordPage />} />
      <Route path="/otp" element={<OtpPage />} />
    </Route>
  </>
)

export default publicRoutes
