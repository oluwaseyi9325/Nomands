import AuthLayout from '@/pages/(auth)/AuthLayout'
import LoginPage from '@/pages/(auth)/Signin'
import { lazy } from 'react'
import { Route } from 'react-router-dom'


const SignupPage = lazy(() => import('../pages/(auth)/signup'))
const ResetPasswordPage = lazy(() => import('../pages/(auth)/Reset_password'))
const ForgotPasswordPage = lazy(() => import('../pages/(auth)/forgot_password'))
const OtpPage = lazy(() => import('../pages/(auth)/otp_password'))


const authRoutes = (
  <>
    <Route element={<AuthLayout/>}>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/reset_password" element={<ResetPasswordPage />} />
      <Route path="/forgot_password" element={<ForgotPasswordPage />} />
      <Route path="/password_otp" element={<OtpPage />} />
    </Route>
  </>
)

export default authRoutes
