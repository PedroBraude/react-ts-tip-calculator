import { OrderItemT } from '../types';

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
              <div
                key={orderItem.id}
                className="grid justify-between grid-cols-2"
              >
                <p className="col-span-1">{orderItem.name}</p>
                <p className="col-span-1 text-center">{orderItem.quantity}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
