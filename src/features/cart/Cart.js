import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalQuantity, getTotalCartPrice, getCart, clearCart, deleteItem, decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import { formatCurrency } from "../../services/helpers";
import { Link } from "react-router-dom";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      <Link to="/menu" className="m-4 text-orange-400">&larr; Back to menu</Link>
      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mb-1 divide-y divide-orange-300">
      {cart.map((item) => (
          <li key={item.pizzaId} item={item} className="flex m-3 items-center">
            <span className="mr-3">{item.quantity} ×</span>
            <p>{item.name}</p>
            <p className="ml-auto">{formatCurrency(item.totalPrice)}</p>
            <button className="p-1 md:px-3.5 md:py-2 bg-orange-500 rounded-3xl text-sm ml-3" onClick={()=>dispatch(decreaseItemQuantity(item.pizzaId))}>-</button>
            <button className="p-1 md:px-3.5 md:py-2 bg-orange-500  rounded-3xl text-sm" onClick={()=>dispatch(increaseItemQuantity(item.pizzaId))}>+</button>
            <button className="bg-orange-500 p-1 rounded-xl m-1 ml-3 hover:bg-orange-600 cursor-pointer" onClick={()=>dispatch(deleteItem(item.pizzaId))}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="m-2 flex justify-end gap-4">
        <span>{totalCartQuantity}</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </div>

      <Link to="/order/new"><button className="bg-orange-500 p-1 rounded-2xl m-1 hover:bg-orange-600 cursor-pointer" >Order Pizza</button></Link>
      <button className="bg-orange-500 p-1 rounded-2xl m-1 hover:bg-orange-600 cursor-pointer" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}

export default Cart;
