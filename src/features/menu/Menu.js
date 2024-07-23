import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { useDispatch } from "react-redux";
import {addItem} from "../cart/cartSlice"
function Menu() {
  const menu = useLoaderData();
  const dispatch = useDispatch();

  function handleAddToCart(pizza) {
    const newItem = {
      pizzaId: pizza.id,
      name: pizza.name,
      unitPrice: pizza.unitPrice,
      quantity: 1,
     
      totalPrice: pizza.unitPrice * 1,
    };
    dispatch(addItem(newItem));

  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3 px-3">
      {menu.map((pizza) => (
        <li pizza={pizza} key={pizza.id} className="bg-white rounded-lg shadow-md">
          <img src={pizza.imageUrl} alt={pizza.name} className="rounded-md" />
          <div className="p-4 flex flex-col justify-between flex-grow relative">
              <div className="flex items-center mb-2">
                <p className="text-lg font-semibold mr-11">{pizza.name}</p>
                <p className="text-orange-400 text-lg font-medium">${pizza.unitPrice.toFixed(2)}</p>
              </div>
              <p className="text-orange-700 capitalize">{pizza.ingredients.join(', ')}</p>
              <button className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500" onClick={() => handleAddToCart(pizza)}>Add to cart</button>
            </div>
        </li>
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
