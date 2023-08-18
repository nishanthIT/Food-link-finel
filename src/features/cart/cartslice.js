import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart:[
       
    ],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        additems(state,action){
            state.cart.push(action.payload)
        },
        deleteitem(state,action){
            state.cart = state.cart.filter((item)=> item.pizzaId !== action.payload)
        },
        increaseitem(state,action){
            const item = state.cart.find((item) =>item.pizzaId == action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;

        },
        decreaseitems(state,action){
            const item = state.cart.find((item) =>item.pizzaId == action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
            if(item.quantity === 0 )cartSlice.caseReducers.deleteitem(state,action)

        },
        clearCart(state,action){
            state.cart = [];
        }
    }

})
export  const getCartQuantity =(item)=> item.cart.cart.reduce((sum,item) => sum + item.quantity ,0)
export const getCartPrice =(item)=> item.cart.cart.reduce((sum,item)=>sum +item.totalPrice,0)
export const getCurrentQuantityById= (id) => (state) => state.cart.cart.find((item)=> item.pizzaId === id)?.quantity ?? 0
export const {additems,deleteitem,increaseitem,decreaseitems,clearCart} =cartSlice.actions
export default cartSlice.reducer
