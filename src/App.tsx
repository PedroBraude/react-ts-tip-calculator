import { MenuItem } from './components/MenuItem';
import { menuItems } from './data/db';

export default function App() {
  return (
    <>
      <header className="py-5 bg-teal-400">
        <h1 className="text-4xl font-black text-center">
          Calculadora de Propinas y Consumos
        </h1>
      </header>
      {/* max-w-7xl == container(bootstrap)  */}
      <main className="grid mx-auto mt-20 md:grid-cols-2 max-w-7xl">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-black">Consumo</h2>
        </div>
      </main>
    </>
  );
}
