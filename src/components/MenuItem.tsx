import { MenuItemT } from '../types';

type menuItemProps = {
  item: MenuItemT;
  addItem: (item: MenuItemT) => void;
};

// inline destructuring
export const MenuItem = ({ item, addItem }: menuItemProps) => {
  return (
    <button
      className="flex justify-between w-full p-3 border-2 border-teal-400 rounded-lg hover:bg-teal-200"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">{item.price}</p>
    </button>
  );
};
