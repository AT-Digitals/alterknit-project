import { Box, Button, TextField, Typography } from "@mui/material";
import Bug from "../../assets/bugs.png";
import { Link } from "react-router-dom";
import Alterknitimage from "../../assets/bug_03.png";

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
          <Box
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "100px",
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "#df7c6d",
              },
            }}
          >
            <Typography
              textAlign={"center"}
              marginTop={"37px"}
              fontWeight={"bold"}
              lineHeight={"1.2"}
              fontSize={"12px"}
              color={"white"}
            >
              SCHEDULE A REPAIR
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Link to={""}>
            <img src={Alterknitimage} width={"590"} alt="bug1" />
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
