import Create from "../components/Create"
import DashBoard from "../components/DashBoard"
import TopBar from "../components/TopBar"
import View from "../components/View"
import { Navigate } from "react-router-dom"


const AppRouter =[
    {
        path:'/',
        element:<><TopBar/><DashBoard/></>
    },
    {
        path:'/dashboard',
        element:<><TopBar/><DashBoard/></>
    },
    {
        path:'/create',
        element:<><TopBar/><Create/></>
    },
    {
        path:'/view/:id',
        element:<><TopBar/><View/></>
    },
    {
        path:'/*',
        element:<Navigate to='/'/>
    }
]
export  default AppRouter