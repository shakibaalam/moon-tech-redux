import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";
import WishList from "../pages/WishList";

export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home/>   
            },
            {
                path:"/about",
                element:<About/>   
            },
            {
                path:"/top-rated",
                element:<TopRated/>   
            },
            {
                path:"/cart",
                element:<Cart/>   
            },
            {
                path:"/wish-list",
                element:<WishList/>   
            },
        ]
    }
])