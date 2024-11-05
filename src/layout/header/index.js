// Header.js
import { Fragment, useEffect, useState } from "react";
import {
  Grid2,
  useMediaQuery,
  IconButton,
  Drawer,
  MenuItem,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import cx from "classnames";
import logo from "../../assets/logos/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { headerMenu } from "../../constants/header-menu";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const aboveMobileView = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const [anchorEl, setAnchorEl] = useState(null); // State for anchor element for menu

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const handleMenuClick = (menu) => (event) => {
    if (menu?.nestedMenu?.length > 0) {
      // navigate(`${menu.route + menu?.nestedMenu?.[0].nestedRoute}`);
      setAnchorEl(event.currentTarget);
      return;
    }
    navigate(menu.route);
    setDrawerOpen(false); // Close the drawer
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu
    setDrawerOpen(false); // Close the drawer
  };

  return (
    <>
      <Grid2 className="w-full fixed z-50 top-0 flex justify-between items-center px-3 pl-1 md:px-8 md:pl-4 bg-[#edf6f6] shadow-sm">
        <Grid2 className="flex items-center">
          <img
            src={logo}
            height={aboveMobileView ? "150" : "100"}
            width={aboveMobileView ? "150" : "100"}
            className="cursor-pointer"
            onClick={() => navigate(headerMenu[0].route)}
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
            {headerMenu.map((menu) => (
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
                  <div className="flex items-center">
                    {menu.label}
                    {menu?.nestedMenu?.length > 0 ? (
                      <ArrowDropDownIcon fontSize="medium" />
                    ) : null}
                  </div>
                </div>
                {menu?.nestedMenu?.length && (
                  <div className="text-base hidden peer-hover:flex hover:flex flex-col cursor-pointer absolute bg-white p-[4px] border-[1px] border-solid border-gray-600 rounded-[4px]">
                    {menu?.nestedMenu.map((nestedMItem) => (
                      <div
                        key={nestedMItem.nestedRoute}
                        onClick={() =>
                          navigate(menu.route + nestedMItem.nestedRoute)
                        }
                        className={cx(
                          "mb-[4px] border-b-[1px] border-solid border-gray-400 hover:text-blue-950 text-gray-500 last:border-none",
                          location.pathname.includes(nestedMItem.nestedRoute) &&
                            "border-blue-950 text-blue-950"
                        )}
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

          {headerMenu.map((menu) => (
            <Fragment key={menu.route}>
              <div
                onClick={handleMenuClick(menu)}
                className={cx("py-2 cursor-pointer text-base", {
                  "text-blue-950 font-bold": location.pathname.includes(
                    menu.route
                  ),
                })}
              >
                <div className="flex items-center">
                  {menu.label}
                  {menu?.nestedMenu?.length > 0 ? (
                    <ArrowDropDownIcon fontSize="medium" />
                  ) : null}
                </div>
              </div>

              {menu?.nestedMenu?.length > 0 ? (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  {menu.nestedMenu.map((nestedMItem) => (
                    <MenuItem
                      key={nestedMItem.nestedRoute}
                      onClick={() => {
                        navigate(menu.route + nestedMItem.nestedRoute);
                        handleClose(); // Close the menu after selection
                      }}
                      className="cursor-pointer text-sm"
                      sx={
                        location.pathname.includes(nestedMItem.nestedRoute) && {
                          color: "rgb(23 37 84)",
                          fontWeight: "bold",
                        }
                      }
                    >
                      {nestedMItem.nestedLabel}
                    </MenuItem>
                  ))}
                </Menu>
              ) : null}
            </Fragment>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Header;
