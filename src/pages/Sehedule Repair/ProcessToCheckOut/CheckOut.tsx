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

import Colors from "../../../CommonComponent/Colors";
import ShipCard from "../ship-in/ShipCard";
import routes from "../../../routes/routes";
import { useNavigate } from "react-router-dom";

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
  fontWeight: 400,
  fontSize: "2.5rem",
  fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
  padding: "30px",
  width: "270px",
  height: "200px",
  borderRadius: "30px",
  lineHeight: 1,
  ":hover": {
    backgroundColor: Colors.LINK,
  },
});

interface Checkoutprops {
  nextStep: (value: any) => void;
  prevStep: () => void;
}

export default function CheckOut({ nextStep, prevStep }: Checkoutprops) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    emailAddress: "",
  });
  const [selectedOption, setSelectedOption] = useState("");

  const handleYesClick = () => {
    setSelectedOption("YES");
  };

  const handleNoClick = () => {
    setSelectedOption("NO");
  };

  const stateOptions = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const handleTextInputChange = (
    e: ChangeEvent<HTMLInputElement | { name: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };
  const navigate = useNavigate();
  const handleNextClick = () => {
    nextStep("last-step");
  };

  return (
    <>
      <Box>
        <Box
          bgcolor={"#f8f1ec"}
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          padding={"2rem 0 0 0"}
        >
          <Box maxWidth={750} padding={"0 10rem "} margin={"0 auto"}>
            <Typography
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontSize={"80px"}
              fontWeight={500}
              textTransform={"lowercase"}
            >
              ALMOST DONE...
            </Typography>
            <Typography
              lineHeight={"1.3rem"}
              fontSize={"16px"}
              fontFamily={"Proxima Nova,sans serif"}
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
        <Box maxWidth={1440} margin={"0 auto"} padding={"0 10rem"}>
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
              fontSize={"42px"}
              fontWeight={500}
              textTransform={"lowercase"}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            >
              SHIPING INFORMATION
            </Typography>
          </Box>
          <Box gap={"2rem"} display={"flex"} flexDirection={"column"}>
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
                value={formData.firstName}
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
                value={formData.lastName}
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
                value={formData.streetAddress}
                onChange={handleTextInputChange}
              />
              <CustomTextField
                name="apartmentSuite"
                placeholder="Apartment/Suite"
                value={formData.apartment}
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
                value={formData.city}
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
                  value={formData.state}
                  onChange={handleSelectChange}
                >
                  {stateOptions.map((option) => (
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
                  name="zipCode"
                  value={formData.zipCode}
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
                name="phoneNumber"
                value={formData.phoneNumber}
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
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleTextInputChange}
              />
            </Box>
          </Box>
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
          fontSize={"42px"}
          fontFamily={"IndustrialGothicBannerStd, sans-serif"}
          fontWeight={500}
          textTransform={"lowercase"}
        >
          IS YOUR BILLIN ADDRESS THE SAME AS YOUR SHIPPING ADDRESS?
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
        <div
          style={{
            marginTop: "5rem",
          }}
        >
          <ShipCard onClick={handleNextClick} />
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
