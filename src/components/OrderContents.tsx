import { formatCurrency } from '../helpers';
import { OrderItemT } from '../types';

type OrderContentsPropsT = {
  order: OrderItemT[];
};

export const OrderContents = ({ order }: OrderContentsPropsT) => {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>

      <div className="mt-10 space-y-3">
        {order.length === 0 ? (
          <p className="text-center">La orden está vacía</p>
        ) : (
          order.map((orderItem) => {
            return (
              <div
                key={orderItem.id}
                className="flex items-center justify-between py-5 border-t border-gray-200 last-of-type:border-b"
              >
                <div>
                  <p className="text-lg">
                    {orderItem.name} - {formatCurrency(orderItem.price)}
                  </p>
                  <p className="font-black">
                    Cantidad: {orderItem.quantity} -{' '}
                    {formatCurrency(orderItem.price * orderItem.quantity)}
                  </p>
                </div>
                <button className="w-8 h-8 font-black text-white bg-red-600 rounded-full">
                  X
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
