import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { phoneCountryCode } from "./phone-country-code";
const serviceType = [
  {
    text: "Specialty Vessels",
    value: "specialtyVessels",
  },
  {
    text: "Material Handling",
    value: "materialHandling",
  },
  {
    text: "Reliable Gas Supply",
    value: "reliableGasSupply",
  },
];

const requirementType = [
  {
    text: "Existing Project",
    value: "existingProject",
  },
  {
    text: "New Project",
    value: "newProject",
  },
  {
    text: "Support Maintenance",
    value: "maintenance",
  },
  {
    text: "Other",
    value: "other",
  },
];

const ContactUs = () => {
  const [allFormValues, setAllFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    serviceType: "specialtyVessels",
    requirementType: "newProject",
    description: "",
  });

  const hasDesktopView = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <div className="p-6 md:p-8">
      <h3 className="bg-[#172554] bg-clip-text font-semibold text-[1.45rem] md:text-4xl mb-8 text-center">
        Get Ready to Start the Service
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-[3rem]">
        <div className="flex flex-col ">
          <div className="flex flex-col bg-white border-[1px] border-solid border-gray-200 rounded-[4px] py-4 px-4 md:px-8 gap-y-1">
            <strong className="text-center font-semibold">Contact Us</strong>
            <div>
              <strong>Address: </strong>
              <span>24 Greenway Plaza # 1205, Houston, TX 77027</span>
            </div>
            <div>
              <strong>Call on: </strong> <span>+1 (832) 202-3840</span>
            </div>
            <div>
              <strong>Email: </strong> <span>info@transglobaltl.com</span>
            </div>
          </div>
          <hr className="h-[2px] bg-[#172554]" />
          <div className="flex flex-col gap-[1rem] bg-white border-[1px] border-solid border-gray-200 rounded-[4px] py-4 px-4 md:px-8">
            <FormControl className="w-full my-[0.7rem] flex items-baseline text-left [&_div]:w-full [&_.MuiFormHelperText-contained]:m-0">
              <TextField
                id="fullName"
                size="small"
                variant="outlined"
                label="Full Name"
                aria-describedby="firstName-helper-text"
                helperText={false && "Incorrect entry."}
                onChange={(e) => {
                  setAllFormValues((prev) => {
                    return { ...prev, fullName: e.target.value };
                  });
                }}
              />
            </FormControl>

            <FormControl className="w-full my-[0.7rem] flex items-baseline text-left [&_div]:w-full [&_.MuiFormHelperText-contained]:m-0">
              <TextField
                id="email"
                size="small"
                variant="outlined"
                label="Email"
                aria-describedby="email-helper-text"
                helperText={false && "Incorrect entry."}
                onChange={(e) => {
                  setAllFormValues((prev) => {
                    return { ...prev, email: e.target.value };
                  });
                }}
              />
            </FormControl>
            <div className="w-full flex gap-[8px] items-center text-left [&_div]:w-full [&_div]:flex [&_.MuiFormHelperText-contained]:m-0">
              <FormControl className="flex mr-[4px] !w-[10rem]">
                <InputLabel>Country Code</InputLabel>
                <Select
                  labelId="country-code-label"
                  size="small"
                  id="demo-simple-select"
                  value={allFormValues.countryCode}
                  label="Country Code"
                  renderValue={(selected) => {
                    const countryInfo = phoneCountryCode.find(
                      (countryCode) => countryCode.dial_code === selected
                    );
                    return (
                      <>
                        <img
                          src={`https://flagcdn.com/48x36/${countryInfo.code.toLocaleLowerCase()}.png`}
                          alt="..."
                          width="16px"
                        />
                        <span> {countryInfo.dial_code}</span>
                      </>
                    );
                  }}
                  onChange={(e) => {
                    setAllFormValues((prev) => {
                      return { ...prev, countryCode: e.target.value };
                    });
                  }}
                >
                  {phoneCountryCode.map((countryCode, i) => (
                    <MenuItem value={countryCode.dial_code} key={i}>
                      <img
                        src={`https://flagcdn.com/48x36/${countryCode.code.toLocaleLowerCase()}.png`}
                        alt="..."
                        width="18px"
                        style={{ marginRight: "8px" }}
                      />
                      <span> {countryCode.name}</span>
                      <span style={{ marginLeft: "8px" }}>
                        {countryCode.dial_code}
                      </span>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <TextField
                  id="phoneNumber"
                  size="small"
                  variant="outlined"
                  label="Phone Number"
                  aria-describedby="phoneNumber-helper-text"
                  helperText={false && "Incorrect entry."}
                  onChange={(e) => {
                    setAllFormValues((prev) => {
                      return { ...prev, phone: e.target.value };
                    });
                  }}
                />
              </FormControl>
            </div>

            <FormControl>
              <TextField
                id="phoneNumber"
                size="small"
                variant="outlined"
                label="Service Type"
                aria-describedby="phoneNumber-helper-text"
                helperText={false && "Incorrect entry."}
                onChange={(e) => {
                  setAllFormValues((prev) => {
                    return { ...prev, serviceType: e.target.value };
                  });
                }}
              />
            </FormControl>

            <FormControl className="w-full my-[0.7rem] flex items-baseline text-left [&_div]:w-full [&_.MuiFormHelperText-contained]:m-0">
              <InputLabel>Requirement Type</InputLabel>
              <Select
                labelId="requirement-type-label"
                label="Requirement Type"
                size="small"
                value={allFormValues.requirementType}
                onChange={(e) => {
                  setAllFormValues((prev) => {
                    return { ...prev, requirementType: e.target.value };
                  });
                }}
              >
                {requirementType.map((requirement, i) => (
                  <MenuItem value={requirement.value} key={i}>
                    {requirement.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className="w-full my-[0.7rem] flex items-baseline text-left [&_div]:w-full [&_.MuiFormHelperText-contained]:m-0">
              <TextareaAutosize
                id="description"
                size="small"
                variant="outlined"
                color="neutral"
                label="Description"
                aria-describedby="description-helper-text"
                helperText={false && "Incorrect entry."}
                placeholder="Brief about the requirement ..."
                className="min-h-[6rem] w-[100%] resize-y rounded-[4px] border-[1px] border-solid border-[rgba(0,_0,_0,_.23)] p-2"
                onChange={(e) => {
                  setAllFormValues((prev) => {
                    return { ...prev, description: e.target.value };
                  });
                }}
              />
            </FormControl>

            <Button
              variant="contained"
              sx={{ marginTop: "0.5rem", backgroundColor: "#172554" }}
              aria-label="Submit"
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="pf-container__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.6461326317935!2d-95.44338992485234!3d29.730008033400946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c103f94f0cc1%3A0xca3a78bf8dc252f0!2s24%20Greenway%20Plz%20%231205%2C%20Houston%2C%20TX%2077046%2C%20USA!5e0!3m2!1sen!2sin!4v1730720910507!5m2!1sen!2sin"
            width={hasDesktopView ? "500" : "100%"}
            height="100%"
            style={{ border: "none" }}
            loading="eager"
            referrerpolicy="no-referrer-when-downgrade"
            title="24 Greenway Plaza # 1205, Houston, TX 77027"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
