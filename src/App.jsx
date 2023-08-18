import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./ui/Home"
import Error from "./ui/Error"

import Menu, { loader as MenuLoader } from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import Createorder,{action as CreateOrderaction} from "./features/order/CreateOrder"
import Order,{loader as OrderLoader} from "./features/order/Order"
import Applayout from "./ui/AppLayout"


const router = createBrowserRouter([
  {
    element:<Applayout/>,
    errorElement:<Error/>,
    children:[ 
      {
        path:"/",
        element:<Home/>
      },{
        path:"/menu",
        element:<Menu/>,
        loader:MenuLoader,
        errorElement:<Error/>
        
      },
      {
        path:"/cart",
        element:<Cart/>
      },{
        path:"/order/new",
        element:<Createorder/>,
        action:CreateOrderaction
    
      },{
        path:"/order/:orderID",
        element:<Order/>,
        loader:OrderLoader,
        errorElement:<Error/>
      }]
  }
  

 
])







function App(){

  return <RouterProvider router={router}/>  
}
export default App