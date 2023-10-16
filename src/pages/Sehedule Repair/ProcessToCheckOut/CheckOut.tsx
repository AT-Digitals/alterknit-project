import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import AppContainer from "../../../component/AppContainer";
import BillingForm from "./BillingForm";
import Colors from "../../../CommonComponent/Colors";
import ShipCard from "../ship-in/ShipCard";
import ShipInDetails from "../ship-in/ShipInDetails";
import StateOptions from "./StateOptions";
import { useState } from "react";

const CustomTextField = styled(TextField)`
  && {
    & fieldset {
      border: none !important;
      font-size: 20px;
    }

    input {
      padding: 2rem;
      background-color: #f8f1ec;
      border-radius: 30px;
      font-weight: 600;

      font-family: Proxima Nova, sans-serif;
      font-size: 16px;
      border: none !important;
    }
  }
`;
const CustomSelect = styled(Select)`
  && {
    & fieldset {
      border: none !important;
      font-size: 20px;
    }

    select {
      padding: 2rem;

      border-radius: 30px;
      font-family: Proxima Nova, sans-serif;
      font-weight: 600;
      font-size: 16px;
      border: none !important;
      width: 100%;
    }
  }
`;
const StyleButtonNew = styled(Button)({
  color: Colors.BLACK,
  backgroundColor: Colors.HOME_BACKGROUND,
  fontWeight: 500,
  fontSize: "3rem",
  fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
  padding: "30px",
  width: "270px",
  height: "200px",
  borderRadius: "30px",
  textTransform: "lowercase",
  lineHeight: 1,
  ":hover": {
    backgroundColor: Colors.LINK,
  },
});

interface Checkoutprops {
  nextStep: () => void;
  prevStep: () => void;
  shipDetails: ShipInDetails;
  setShipDetails: (
    field: keyof ShipInDetails["ShipInformation"],
    value: string | number
  ) => void;
  setBillDetails: (
    field: keyof ShipInDetails["BillInformation"],
    value: string | number
  ) => void;
}

export default function CheckOut({
  nextStep,
  prevStep,
  shipDetails,
  setShipDetails,
  setBillDetails,
}: Checkoutprops) {
  const initialErrors = {
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    phone_number: "",
    email: "",
  };
  const [selectedOption, setSelectedOption] = useState("YES");
  const [error, setError] = useState(initialErrors);

  const handleYesClick = () => {
    setSelectedOption("YES");
  };

  const handleNoClick = () => {
    setSelectedOption("NO");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShipDetails(name as keyof ShipInDetails["ShipInformation"], value);
  };
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [zipcodeError, setZipcodeError] = useState("");

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setSelectedOption((prevData: any) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  const handleNextClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = { ...initialErrors };

    if (!shipDetails.ShipInformation.firstName) {
      newErrors.firstName = "Please enter shipping first name.";
    }
    if (!shipDetails.ShipInformation.lastName) {
      newErrors.lastName = "Please enter shipping last name.";
    }
    if (!shipDetails.ShipInformation.streetAddress) {
      newErrors.streetAddress = "Please enter shipping street address.";
    }
    if (!shipDetails.ShipInformation.city) {
      newErrors.city = "Please enter shipping city.";
    }
    if (!shipDetails.ShipInformation.zipcode) {
      newErrors.zipcode = "Please enter shipping zip code.";
    }
    if (!shipDetails.ShipInformation.phone_number) {
      newErrors.phone_number = "Please enter shipping phone number.";
    }
    if (!shipDetails.ShipInformation.email) {
      newErrors.email = "Please enter shipping e-mail address.";
    }

    setError(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      nextStep();
    }
  };

  const PhoneValidation = (name: string) => {
    const cleanedPhoneNumber = name.replace(/\D/g, "");
    if (
      /^\d{10}$|^\d{3}[-.]?\d{3}[-.]?\d{4}$|^\(\d{3}\)\s?\d{3}[-.]?\d{4}$/.test(
        cleanedPhoneNumber
      )
    ) {
      setPhoneError("");
      return true;
    }

    setPhoneError("Invalid phone number");
    return false;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShipDetails(name as keyof ShipInDetails["ShipInformation"], value);
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validateZIPCode = (value: any) => {
    const validZipCodeRegex = /^\d{5}(-\d{4})?$/;
    return validZipCodeRegex.test(value);
  };

  const handleZipcodeChange = (e: any) => {
    const { name, value } = e.target;
    setShipDetails(name as keyof ShipInDetails["ShipInformation"], value);
    if (!validateZIPCode(value)) {
      setZipcodeError("Invalid ZIP code");
    } else {
      setZipcodeError("");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShipDetails(name as keyof ShipInDetails["ShipInformation"], value);
    PhoneValidation(value);
  };

  return (
    <>
      <Box>
        <Box
          bgcolor={"#f8f1ec"}
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          padding={"2.5rem 0 1rem 0"}
        >
          <Box maxWidth={750} padding={"0 10rem "} margin={"0 auto"}>
            <Typography
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontSize={"80px"}
              fontWeight={500}
              textTransform={"lowercase"}
              lineHeight={1.3}
            >
              ALMOST DONE...
            </Typography>
            <Typography
              lineHeight={1.3}
              fontSize={"16px"}
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              fontWeight={500}
            >
              You've chosen our ship-in option for your order. Please fill out
              the form below with accuracy to ensure your garment gets safely to
              us and returned to the right home.
            </Typography>
          </Box>
        </Box>
        <img
          src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_stage_header.svg"
          alt="background"
        ></img>
      </Box>
      <Box mb={3} padding={"5rem 0 0 0"}>
        <Box maxWidth={1440} margin={"0 auto"}>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            gap={"6rem"}
            padding={"1rem 0 8rem 0"}
          >
            <Typography
              textAlign={"center"}
              border={"7px dashed black"}
              maxWidth={700}
              width={"100%"}
              padding={"2rem"}
              borderRadius={"30px"}
              fontSize={"50px"}
              fontWeight={500}
              textTransform={"lowercase"}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            >
              SHIPING INFORMATION
            </Typography>
          </Box>
          <AppContainer maxWidth={1300}>
            <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
              <Typography
                fontSize={"45px"}
                fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                fontWeight={500}
                textTransform={"lowercase"}
              >
                FIRST NAME
              </Typography>
              <CustomTextField
                name="firstName"
                value={shipDetails.ShipInformation.firstName}
                onChange={handleChange}
                error={!!error.firstName}
                helperText={error.firstName}
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
              <Typography
                fontSize={"45px"}
                fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                fontWeight={500}
                textTransform={"lowercase"}
              >
                LAST NAME
              </Typography>
              <CustomTextField
                name="lastName"
                value={shipDetails.ShipInformation.lastName}
                onChange={handleChange}
                error={!!error.lastName}
                helperText={error.lastName}
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
              <Typography
                fontSize={"45px"}
                fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                fontWeight={500}
                textTransform={"lowercase"}
              >
                STREET ADDRESS
              </Typography>
              <CustomTextField
                name="streetAddress"
                value={shipDetails.ShipInformation.streetAddress}
                onChange={handleChange}
                error={!!error.streetAddress}
                helperText={error.streetAddress}
              />
              <CustomTextField
                name="apartment"
                placeholder="Apartment/Suite"
                value={shipDetails.ShipInformation.apartment}
                onChange={handleChange}
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
              <Typography
                fontSize={"45px"}
                fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                fontWeight={500}
                textTransform={"lowercase"}
              >
                CITY
              </Typography>
              <CustomTextField
                name="city"
                value={shipDetails.ShipInformation.city}
                onChange={handleChange}
                error={!!error.city}
                helperText={error.city}
              />
            </Box>

            <Stack direction={"row"} spacing={5}>
              <Box style={{ flex: 1 }}>
                <Typography
                  fontSize={"45px"}
                  fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                  fontWeight={500}
                  textTransform={"lowercase"}
                >
                  STATE
                </Typography>
                <CustomSelect
                  style={{
                    width: "100%",
                    background: "#f8f1ec",
                    padding: "1rem",
                    borderRadius: "30px",
                  }}
                  name="state"
                  value={shipDetails.ShipInformation.state}
                  onChange={handleSelectChange}
                  error={!!error.state}
                >
                  {StateOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </Box>
              <Box style={{ flex: 1 }}>
                <Typography
                  fontSize={"45px"}
                  fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                  fontWeight={500}
                  textTransform={"lowercase"}
                >
                  ZIP CODE
                </Typography>
                <CustomTextField
                  style={{ width: "100%" }}
                  name="zipcode"
                  value={shipDetails.ShipInformation.zipcode}
                  onChange={handleZipcodeChange}
                  error={!!error.zipcode || !!zipcodeError}
                  helperText={error.zipcode || zipcodeError}
                />
              </Box>
            </Stack>
            <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
              <Typography
                fontSize={"45px"}
                fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                fontWeight={500}
                textTransform={"lowercase"}
              >
                PHONE NUMBER
              </Typography>
              <CustomTextField
                name="phone_number"
                value={shipDetails.ShipInformation.phone_number}
                onChange={handlePhoneChange}
                error={!!error.phone_number || !!phoneError}
                helperText={error.phone_number || phoneError}
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
              <Typography
                fontSize={"45px"}
                fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                fontWeight={500}
                textTransform={"lowercase"}
              >
                E-MAIL ADDRESS
              </Typography>
              <CustomTextField
                name="email"
                value={shipDetails.ShipInformation.email}
                onChange={handleEmailChange}
                error={!!error.email || !!emailError}
                helperText={error.email || emailError}
              />
            </Box>
          </AppContainer>
        </Box>
      </Box>
      <Box
        mt={5}
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Typography
          fontSize={"48px"}
          fontFamily={"IndustrialGothicBannerStd, sans-serif"}
          fontWeight={500}
          textTransform={"lowercase"}
        >
          IS YOUR BILLING ADDRESS THE SAME AS YOUR SHIPPING ADDRESS?
        </Typography>
        <Stack justifyContent={"center"} direction={"row"} spacing={5}>
          <StyleButtonNew
            sx={{
              backgroundColor:
                selectedOption === "YES" ? Colors.LINK : Colors.HOME_BACKGROUND,
            }}
            onClick={handleYesClick}
          >
            YES
          </StyleButtonNew>
          <StyleButtonNew
            sx={{
              backgroundColor:
                selectedOption === "NO" ? Colors.LINK : Colors.HOME_BACKGROUND,
            }}
            onClick={handleNoClick}
          >
            NO
          </StyleButtonNew>
        </Stack>
        {selectedOption === "NO" ? (
          <BillingForm
            billInformation={shipDetails}
            setBillInformation={setBillDetails}
          />
        ) : null}
        <div
          style={{
            marginTop: "5rem",
          }}
        >
          <ShipCard onClick={handleNextClick} onChange={prevStep} />
        </div>
        <img
          style={{ maxWidth: "1220px", margin: "4rem 0" }}
          src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/guaranteed_happiness.png"
          alt="guaranteed happiness"
        ></img>
      </Box>
    </>
  );
}
