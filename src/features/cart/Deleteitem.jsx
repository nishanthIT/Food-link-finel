import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteitem } from "./cartslice";

function DeleteItem({pizzaId}){
 

    const dispatch = useDispatch()
    return(
        <Button type="small" onclick={() =>dispatch( deleteitem(pizzaId))}>Delete</Button>
    )
  
}
export default DeleteItem