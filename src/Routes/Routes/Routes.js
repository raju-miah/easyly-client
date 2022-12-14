import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout"
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog"
import Products from "../../Pages/Categories/Products/Products"
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct"
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer"
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller"
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard"
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders"
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct"
import ReportedItem from "../../Pages/Dashboard/ReportedItem/ReportedItem"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage"
import SignUp from "../../Pages/SignUp/SignUp"
import AdminRoute from "../AdminRoute/AdminRoute"
import BuyerRoute from "../BuyerRoute/BuyerRoute"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import SellerRoute from "../SellerRoute/SellerRoute"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`https://easyly-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorder',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/reported',
                element: <AdminRoute><ReportedItem></ReportedItem></AdminRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])



