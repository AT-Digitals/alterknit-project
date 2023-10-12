import {
  Box,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

import AppContainer from "../../../component/AppContainer";
import StateOptions from "./StateOptions";
import ShipInDetails from "../ship-in/ShipInDetails";

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

interface BillProps {
  billInformation: ShipInDetails;
  setBillInformation: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function BillingForm({ billInformation, setBillInformation }: BillProps) {
  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
  });


  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  return (
    <>
      <AppContainer
        mt={"8rem"}
        maxWidth={850}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <h3
          style={{
            border: "7px dashed black",
            borderRadius: "30px",
            padding: "3rem",
            marginBottom: "3rem",
            fontSize: "48px",
            fontFamily: "IndustrialGothicBannerStd, sans-serif",
            fontWeight: 500,

            textTransform: "lowercase",
          }}
        >
          Billing Information
        </h3>
      </AppContainer>
      <AppContainer maxWidth={1300} textAlign={"start"}>
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
            value={billInformation.BillInformation.firstName}
            onChange={setBillInformation}
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
            value={billInformation.BillInformation.lastName}
            onChange={setBillInformation}
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
            value={billInformation.BillInformation.streetAddress}
            onChange={setBillInformation}
          />
          <CustomTextField
            name="apartmentSuite"
            placeholder="Apartment/Suite"
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
            value={billInformation.BillInformation.city}
            onChange={setBillInformation}
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
              value={formdata.state}
              onChange={handleSelectChange}
            >
              {StateOptions.map((option: any) => (
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
              value={billInformation.BillInformation.zipcode}
              onChange={setBillInformation}
            />
          </Box>
        </Stack>
      </AppContainer>
    </>
  );
}
