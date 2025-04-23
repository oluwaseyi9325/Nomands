// src/routes/RouteGuard.jsx
import useUserStore from '@/store/store'
import { Navigate, Outlet } from 'react-router-dom'


 const RouteGuard = ({ role }:any) => {
  const userRole = useUserStore((state:any) => state.role)

  if (userRole !== role) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default RouteGuard;


