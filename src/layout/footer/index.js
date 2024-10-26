import { Button, TextField } from "@mui/material";
import cx from "classnames";
import { WhatsApp } from "@mui/icons-material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import email from "../../assets/logos/email.png";
import phone from "../../assets/logos/call.png";
import address from "../../assets/logos/location.png";

const contactInfo = [
  { text: "+ 1832-202-3840", icon: phone },
  { text: "rokan@transglobaltl.com", icon: email },
  { text: "11622 Palliser Place, Richmond, TX 77407. U.S.A", icon: address },
];
const Footer = () => {
  return (
    <div className="py-4 px-3 md:px-8 flex flex-col" id="about-us">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-16 items-start justify-between">
        <div
          className={cx("flex flex-col items-start justify-center text-start")}
        >
          <strong className="text-xl py-2">Trans Global TL</strong>
          <p className="text-[#77808b]">
            The Storage and Terminal Solutions segment provides services for
            aboveground storage tanks and terminals, crude oil marketing and
            export/import terminals, LNG facilities for import/export fueling
            and bunkering, and other renewable energy storage and terminal
            solutions.
          </p>
        </div>
        <div
          className={cx("flex flex-col items-start justify-center text-start")}
        >
          <strong className="text-xl py-2">Service</strong>
          <span className="text-[#77808b]">Generator Rental</span>
          <span className="text-[#77808b]">Energy Storage</span>
          <span className="text-[#77808b]">HVAC</span>
          <span className="text-[#77808b]">Load Banks</span>
          <span className="text-[#77808b]">Oil-Free Air Compressors</span>
        </div>
        <div
          className={cx("flex flex-col items-start justify-center text-start")}
        >
          <strong className="text-xl py-2">Company</strong>
          <span className="text-[#77808b]">Our Team</span>
          <span className="text-[#77808b]">Career</span>
          <span className="text-[#77808b]">Blog</span>
          <span className="text-[#77808b]">About Us</span>
          <span className="text-[#77808b]">Contact Us</span>
        </div>
        <div
          className={cx("flex flex-col items-start justify-center text-start")}
        >
          <strong>Join with us</strong>
          <div>
            <div className="flex gap-[1rem] [&_.MuiOutlinedInput-notchedOutline]:border-[1px] [&_.MuiOutlinedInput-notchedOutline]:border-solid [&_.MuiOutlinedInput-notchedOutline]:border-[#172554]">
              <TextField
                id="eamil"
                size="small"
                variant="outlined"
                label="email"
                aria-describedby="phoneNumber-helper-text"
                helperText={false && "Incorrect entry."}
              />
              <Button
                variant="contained"
                className=""
                sx={{
                  backgroundColor: "#172554",
                  width: "10rem",
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="mt-[16px] [&_svg]:mr-[8px] [&_svg]:fill-[#172554]">
            <a
              href="https://www.facebook.com/profile.php?id=61551970517773"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookOutlinedIcon />
            </a>
            <a
              href="https://www.instagram.com/madhuvandigitalstech/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://twitter.com/madhuvandigital"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
      <hr className="w-full h-[1px] m-0 my-[2rem] bg-[linear-gradient(90deg_,_#6484ef_0%_,_#5ab6f0_100%)]" />
      <div className="flex flex-col md:flex-row justify-between w-full gap-4">
        <strong className="no-underline w-auto text-sm">
          © {new Date().getFullYear()}. All rights reserved by Trans Global TL
          inc.
        </strong>

        <div className="flex md:flex-row flex-col item-center justify-between gap-3 md:gap-8">
          {contactInfo.map((item) => (
            <div className="flex items-center gap-2 justify-start">
              <img src={item.icon} alt="" width="18" />
              <span className="text-wrap text-sm md:text-baase">
                {item.text}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-1 md:justify-end text-base">
            <a
              href="//api.whatsapp.com/send?phone=917470839972&text=I have the requirement can we schedule have a call"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              <span className="flex gap-[4px] [&_svg]:fill-[#25d366]">
                <WhatsApp />
                Click to Whatsapp
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
