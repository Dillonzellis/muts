import { SubMenu as SubMenuType } from "./data";
import SubMenu2 from "./SubMenu2";

type SubMenuProps = {
  items: SubMenuType[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const SubMenu = ({ items, onMouseEnter, onMouseLeave }: SubMenuProps) => {
  return (
    <ul
      className="absolute flex left-0 mt-2 bg-white rounded-md overflow-hidden shadow-xl z-10"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {items.map((item, index) => (
        <li
          key={index}
          className="relative px-4 flex-col items-center py-2 text-sm capitalize flex text-gray-700 hover:bg-brandingGreen-400 hover:text-white">
          <a href={item.link}>{item.text}</a>
          {/* add deeper submenu here */}
          {item.subMenu2 && 
            <SubMenu2 
              items={item.subMenu2} 
            />
          }
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
