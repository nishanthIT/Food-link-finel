import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import User from "../features/user/username"

function Header (){
    return(
      
            <header className="flex items-center justify-between bg-yellow-400 uppercase border-b border-stone-200 px-4 py-3 sm:px-6">
                <Link className="tracking-widest" to={"/"}> Delever Raw Materials</Link>
                <SearchOrder/>
               <User/>
            </header>
      
    )
}
export default Header