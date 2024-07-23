import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";


function CreateOrder() {
  // const username = useSelector(state=>state.user.username)
  const cart = useSelector(getCart);


  return (
    <div>
      <h2 className="text-2xl text-center mt-6 font-semibold">Ready to order? Let's go!</h2>
       <Form method="POST" className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md mx-auto mt-10">
    
        <div className="mb-4">
          <label className="block text-slate-900 font-semibold mb-2">First Name</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="customer" required />
        </div>

        <div>
          <label className="block text-slate-900 font-semibold mb-2">Phone</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="tel" name="phone" required />
        </div>

        <div>
          <label className="block text-slate-900 font-semibold mb-2">Address</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="address" required />
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button className="w-[20] mt-3 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500" to="/order/new">Order now</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
  };
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
  // might change later with the redirect
}

export default CreateOrder;
