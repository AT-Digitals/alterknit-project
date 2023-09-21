import { Box, Button, TextField, Typography, styled } from "@mui/material";
import Bug from "../../assets/bugs.png";
import { Link } from "react-router-dom";
import Alterknitimage from "../../assets/bug_03.png";
import Colors from "../../CommonComponent/Colors";
import CustomButton from "../../CommonComponent/CustomButton";


const StyledButton = styled(CustomButton)({
  position: "absolute",
  top: "58%",
  right: "40%",
  borderRadius: "50%",
  width: 135,
  height: 135,
  fontSize: "18px",
  fontWeight: 400,
  textTransform: "uppercase",
  padding: "30px",
  color: Colors.WHITE,
  border: `6px solid ${Colors.WHITE} !important`,
});



export default function SubscribePage() {
  return (
    <Box margin={"50px 30px"} display={"flex"} justifyContent={"center"}>
      <Box width={"100%"} marginTop={"40px"}>
        <Typography
          lineHeight={"0.9"}
          textAlign={"center"}
          fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
          color={"black"}
          fontSize={"50px"}
          fontWeight={400}
        >
          EXTEND THE LIFE OF THE{" "}
          <Typography color={"black"} fontSize={"50px"} fontWeight={400} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>
            CLOTHES YOU LOVE
          </Typography>
        </Typography>
        <Box marginLeft={"230px"} display={"flex"} justifyContent={"center"}>
        <StyledButton sx={{ fontFamily: `"IndustrialGothicBannerStd", sans-serif !important`, }} bgColor={Colors.BLACK}>Schedule a repair</StyledButton>
           
        
        </Box>
        <Box marginTop={"30px"} display={"flex"} justifyContent={"center"}>
          <Link to={""}>
            <img src={Alterknitimage} width={"670"} alt="bug1" />
          </Link>
        </Box>
        <Box height={"24%"} display={"flex"} justifyContent={"space-between"}>
          <Link to={""}>
            <img src={Bug} alt="bug-left" width={"300px"} />
          </Link>
          <Typography
            marginTop={"100px"}
            color={"black"}
            fontWeight={"bold"}
            fontSize={"22px"}
            textAlign={"center"}
          >
            JOIN OUR MAILING LIST & GET 10% OF YOUR FIRST REPAIRED ORDER
            <Typography
              color={"black"}
              fontWeight={"bold"}
              fontSize={"22px"}
              textAlign={"center"}
            >
              WITH US*
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <Typography
                width={"520px"}
                borderBottom={"3px dashed black"}
              ></Typography>
            </Box>
          </Typography>
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
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <TextField
            sx={{
              ".MuiOutlinedInput-input": {
                width: "550px",
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
            }}
          >
            Subscribe
          </Button>
        </Box>
        <Typography
          color={"black"}
          fontSize={"14px"}
          textAlign={"center"}
          marginTop={"20px"}
        >
          *Code must be applied at check out. Please check your email!
        </Typography>
      </Box>
    </Box>
  );
}
