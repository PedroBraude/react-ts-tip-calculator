import { MenuItemT } from '../types';

type menuItemProps = {
  item: MenuItemT;
};

// inline destructuring
export const MenuItem = ({ item: { id, price, name } }: menuItemProps) => {
  return (
    <button className="flex justify-between w-full p-3 border-2 border-teal-400 hover:bg-teal-200">
      <p>{name}</p>
      <p className="font-black">{price}</p>
    </button>
  );
};
