import React, { createContext, useContext, useState } from "react";

export const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState(1);

  const onMenuChange = (menu) => {
    setSelectedMenu(menu.val);
  };

  return (
    <MenuContext.Provider value={{ selectedMenu, onMenuChange }}>
      {children}
    </MenuContext.Provider>
  );
};
