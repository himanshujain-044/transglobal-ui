import { Grid2 } from "@mui/material";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <Grid2 className="w-full flex justify-between px-[2rem]">
      <Grid2 className="flex">
        <img src={logo} height="150" width="150" />
        <div className="pl-[1.75rem] flex flex-col items-center text-start justify-center border-l-[2px] border-solid border-blue-950 text-blue-950 font-bold">
          <span>Trans Global TL</span>
          <span>Petrochemical</span>
        </div>
      </Grid2>
      <Grid2>
        <div>Menu</div>
      </Grid2>
    </Grid2>
  );
};
export default Header;
