import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router";

const PublicRoutes = () => {

  const { user } = useSelector((state) => state.userSlice);
  return user === null ? <Outlet /> : <Navigate replace to='/' />
}
export default PublicRoutes