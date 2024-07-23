import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../services/helpers';
import { useEffect } from 'react';


function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
    <div className="flex items-center justify-between gap-4 text-sm">
      <p>
        <span className="font-bold">{quantity}&times;</span> {name}
      </p>
      <p className="font-bold">{formatCurrency(totalPrice)}</p>
    </div>
    <p className="text-sm capitalize italic text-stone-500">
      {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
    </p>
  </li>
  );
}

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher]
  );

  const {
    id,
    status,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h2 className="text-xl font-semibold">Order #{id} status</h2>

      <div className="space-x-2">
        <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
          {status} order
        </span>
      </div>
    </div>

    <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
      <p className="font-medium">
        {deliveryIn >= 0
          ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
          : 'Order should have arrived'}
      </p>
      <p className="text-xs text-stone-500">
        (Estimated delivery: {formatDate(estimatedDelivery)})
      </p>
    </div>

    <ul className="divide-stone-200 divide-y border-b border-t">
      {cart.map((item) => (
        <OrderItem
          key={item.pizzaId}
          item={item}
          isLoadingIngredients={fetcher.state === 'loading'}
          ingredients={
            fetcher?.data?.find((el) => el.id === item.pizzaId)
              ?.ingredients ?? []
          }
        />
      ))}
    </ul>

    <div className="space-y-2 bg-stone-200 px-6 py-5">
      <p className="text-sm font-medium text-stone-600">
        Price pizza: {formatCurrency(orderPrice)} Pay by cash
      </p>
    </div>
  </div>
);
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
