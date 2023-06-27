import { SubMenu } from "./data";

type SubMenuProps = {
  items: SubMenu[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const SubMenu = ({ items, onMouseEnter, onMouseLeave }: SubMenuProps) => {
  return (
    <ul
      className="absolute left-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 block"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {items.map((item, index) => (
        <li
          key={index}
          className="px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
          <a href={item.link}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
