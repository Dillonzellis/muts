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
          className="tw-relative tw-px-4 tw-items-center tw-py-2 tw-text-sm tw-capitalize tw-flex tw-text-gray-700 hover:tw-bg-brandingGreen-400 hover:tw-text-white">
          <a href={item.link}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu2;
