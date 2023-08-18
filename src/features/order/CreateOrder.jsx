import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import Emptycart from "../cart/EmptyCart"
import store from "../../store";
import { clearCart, getCartPrice } from "../cart/cartslice";
import { formatCurrency } from "../../utlis/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );



function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);  
const navigation = useNavigation()
const isLoading = navigation.state =="submitting"
const formError = useActionData();

 
  const cart = useSelector((state)=> state.cart.cart)
  const username = useSelector(state => state.user.username)
  const totalcartPrice = useSelector(getCartPrice)
  const priorityPrice = withPriority ? totalcartPrice * 0.2:0;
  const totalPrice = totalcartPrice + priorityPrice

  if (!cart.length) return <Emptycart/>
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:item-center ">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" required className="input grow" defaultValue={username} />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:item-center ">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
          
          {formError?.phone && <p className="text-xs bg-red-200 text-red-700 rounded-md mt-2 p-2">{formError.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:item-center ">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" required  className="input w-full"/>
          </div>
        </div>

        <div className="mb-6 flex gap-5 items-center">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
             className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus-ring-offset-2" />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          
          <Button type="primary" disabled={isLoading}>{isLoading? `Ordering...` : `Order Now from ${formatCurrency(totalPrice)}`}</Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({request}){
  const formData = await request.formData()
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart:JSON.parse(data.cart),
    priority:data.priority === "true"


  }

  const error ={}
  if(!isValidPhone(order.phone)){
    error.phone ="please provide valide mobile number"
  }
  if(Object.keys(error).length>0) return error
  
  //making api requst to create 
  const neworder = await createOrder(order);
  store.dispatch(clearCart())
  return redirect(`/order/${neworder.id}`)


}
export default CreateOrder;
