import { formatCurrency } from '../helpers';
import { OrderItemT } from '../types';
import { formatCurrency } from '../helpers/index';

type OrderContentsPropsT = {
  order: OrderItemT[];
};

export const OrderContents = ({ order }: OrderContentsPropsT) => {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>

      <div className="mt-5 space-y-3">
        {order.length === 0 ? (
          <p className="text-center">La orden está vacía</p>
        ) : (
          order.map((orderItem) => {
            return (
              <div key={orderItem.id}>
                <p className="text-lg">
                  {orderItem.name} - {formatCurrency(orderItem.price)}
                </p>
                <p className="font-black">
                  Cantidad: {orderItem.quantity} -{' '}
                  {formatCurrency(orderItem.price * orderItem.quantity)}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
