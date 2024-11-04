// Header.js
import { useState } from "react";
import { Grid2, useMediaQuery, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import cx from "classnames";
import logo from "../../assets/logos/logo.png";
import { useMenu } from "../../context/MenuContext";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Home", route: "/home" },
  { label: "Services", route: "/services" },
  {
    label: "Project",
    route: "/project",
    nestedMenu: [
      {
        nestedLabel: "Hydrocracking Processes",
        nestedRoute: "/hydrocracking-processes",
      },
      { nestedLabel: "Refining Processes", nestedRoute: "/refining-processes" },
      {
        nestedLabel: "Refinery Operations",
        nestedRoute: "/refinery-operations",
      },
    ],
  },
  {
    label: "About Us",
    route: "/about-us",
    // nestedMenu: [
    //   {
    //     nestedLabel: "Hydrocracking Processes",
    //     nestedRoute: "hydrocrackingProcesses",
    //   },
    //   { nestedLabel: "Refining Processes", nestedRoute: "refiningProcesses" },
    // ],
  },
  { label: "Contact", route: "/contact" },
];

const Header = () => {
  const { selectedMenu, onMenuChange } = useMenu(); // Get from context
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const aboveMobileView = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <>
      <Grid2 className="w-full fixed z-50 top-0 flex justify-between items-center px-3 pl-1 md:px-8 md:pl-4 bg-[#edf6f6] shadow-sm">
        <Grid2 className="flex items-center">
          <img
            src={logo}
            height={aboveMobileView ? "150" : "100"}
            width={aboveMobileView ? "150" : "100"}
            className="cursor-pointer"
            onClick={() => navigate(menuItems[0].route)}
          />
          <div
            className={cx(
              "my-[1rem] pl-4 md:pl-[1.75rem] flex flex-col text-start justify-start border-l-[2px] border-solid border-blue-950 text-blue-950 font-bold",
              { "text-[12px]": !aboveMobileView }
            )}
          >
            <span>Trans Global</span>
            <span>Services LLC</span>
          </div>
        </Grid2>

        {/* Menu for larger screens */}
        {aboveMobileView ? (
          <Grid2 className="flex items-center gap-[12px] text-[18px] font-semibold text-gray-600">
            {menuItems.map((menu) => (
              <div key={menu.route}>
                <div
                  onClick={() =>
                    navigate(
                      menu.route +
                        `${
                          menu?.nestedMenu?.length
                            ? menu?.nestedMenu?.[0].nestedRoute
                            : ""
                        }`
                    )
                  }
                  className={cx(
                    "pb-[6px] px-[2px] hover:text-blue-950 cursor-pointer text-base peer",
                    location.pathname.includes(menu.route) &&
                      "border-b-[2px] border-solid border-blue-950 text-blue-950"
                  )}
                >
                  {menu.label}
                </div>
                {menu?.nestedMenu?.length && (
                  <div className="text-base hidden peer-hover:flex hover:flex flex-col cursor-pointer absolute bg-white p-[4px] border-[1px] border-solid border-gray-600 rounded-[4px]">
                    {menu?.nestedMenu.map((nestedMItem) => (
                      <div
                        key={nestedMItem.nestedRoute}
                        onClick={() =>
                          navigate(menu.route + nestedMItem.nestedRoute)
                        }
                        className="mb-[4px] border-b-[1px] border-solid border-gray-600 hover:text-blue-950 hover:border-blue-950"
                      >
                        {nestedMItem.nestedLabel}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Grid2>
        ) : (
          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon fontSize="large" />
          </IconButton>
        )}
      </Grid2>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className="flex flex-col items-start p-4">
          <IconButton
            onClick={() => setDrawerOpen(false)}
            className="bg-teal-50 flex justify-center border w-full"
          >
            <CloseIcon fontSize="large" className="text-[#172554]" />
          </IconButton>
          {menuItems.map((menu) => (
            <div
              key={menu.val}
              onClick={() => {
                onMenuChange(menu);
                setDrawerOpen(false);
              }}
              className={cx(
                "py-2 cursor-pointer text-base",
                selectedMenu === menu.val && "text-blue-950 font-bold"
              )}
            >
              {menu.label}
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Header;
