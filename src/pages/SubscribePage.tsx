import { Box, Button, TextField, Typography } from "@mui/material";
import Alterknitimage from "../assets/bug.png";
import { Link } from "react-router-dom";
import image1 from "../assets/bugs.png";


export default function SubscribePage() {
    return (
        <Box margin={"30px"} display={"flex"} justifyContent={"center"}>
        <Box width={"100%"} marginTop={"40px"}>
            <Typography lineHeight={"0.9"} textAlign={"center"} color={"black"} fontSize={"35px"} fontWeight={"600"}>EXTEND THE LIFE OF THE <Typography color={"black"} fontSize={"35px"} fontWeight={"600"}>CLOTHES YOU LOVE</Typography>
            </Typography>
            <Box marginLeft={"230px"} display={"flex"} justifyContent={"center"}>
            <Box
      sx={{
        width: "100px",
        height: "100px",
        borderRadius: "100px",
        backgroundColor: 'black',
        '&:hover': {
          backgroundColor: '#df7c6d',
        },
      }}
    ><Typography textAlign={"center"} marginTop={"37px"} fontWeight={"bold"} lineHeight={"1.2"}  fontSize={"12px"} color={"white"}>SCHEDULE A REPAIR</Typography></Box>
    </Box> 
    <Box display={"flex"} justifyContent={"center"}>
    <Link to={""}>
        <img src={Alterknitimage} width={"590"} alt="alterknit-image" />
    </Link>
    </Box>
    <Box height={"24%"} display={"flex"} justifyContent={"space-between"}>
    <Link to={""}>
        <img src={image1} alt="image1" width={"300px"} />
        </Link>
        <Typography marginTop={"100px"} color={"black"} fontWeight={"bold"} fontSize={"22px"} textAlign={"center"}>JOIN OUR MAILING LIST & GET 10% OF YOUR FIRST REPAIRED ORDER<Typography color={"black"} fontWeight={"bold"} fontSize={"22px"} textAlign={"center"}>WITH US*</Typography>
        <Box display={"flex"} justifyContent={"center"}>
        <Typography width={"520px"} borderBottom={"3px dashed black"}></Typography>
        </Box>
        </Typography>
        <Link to={""}>
        <img src={image1} alt="image1" width={"300px"} style={{
             transform: "scaleX(-1)",
        }} />
        </Link>
        </Box>
    <Box display={"flex"} justifyContent={"center"}>
    <TextField   sx={{
                ".MuiOutlinedInput-input": {
                  width: "550px",
                  height: "40px",
                  border: "1px solid #df7c6d",
                },
                ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": { 
                    fontSize: "20px",
                  }, }} variant="outlined"   placeholder="Your Mail" >
                   
                  </TextField>
                  <Button sx={{
                        backgroundColor: "#df7c6d",
                        border: "1px solid #df7c6d",
                        color: "white",
                        padding : "10px 26px",
                        borderRadius: "0",
                    }}>Subscribe</Button>
    </Box>
    <Typography color={"black"} fontSize={"14px"} textAlign={"center"} marginTop={"20px"}>*Code must be applied at check out. Please check your mail!</Typography>
        </Box>
        </Box>
    )
}