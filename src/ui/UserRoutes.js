import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router";

const UserRoutes = () => {

  const { user } = useSelector((state) => state.userSlice);
  return user === null ? <Navigate replace to='/' /> : !user.isAdmin ? <Outlet /> : <Navigate replace to='/' />
}
export default UserRoutes