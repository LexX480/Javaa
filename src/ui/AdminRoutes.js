import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router";

const AdminRoutes = () => {

  const { user } = useSelector((state) => state.userSlice);
  return user === null ? <Navigate replace to='/' /> : user.isAdmin ? <Outlet /> : <Navigate replace to='/' />
}
export default AdminRoutes