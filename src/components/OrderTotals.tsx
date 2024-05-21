import { formatCurrency } from '../helpers';
import { OrderItemT } from '../types';
import { useMemo } from 'react';

type OrderTotalPropsT = {
  order: OrderItemT[];
  tip: number;
  placeOrder: () => void;
};

export const OrderTotals = ({ order, tip, placeOrder }: OrderTotalPropsT) => {
  const subtotalAmount = useMemo(
    () =>
      order.reduce((total: number, item: OrderItemT) => {
        return total + item.price * item.quantity;
      }, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [order, tip]);

  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [order, tip]);
  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-black">Totales y Propina:</h2>
        <p>
          Subtotal a pagar:{' '}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina:{' '}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{' '}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="w-full p-3 mt-10 font-bold text-white uppercase bg-black disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
};
