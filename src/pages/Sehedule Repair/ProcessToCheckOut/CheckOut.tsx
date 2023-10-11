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
import { ChangeEvent, useState } from "react";

import AppContainer from "../../../component/AppContainer";
import BillingForm from "./BillingForm";
import Colors from "../../../CommonComponent/Colors";
import CustomDialog from "../../../Popup/Popup";
import ShipCard from "../ship-in/ShipCard";
import StateOptions from "./StateOptions";

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

interface shipInformationProps {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipcode: string;
  phone_number: string;
  email: string;
  sameAddress: string;
  apartment: string;
}

interface Checkoutprops {
  nextStep: () => void;
  prevStep: () => void;
  shipInformation: shipInformationProps;
  setShipInformation: (data: shipInformationProps) => void;
}

export default function CheckOut({
  nextStep,
  prevStep,
  shipInformation,
  setShipInformation,
}: Checkoutprops) {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   streetAddress: "",
  //   apartment: "",
  //   city: "",
  //   state: "",
  //   zipCode: "",
  //   phoneNumber: "",
  //   emailAddress: "",
  // });
  const [selectedOption, setSelectedOption] = useState("");

  const handleYesClick = () => {
    setSelectedOption("YES");
  };

  const handleNoClick = () => {
    setSelectedOption("NO");
  };

  const handleTextInputChange = (
    e: ChangeEvent<HTMLInputElement | { name: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setShipInformation({
      ...shipInformation,
      [name]: value,
    });
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setSelectedOption((prevData: any) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  const [error, setError] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNextClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!shipInformation.firstName) {
      setError(" Please enter shipping first name.");
      setIsDrawerOpen(true);
    } else if (!shipInformation.lastName) {
      setError("Please enter shipping last name.");
      setIsDrawerOpen(true);
    } else if (!shipInformation.streetAddress) {
      setError("Please enter shipping street address.");
      setIsDrawerOpen(true);
    } else if (!shipInformation.city) {
      setError("Please enter shipping city.");
      setIsDrawerOpen(true);
    } else if (!shipInformation.zipcode) {
      setError("Please enter shipping zip code.");
      setIsDrawerOpen(true);
    } else if (!shipInformation.phone_number) {
      setError("Please enter shipping phone number.");
      setIsDrawerOpen(true);
    } else if (!shipInformation.email) {
      setError("Please enter shipping e-mail address.");
      setIsDrawerOpen(true);
    } else {
      nextStep();
    }
  };
  const handleCloseModal = () => {
    setIsDrawerOpen(false);
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
                value={shipInformation.firstName}
                onChange={handleTextInputChange}
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
                value={shipInformation.lastName}
                onChange={handleTextInputChange}
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
                value={shipInformation.streetAddress}
                onChange={handleTextInputChange}
              />
              <CustomTextField
                name="apartmentSuite"
                placeholder="Apartment/Suite"
                value={shipInformation.apartment}
                onChange={handleTextInputChange}
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
                value={shipInformation.city}
                onChange={handleTextInputChange}
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
                  value={shipInformation.state}
                  onChange={handleSelectChange}
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
                  value={shipInformation.zipcode}
                  onChange={handleTextInputChange}
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
                value={shipInformation.phone_number}
                onChange={handleTextInputChange}
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
                value={shipInformation.email}
                onChange={handleTextInputChange}
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
        {selectedOption === "NO" ? <BillingForm /> : null}
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
      <CustomDialog
        isOpen={isDrawerOpen}
        onClose={handleCloseModal}
        message={error}
      />
    </>
  );
}
