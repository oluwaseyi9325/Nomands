import { Routes, Route } from 'react-router-dom'
import SignupPage from './pages/auth/signup'
import ResetPasswordPage from './pages/auth/Reset_password'
import ForgotPasswordPage from './pages/auth/forgot_password'
import OtpPage from './pages/auth/otp_password'
import AdminDashboardPage from './pages/admin/dashboard'
import StudentDashboardPage from './pages/student/dashboard'
import Dashboard from './pages/admin/dashboard'
import LandingPage from './Landingpage'
// import AdminNavbars from './pages/admin/AdminWrapper'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Dashboard/>} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/reset' element={<ResetPasswordPage />} />
        <Route path='/forgot' element={<ForgotPasswordPage />} />
        <Route path='/otp' element={<OtpPage />} />
        <Route path='/admin' element={<AdminDashboardPage />} />
        <Route path='/student' element={<StudentDashboardPage />} />
      </Routes>
    </>
  )
}

export default App