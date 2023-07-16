import { SubMenu as SubMenuType } from "./data";

type SubMenu2Props = {
  items: SubMenuType[];
};

const SubMenu2 = ({ items }: SubMenu2Props) => {
  return (
    <ul
      className="">
      {items.map((item, index) => (
        <li
          key={index}
          className="relative px-4 items-center py-2 text-sm capitalize flex text-gray-700 hover:bg-brandingGreen-400 hover:text-white">
          <a href={item.link}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu2;
