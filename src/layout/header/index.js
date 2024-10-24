import { useState } from "react";
import { Grid2 } from "@mui/material";
import cx from "classnames";
import logo from "../../assets/images/logo.png";
import Body from "../body";
const menuItems = [
  { label: "Home", val: 1, isActivated: true },
  { label: "Services", val: 2, isActivated: false },
  { label: "Project Reference", val: 3, isActivated: false },
  { label: "About Us", val: 4, isActivated: false },
  { label: "Contact", val: 5, isActivated: false },
];
const Header = () => {
  const [menuList, setMenuList] = useState(menuItems);
  const [selectedMenu, setSelectedMenu] = useState(1);
  const onMenuChange = (item) => {
    const updatedMenuList = menuItems.map((menu) => {
      if (menu.val === item.val) {
        setSelectedMenu(menu.val);
        return { ...menu, isActivated: true };
      } else {
        return { ...menu, isActivated: false };
      }
    });
    setMenuList(updatedMenuList);
  };
  return (
    <>
      <Grid2 className="w-full fixed flex justify-between px-[2rem]">
        <Grid2 className="flex">
          <img
            src={logo}
            height="150"
            width="150"
            className="cursor-pointer"
            onClick={() => {
              onMenuChange({ label: "Home", val: 1, isActivated: false });
            }}
          />
          <div className="pl-[1.75rem] flex flex-col items-center text-start justify-center border-l-[2px] border-solid border-blue-950 text-blue-950 font-bold">
            <span>Trans Global TL</span>
            <span>Petrochemical</span>
          </div>
        </Grid2>
        <Grid2 className="flex items-center gap-[12px] text-[18px] text font-semibold text-gray-600">
          {menuList.map((menu) => (
            <div
              key={menu.val}
              onClick={() => {
                onMenuChange(menu);
              }}
              className={cx(
                "pb-[6px] px-[2px] hover:text-blue-950 cursor-pointer",
                menu.isActivated &&
                  "border-b-[2px] border-solid border-blue-950 text-blue-950"
              )}
            >
              {menu.label}
            </div>
          ))}
        </Grid2>
      </Grid2>
      <Body selectedMenu={selectedMenu} />
    </>
  );
};
export default Header;
