import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Colors from "../../CommonComponent/Colors";
import CustomButton from "../../CommonComponent/CustomButton";
import CustomDialog from "../../Popup/Popup";
import Hello from "../../assets/hello.jpg";
import background from "../../assets/bg_stage_header.svg";
import logo from "../../assets/moskitooz-scedule.png";
import routes from "../../routes/routes";
import { useState } from "react";

const StyledButtom = styled(CustomButton)({
  fontSize: "20px",
  borderRadius: "8px",
  padding: "10px 20px",
  textTransform: "none",
  boxShadow: "none",
  width: "30px",
  margin: "10px  auto 60px",
  ":hover": {
    color: Colors.WHITE,
  },
});

interface doorpageprops {
  nextStep: (value: any) => void;
  prevStep: () => void;
}

export default function DoorToDoorPage({ nextStep, prevStep }: doorpageprops) {
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (event: any) => {
    setZipCode(event.target.value);
  };

  const validZipCodeRegex = /^\d{5}(-\d{4})?$/;

  const handleZipcodeValidate = () => {
    if (!zipCode) {
      setError("ZIP code cannot be empty");
      setIsModalOpen(true);
    } else if (!validZipCodeRegex.test(zipCode)) {
      setError("Invalid ZIP code format");
      setIsModalOpen(true);
    } else {
      setError("");
      console.log("Valid ZIP code:", zipCode);
      nextStep(routes.DARN_IT);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isXsScreen = useMediaQuery("(max-width:1000px)");

  return (
    <>
      <Stack direction="column">
        <Stack sx={{ backgroundColor: Colors.HOME_BACKGROUND }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            paddingX={isXsScreen ? 0 : 10}
            paddingY={isXsScreen ? 0 : 7}
            width="100%"
            maxWidth={1300}
            margin="0 auto"
          >
            <Typography
              padding={isXsScreen ? "1rem 3rem 1rem 3rem" : undefined}
              textTransform={"lowercase"}
              fontWeight="500"
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontSize={isXsScreen ? "60px" : "5rem"}
              color={Colors.LINK}
              textAlign={isXsScreen ? "center" : undefined}
              lineHeight={1}
            >
              door to door{" "}
              <span style={{ color: Colors.BLACK }}> at your service</span>
            </Typography>
            <Typography
              padding={isXsScreen ? "1rem " : undefined}
              fontSize="16px"
              variant="body2"
              textAlign="center"
              maxWidth={780}
              mb={2}
              mt={1}
              lineHeight={1.2}
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              fontWeight={500}
            >
              Delivery is complimentary from 24 hr. residential doorman
              buildings in Manhattan when you use our service. In the event that
              we are unable to fix your garment(s) or you decline service,
              delivery fees will be applied.
            </Typography>
          </Stack>
        </Stack>
        <img src={background} alt="border" />
        <Stack
          mt={"2rem"}
          width="100%"
          margin="0 auto"
          alignItems="center"
          direction="row"
          justifyContent="center"
        >
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            width={isXsScreen ? "60%" : "auto"}
            maxWidth={isXsScreen ? "none" : "600px"}
            sx={{
              padding: "70px 50px",
              border: `1px solid ${Colors.BLACK}`,
              borderRadius: "30px",
            }}
          >
            <Box sx={{ textAlign: "center" }} lineHeight={0}>
              <img src={Hello} alt="hello" height={90} />
              <Typography
                textTransform={"lowercase"}
                fontWeight="500"
                fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                fontSize={{ xs: "40px", md: "6rem" }}
              >
                new yorkers!
              </Typography>
            </Box>
            <Typography
              textTransform={"lowercase"}
              fontWeight={500}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontSize="2.5rem"
              lineHeight={1}
              textAlign="center"
              paddingY={4}
              sx={{
                borderTop: `1px solid ${Colors.BLACK}`,
                borderBottom: `1px solid ${Colors.BLACK}`,
              }}
            >
              {" "}
              make it easy with <br />
              door to door service!
            </Typography>
            <Typography
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              fontWeight={500}
              textAlign="center"
              pt={2}
            >
              Available from 24 Hour Doorman Buildings. <br />
              Do we have service in your area?
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <TextField
                sx={{
                  ".MuiOutlinedInput-input": {
                    width: "200px",
                    height: "10px",
                    border: `1px solid ${Colors.BLACK}`,
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  },
                  ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                    fontSize: "20px",
                  },
                }}
                variant="outlined"
                placeholder="Enter your ZIP code"
                onChange={handleChange}
              ></TextField>
              <Button
                onClick={handleZipcodeValidate}
                sx={{
                  backgroundColor: Colors.BLACK,
                  border: `1px solid ${Colors.BLACK}`,
                  color: "white",
                  padding: "10px 10px",
                  borderRadius: "0",
                  textTransform: "capitalize",
                  fontSize: "20px",
                  ":hover": {
                    backgroundColor: Colors.BLACK,
                  },
                }}
              >
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Stack>
          {isXsScreen ? undefined : (
            <img
              src={logo}
              alt="doortodor"
              width={300}
              height={530}
              style={{
                position: "absolute",
                right: "20%",
                transform: `translate(${37}%, ${-13}%)`,
              }}
            />
          )}
        </Stack>
        <Link
          onClick={prevStep}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <StyledButtom bgColor={"#f8f1eb"} color={Colors.LINK}>
            Back
          </StyledButtom>
        </Link>
      </Stack>
      <CustomDialog isOpen={isModalOpen} onClose={closeModal} message={error} />
    </>
  );
}
