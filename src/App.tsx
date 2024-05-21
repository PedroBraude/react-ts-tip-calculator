import { MenuItem } from './components/MenuItem';
import { OrderContents } from './components/OrderContents';
import { OrderTotals } from './components/OrderTotals';
import { TipPercentageForm } from './components/tipPercentageForm';
import { menuItems } from './data/db';
import useOrder from './hooks/useOrder';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const { addItem, removeItem, order, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <ToastContainer position="top-right" closeOnClick theme="light" />
      <header className="py-5 bg-teal-400">
        <h1 className="text-4xl font-black text-center">
          Calculadora de Propinas y Consumos
        </h1>
      </header>
      {/* max-w-7xl == container(bootstrap)  */}
      <main className="grid mx-auto mt-20 md:grid-cols-2 max-w-7xl">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="mt-10 space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="p-5 space-y-10 border border-dashed border-slate-300 rounder-lg">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">La orden está vacía</p>
          )}
        </div>
      </main>
    </>
  );
}
