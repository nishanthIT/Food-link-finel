import { useDispatch, } from "react-redux";
import Button from "../../ui/Button";
import {  decreaseitems,   increaseitem } from "./cartslice";

function UpdateItem({pizzaId,currentQuantity}){


    const dispatch = useDispatch()
   
    return(
        <div className="flex items-center gap-2 md:gap-3">
            <Button  type="round" onclick={() => dispatch(decreaseitems(pizzaId))}>-</Button>
            <span className="text-sm font-medium"> {currentQuantity}</span>
            <Button type="round" onclick={() => dispatch(increaseitem(pizzaId))}>+</Button>
        </div>
    )
}
export default UpdateItem