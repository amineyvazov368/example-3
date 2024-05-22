import PageRoot from "../pages/PageRoot";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Detail from "../pages/Detail";
import Basket from "../pages/Basket"



export const ROUTES=[
    {
        path:"/",
        element:<PageRoot/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
               path:"detail/:id",
                element:<Detail/>
            },
            {
               path:"basket",
                element:<Basket/>
            },
        ]
    }
]