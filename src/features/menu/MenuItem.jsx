import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utlis/helpers";
import { additems, getCurrentQuantityById } from "../cart/cartslice";
import DeleteItem from "../cart/Deleteitem";
import UpdateitemQuantity from "../cart/UpdateItemQuantity"

function MenuItem({ pizza }) {
  
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch()
  function handilAddCart(){
    const newItem = {
      pizzaId :id,
      name,
      quantity:1,
      unitPrice,
      totalPrice:unitPrice * 1,

    };
    dispatch(additems(newItem))
  }
  const currentQuantity = useSelector(getCurrentQuantityById(id))
   const isThere = currentQuantity > 0
  return (
    <li className="flex gap-4 py-2 ">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? `opacity-70 grayscale`:``}`} />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500"> Sold out</p>}
          {isThere && <div className="flex items-center gap-3 md:gap-8 ">
            <UpdateitemQuantity pizzaId={id} currentQuantity={currentQuantity}></UpdateitemQuantity>
            <DeleteItem pizzaId={id}></DeleteItem></div>}
          {!soldOut && !isThere && <Button onclick={handilAddCart} type="small">ADD TO CART</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
