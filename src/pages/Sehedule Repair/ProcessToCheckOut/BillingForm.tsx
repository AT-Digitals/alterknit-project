import {
  Box,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

import AppContainer from "../../../component/AppContainer";
import ShipInDetails from "../ship-in/ShipInDetails";
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

interface BillProps {
  billInformation: ShipInDetails;
  setBillInformation: (
    field: keyof ShipInDetails["BillInformation"],
    value: string | number
  ) => void;
}

export default function BillingForm({
  billInformation,
  setBillInformation,
}: BillProps) {
  // const [formdata, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   streetAddress: "",
  //   apartment: "",
  //   city: "",
  //   state: "",
  //   zipCode: "",
  // });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBillInformation(name as keyof ShipInDetails["BillInformation"], value);
  };

  // const handleSelectChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name as string]: value,
  //   }));
  // };
  const isXsScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      <AppContainer
        mt={isXsScreen ? "3rem" : "8rem"}
        maxWidth={1300}
        width={{ xs: "85%", sm: "85%", md: "85%" }}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        padding={0}
      >
        <h3
          style={{
            border: "7px dashed black",
            borderRadius: "30px",
            padding: "2rem",
            marginBottom: "3rem",
            fontSize: isXsScreen ? "35px" : "48px",
            fontFamily: "IndustrialGothicBannerStd, sans-serif",
            fontWeight: 500,

            textTransform: "lowercase",
          }}
        >
          Billing Information
        </h3>
      </AppContainer>
      <AppContainer
        padding={0}
        width={"100%"}
        maxWidth={1300}
        textAlign={isXsScreen ? "center" : "start"}
      >
        <Box padding={"24px"}>
          <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
            <Typography
              fontSize={isXsScreen ? "35px" : "45px"}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontWeight={500}
              textTransform={"lowercase"}
            >
              FIRST NAME
            </Typography>
            <CustomTextField
              name="firstName"
              value={billInformation.BillInformation.firstName}
              onChange={handleChange}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
            <Typography
              fontSize={isXsScreen ? "35px" : "45px"}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontWeight={500}
              textTransform={"lowercase"}
            >
              LAST NAME
            </Typography>
            <CustomTextField
              name="lastName"
              value={billInformation.BillInformation.lastName}
              onChange={handleChange}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
            <Typography
              fontSize={isXsScreen ? "35px" : "45px"}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontWeight={500}
              textTransform={"lowercase"}
            >
              STREET ADDRESS
            </Typography>
            <CustomTextField
              name="streetAddress"
              value={billInformation.BillInformation.streetAddress}
              onChange={handleChange}
            />
            <CustomTextField
              name="apartment"
              placeholder="Apartment/Suite"
              value={billInformation.BillInformation.apartment}
              onChange={handleChange}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
            <Typography
              fontSize={isXsScreen ? "35px" : "45px"}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontWeight={500}
              textTransform={"lowercase"}
            >
              CITY
            </Typography>
            <CustomTextField
              name="city"
              value={billInformation.BillInformation.city}
              onChange={handleChange}
            />
          </Box>

          <Stack direction={isXsScreen ? "column" : "row"} spacing={5}>
            <Box style={{ flex: 1 }}>
              <Typography
                fontSize={isXsScreen ? "35px" : "45px"}
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
                value={billInformation.BillInformation.state}
                onChange={handleChange}
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
                fontSize={isXsScreen ? "35px" : "45px"}
                fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                fontWeight={500}
                textTransform={"lowercase"}
              >
                ZIP CODE
              </Typography>
              <CustomTextField
                style={{ width: "100%" }}
                name="zipcode"
                value={billInformation.BillInformation.zipcode}
                onChange={handleChange}
              />
            </Box>
          </Stack>
        </Box>
      </AppContainer>
    </>
  );
}
