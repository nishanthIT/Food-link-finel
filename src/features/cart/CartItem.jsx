import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import {formatCurrency} from "../../utlis/helpers"
import DeleteItem from "./Deleteitem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartslice";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))
  return (
    <li className="py-3 sm:flex sm:justify-between sm:item-center">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center gap-4" >
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}/>
        <DeleteItem pizzaId={pizzaId} ></DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
