import { useState } from 'react';
import type { OrderItemT, MenuItemT } from '../types';
import { toast } from 'react-toastify';

export default function useOrder() {
  const [order, setOrder] = useState<OrderItemT[]>([]); // <OrderItemT[]> => generics types
  const notify = (message: string, type: 'warning' | 'success') =>
    toast(message, {
      type: type,
    });

  const addItem = (item: MenuItemT) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
      notify(`Agregado 1 ${itemExist.name} a la orden`, 'warning');
    } else {
      const newItem: OrderItemT = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
      notify(`${newItem.name} agregado a la orden`, 'success');
    }
  };
  return { addItem };
}
