// src/routes/RouteGuard.jsx
import { Navigate, Outlet } from 'react-router-dom'
import useUserStore from '@/store/userStore'

const RouteGuard = ({ role }) => {
  const userRole = useUserStore((state) => state.role)

  if (userRole !== role) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default RouteGuard
