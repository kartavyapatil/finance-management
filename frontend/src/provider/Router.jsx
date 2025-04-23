import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Index from "../Home/Index";
import Login from "../Login";
import Register from "../Register";
import Tableforrxpensebygroup from "../Home/Tableforrxpensebygroup";
export const Routes=createBrowserRouter([
    {
        path:"/",
        Component:App,
        children:[
            {
                path:'/',
                Component:Index,
                
            }   
        ]
    },{
        path:"/login",
        Component:Login
    },{
        path:"/Register",
        Component:Register
    },
    {
        path:"/expense",
        Component: Tableforrxpensebygroup
    }
])