import { Button, TextField, useMediaQuery } from "@mui/material";
import cx from "classnames";
import { WhatsApp } from "@mui/icons-material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import email from "../../assets/logos/email.png";
import phone from "../../assets/logos/call.png";
import address from "../../assets/logos/location.png";
import StarryCanvas from "../../components/shared-comps/star-canvas";

const contactInfo = [
  { text: "+1 (832) 202-3840", icon: phone },
  { text: "info@transglobaltl.com", icon: email },
  { text: "24 Greenway Plaza # 1205, Houston, TX 77027, USA", icon: address },
];
const Footer = () => {
  const hasDesktopView = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <div
      className="py-4 mt-8 px-3 md:px-8 flex flex-col bg-[#166490] text-[#fff] relative rounded-b-md"
      id="about-us"
    >
      {hasDesktopView && <StarryCanvas />}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-16 items-start justify-between z-10">
        <div
          className={cx("flex flex-col items-start justify-center text-start")}
        >
          <strong className="text-xl py-2">Trans Global Services LLC</strong>
          <p className="text-[#fff] font-extralight">
            Refineries produce hydrogen primarily through steam reforming of
            natural gas or oil by-products. This hydrogen is crucial for various
            refinery processes, such as desulfurization. It's distributed within
            the refinery via pipelines and used on-site. Excess hydrogen may be
            sold to external customers or stored for future use.
          </p>
        </div>
        <div
          className={cx("flex flex-col items-start justify-center text-start")}
        >
          <strong className="text-xl py-2">Service</strong>
          <span className="text-[#fff] hover:underline cursor-pointer font-extralight">
            Hydrogen Production
          </span>
          <span className="text-[#fff] hover:underline cursor-pointer font-extralight">
            Distribution Networks
          </span>
          <span className="text-[#fff] hover:underline cursor-pointer font-extralight">
            Consulting & Solutions
          </span>
          <span className="text-[#fff] hover:underline cursor-pointer font-extralight">
            Feasibility Studies
          </span>
          <span className="text-[#fff] hover:underline cursor-pointer font-extralight">
            Integrated Refinery Solutions
          </span>
        </div>
        <div
          className={cx("flex flex-col items-start justify-center text-start")}
        >
          <strong className="text-xl py-2">Company</strong>
          <span className="text-[#fff] hover:underline cursor-pointer font-extralight">
            Our Team
          </span>
          <span className="text-[#fff] hover:underline cursor-pointer font-extralight">
            Career
          </span>
          <span className="text-[#fff] hover:underline cursor-pointer font-extralight">
            Blog
          </span>
          <span className="text-[#fff] hover:underline cursor-pointer font-extralight">
            About Us
          </span>
          <span className="text-[#fff] hover:underline cursor-pointer font-extralight">
            Contact Us
          </span>
        </div>
        <div
          className={cx("flex flex-col items-start justify-center text-start")}
        >
          <strong className="py-1">Join with us</strong>
          <div>
            <div className="flex gap-[1rem] [&_.MuiOutlinedInput-notchedOutline]:border-[1px] [&_.MuiOutlinedInput-notchedOutline]:border-solid [&_.MuiOutlinedInput-notchedOutline]:border-white">
              <TextField
                id="email"
                size="small"
                variant="outlined"
                label="Email"
                helperText={false && "Incorrect entry."}
                InputLabelProps={{
                  style: { color: "white" }, // Label color
                }}
                inputProps={{
                  style: { color: "white" }, // Text color
                }}
              />
              <Button
                variant="contained"
                className=""
                sx={{
                  backgroundColor: "#172554",
                  width: "10rem",
                }}
                aria-label="Subscribe"
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="mt-[16px] [&_svg]:mr-[8px] [&_svg]:fill-white">
            <a
              href="https://www.facebook.com/profile.php?id=61551970517773"
              target="_blank"
              rel="noreferrer"
              aria-label="facebook"
            >
              <FacebookOutlinedIcon sx={{ cursor: "pointer" }} />
            </a>
            <a
              href="https://www.instagram.com/madhuvandigitalstech/"
              target="_blank"
              rel="noreferrer"
              aria-label="instagram"
            >
              <InstagramIcon sx={{ cursor: "pointer" }} />
            </a>
            <a
              href="https://twitter.com/madhuvandigital"
              target="_blank"
              rel="noreferrer"
              aria-label="twitter"
            >
              <TwitterIcon sx={{ cursor: "pointer" }} />
            </a>
          </div>
        </div>
      </div>
      <hr className="w-full h-[1px] m-0 my-[2rem] bg-[linear-gradient(90deg_,_#6484ef_0%_,_#5ab6f0_100%)]" />
      <div className="flex flex-col md:flex-row justify-between w-full gap-4 z-10">
        <strong className="no-underline w-auto text-sm">
          © {new Date().getFullYear()}. All rights reserved by Trans Global
          Services LLC.
        </strong>

        <div className="flex md:flex-row flex-col item-center justify-between gap-3 md:gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-2 justify-start">
              <img src={item.icon} alt="" width="18" />
              <span className="text-wrap text-sm hover:text-gray-100">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
