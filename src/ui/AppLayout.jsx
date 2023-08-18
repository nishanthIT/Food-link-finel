import { Outlet, useNavigation } from "react-router-dom"
import Header from "./Header"

import CartOverview from "../features/cart/CartOverview"
import Loader from "./Loader"
function Applayout(){
    const navigation = useNavigation()
    const isloading = navigation.state =="loading"
    
    return(
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">

            {isloading && <Loader/>}
          

           
            <Header/>
            <div className="overflow-scroll ">
            <main className=" mx-auto max-w-3xl ">
                <Outlet/>
            </main>
            </div>
            <CartOverview/>
        

       
        </div>
    )
}
export default Applayout