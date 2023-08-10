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
      className="tw-absolute tw-flex tw-left-0 tw-mt-2 tw-bg-white tw-rounded-md tw-overflow-hidden tw-shadow-xl tw-z-10"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {items.map((item, index) => (
        <li
          key={index}
          className="tw-relative tw-px-4 tw-flex-col tw-items-center tw-py-2 tw-text-sm tw-capitalize tw-flex tw-text-gray-700 hover:tw-bg-brandingGreen-400 hover:tw-text-white">
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
