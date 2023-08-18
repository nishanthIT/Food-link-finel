import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartPrice, getCartQuantity } from "./cartslice";


function CartOverview() {
  const totalCartQuantity = useSelector(getCartQuantity)
  const totalPrice = useSelector(getCartPrice)
  return (
    <div className="flex items-center justify-between bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6 text-sm md:text-base ">
      <p className=" text-stone-00 space-x-4 sm:space-x-6 ">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
 <Link to={"cart"} > Open Cart &rarr; </Link>
    </div>
  );
}

export default CartOverview;
