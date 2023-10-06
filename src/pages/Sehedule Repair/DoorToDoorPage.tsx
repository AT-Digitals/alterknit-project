import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Colors from "../../CommonComponent/Colors";
import CustomButton from "../../CommonComponent/CustomButton";
import Hello from "../../assets/hello.jpg";
import background from "../../assets/bg_stage_header.svg";
import logo from "../../assets/moskitooz-scedule.png";
import routes from "../../routes/routes";

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
  return (
    <Stack direction="column">
      <Stack sx={{ backgroundColor: Colors.HOME_BACKGROUND }}>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          paddingX={10}
          paddingY={5}
          width="100%"
          maxWidth={1300}
          margin="0 auto"
        >
          <Typography
            textTransform={"lowercase"}
            fontWeight="500"
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            fontSize="5rem"
            color={Colors.LINK}
            lineHeight={1}
          >
            door to door{" "}
            <span style={{ color: Colors.BLACK }}> at your service</span>
          </Typography>
          <Typography
            fontSize="16px"
            variant="body2"
            textAlign="center"
            width={780}
            mb={2}
            mt={1}
            lineHeight={1.5}
          >
            Delivery is complimentary from 24 hr. residential doorman buildings
            in Manhattan when you use our service. In the event that we are
            unable to fix your garment(s) or you decline service, delivery fees
            will be applied.
          </Typography>
        </Stack>
      </Stack>
      <img src={background} alt="border" />
      <Stack
        width="100%"
        maxWidth={1300}
        margin="0 auto"
        padding={5}
        alignItems="center"
        direction="row"
        justifyContent="center"
      >
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          width="500px"
          sx={{
            padding: "70px 50px",
            border: `1px solid ${Colors.BLACK}`,
            borderRadius: "30px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <img src={Hello} alt="hello" width={200} height={90} />
            <Typography
              textTransform={"lowercase"}
              fontWeight="500"
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontSize="6rem"
            >
              new yorkers!
            </Typography>
          </Box>
          <Typography
            width={500}
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
            fontFamily="Proxima Nova"
            fontWeight={100}
            textAlign="center"
            pt={2}
          >
            Available from 24 Hour Doorman Buildings. <br />
            Do we have service in your area?
          </Typography>
          <Box display={"flex"} justifyContent={"center"} width={500}>
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
            ></TextField>
            <Link onClick={nextStep}>
              <Button
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
            </Link>
          </Box>
        </Stack>
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
  );
}
