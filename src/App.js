import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayOut from "./ui/RootLayOut";
import HomePage from "./feature/home/HomePage";
import Login from "./feature/auth/Login";
import SignUp from "./feature/auth/SignUp";
import PublicRoutes from "./ui/PublicRoutes";
import About from "./feature/about/About";
import Sample1 from "./feature/about/Sample1";
import Sample2 from "./feature/about/Sample2";
import AdminRoutes from "./ui/AdminRoutes";
import AdminProducts from "./feature/admin/AdminProducts";
import ProductForm from "./feature/admin/ProductForm";
import ProductEdit from "./feature/admin/ProductEdit/ProductEdit";
import ProductDetail from "./feature/products/ProductDetail";
import UserRoutes from "./ui/UserRoutes";
import CartPage from "./feature/cart/CartPage";
import ShippingAddress from "./feature/user/ShippingAddress";
import PlaceOrder from "./feature/user/PlaceOrder";
import UserProfile from "./feature/user/user_profile/UserProfile";
import OrderDetail from "./feature/user/user_profile/OrderDetail";




const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        { index: true, element: <HomePage /> },

        {
          element: <PublicRoutes />,
          children: [
            { path: 'login', element: <Login /> },
            { path: 'signUp', element: <SignUp /> },
          ]
        },

        {
          element: <UserRoutes />,
          children: [
            { path: 'carts', element: <CartPage /> },
            { path: 'shippingAddress', element: <ShippingAddress /> },
            { path: 'placeOrder', element: <PlaceOrder /> },
            { path: 'userProfile', element: <UserProfile /> },
          ]
        },

        {
          element: <AdminRoutes />,
          children: [
            { path: 'admin/products', element: <AdminProducts /> },
            { path: 'add/product', element: <ProductForm /> },
            { path: 'edit/product/:id', element: <ProductEdit /> },
          ]
        },
        {
          path: 'about', element: <About />, children: [
            { index: true, element: <Sample1 /> },
            { path: 'sample2', element: <Sample2 /> },
          ]
        },
        { path: 'product/:id', element: <ProductDetail /> },
        { path: 'order/:id', element: <OrderDetail /> },
      ]
    },

  ]);


  return <RouterProvider router={router} />
}

export default App