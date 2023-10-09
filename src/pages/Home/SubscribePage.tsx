import { Box, Button, Stack, TextField, Typography, styled } from "@mui/material";
import Bug from "../../assets/bugs.png";
import { Link } from "react-router-dom";
import Alterknitimage from "../../assets/bug_03.png";
import Colors from "../../CommonComponent/Colors";
import routes from "../../routes/routes";

const StyledButton = styled(Button)({
  position: "absolute",
  left: "52%",
  transform: `translate(${-20}%, ${-42}%)`,
  borderRadius: "50%",
  width: 110,
  height: 110,
  fontSize: "19px",
  fontWeight: 400,
  textTransform: "uppercase",
  lineHeight: 1,
  color: Colors.WHITE,
  border: `6px solid ${Colors.WHITE} !important`,
  backgroundColor: Colors.BLACK,
  ":hover": {
    backgroundColor: Colors.LINK,
  }
});

export default function SubscribePage() {
  return (
    <Box margin={"0px 30px"} display={"flex"} justifyContent={"center"}>
      <Box width={"100%"} marginTop={"90px"}>
        <Typography
          lineHeight={1}
          textAlign={"center"}
          fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
          color={"black"}
          fontSize={"48px"}
          fontWeight={500}
          textTransform="lowercase"
        >
          EXTEND THE LIFE OF THE <br />  CLOTHES YOU LOVE
        </Typography>
        <Box marginTop={"30px"} marginBottom={20} display={"flex"} justifyContent={"center"}>
          <Link to={routes.SCHEDULE_REPAIR}>
            <StyledButton
              sx={{
                fontFamily: `"IndustrialGothicBannerStd", sans-serif !important`, fontWeight: 500, textTransform: "lowercase",
              }}
            >
              Schedule a repair
            </StyledButton>
          </Link>
          <img src={Alterknitimage} width={"650"} alt="bug1" />
        </Box>
        <Stack direction="row" justifyContent={"space-between"} pb={8} maxWidth={1300} margin="0 auto">
          <Link to={""}>
            <img src={Bug} alt="bug-left" width={"300px"} />
          </Link>
          <Stack direction="column" spacing={4}>
            <Typography
              marginTop={"100px"}
              color={"black"}
              fontWeight={500}
              fontSize={"32px"}
              textAlign={"center"}
              fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
              lineHeight={1}
              textTransform="lowercase"
            >
              JOIN OUR MAILING LIST & GET 10% OF YOUR FIRST REPAIRED ORDER <br />  WITH US*
              <Box display={"flex"} justifyContent={"center"} mt={1}>
                <Typography
                  width={"520px"}
                  borderBottom={"3px dashed black"}
                ></Typography>
              </Box>
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <TextField
                sx={{
                  ".MuiOutlinedInput-input": {
                    width: "470px",
                    height: "40px",
                    border: "1px solid #df7c6d",
                  },
                  ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                    fontSize: "20px",
                  },
                }}
                variant="outlined"
                placeholder="Your Email"
              ></TextField>
              <Button
                sx={{
                  backgroundColor: "#df7c6d",
                  border: "1px solid #df7c6d",
                  color: "white",
                  padding: "10px 26px",
                  borderRadius: "0",
                  textTransform: "capitalize",
                  fontSize: "20px",
                  ":hover": {
                    backgroundColor: "#f58977",
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Typography
              fontSize={"14px"}
              textAlign={"center"}
              marginTop={"20px"}
              fontFamily={`"ProximaNovaMedium", sans-serif`} fontWeight={500} color={Colors.BLACK_TEXT}
            >
              *Code must be applied at check out. Please check your email!
            </Typography>
          </Stack>
          <Link to={""}>
            <img
              src={Bug}
              alt="bug-right"
              width={"300px"}
              style={{
                transform: "scaleX(-1)",
              }}
            />
          </Link>
        </Stack>

      </Box>

    </Box>
  );
}
