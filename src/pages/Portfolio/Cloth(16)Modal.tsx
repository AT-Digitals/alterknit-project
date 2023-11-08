import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import image1 from "../../assets/1679605805057_Gucci.png"
import { Stack, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import image2 from "../../assets/1679605805057_Gucci (1).png";

export default function Cloth12Modal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isXsScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      <img style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }} onClick={handleOpen} src={image1} alt="imag1" />
                
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <Stack direction= 'row' sx={{
            backgroundColor: "#f8f1eb",
        }} padding={"10px"} height={"480px"} paddingLeft={{xs: "35px", sm: "0px", md: "0px", lg: "0px"}} marginTop={{xs: "40px", sm: '130px', md: "130px", lg: "130px"}} gap={"40px"} display={isXsScreen ? "block" : "flex"} justifyContent={"center"}>
       
         <Box padding={{xs: '5px', sm: "6px", md: "6px", lg: "7px"}} width={{xs: "290px", sm: "480px", md: "480px", lg: "480px"}} height={{xs: "390px", sm: "550px", md: "550px", lg: "550px"}} style={{
                   display: "flex",
                   flexDirection: "column",
                   borderRadius: "30px",
                   position: "relative",
                   backgroundColor: "#df7c6d",
                   border: "0px solid white",
                   marginTop: "-40px",
                   
                }}   overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Box height={"480px"} sx={{
                        backgroundColor: "white",
                        borderTopLeftRadius: "30px",
                        borderTopRightRadius: "30px",
                        borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                    }}>
                <img style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                    borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                    marginBottom: "11px",
                }} src={image1} alt="imag1" />
               
                </Box>
                <Box textAlign={"center"} marginTop={"-24px"} paddingBottom={"1rem"}>
                <Typography style={{
                    backgroundColor: "#df7c6d",
                    display: "inline-block",
                    margin: "0",
                    borderRadius: "15px",
                    width: "100px",
                }}  color={"black"} fontWeight={"400"} fontSize={"2.1rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>BEFORE</Typography>
                <Typography fontFamily={`"ProximaNovaMedium", sans-serif`}  color={"black"} fontSize={"22px"} fontWeight={"600"}>GUCCI</Typography>
                </Box>
                </Box>
                <Box padding={{xs: '5px', sm: "6px", md: "6px", lg: "7px"}} marginTop={{xs: "30px", sm: "-40px", md: "-40px", lg: "-40px"}} width={{xs: "290px", sm: "480px", md: "480px", lg: "480px"}} height={{xs: "390px", sm: "550px", md: "550px", lg: "550px"}} style={{
                   display: "flex",
                   flexDirection: "column",
                   borderRadius: "30px",
                   position: "relative",
                   backgroundColor: "#df7c6d",
                   border: "0px solid white",
                   
                }}   overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Box height={"480px"} sx={{
                        backgroundColor: "white",
                        borderTopLeftRadius: "30px",
                        borderTopRightRadius: "30px",
                        borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                    }}>
                <img style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                    borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                    marginBottom: "11px",
                }} src={image2} alt="imag1" />
               
                </Box>
                <Box textAlign={"center"} marginTop={"-24px"} paddingBottom={"1rem"}>
                <Typography style={{
                    backgroundColor: "#df7c6d",
                    display: "inline-block",
                    margin: "0",
                    borderRadius: "15px",
                    width: "100px",
                }}  color={"black"} fontWeight={"400"} fontSize={"2.1rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>AFTER</Typography>
                <Typography fontFamily={`"ProximaNovaMedium", sans-serif`}  color={"black"} fontSize={"22px"} fontWeight={"600"}>GUCCI</Typography>
                </Box>
                </Box>
                <Box>
                <CloseIcon sx={{
                    position: "absolute",
                    marginLeft: {xs: "275px", sm: "-75px", md: "-75px", lg: "-75px"},
                    fontSize: "25px",
                    borderRadius: "17px",
                    backgroundColor: "#df7c6d",
                    padding: "5px 5px",
                    marginTop: {xs: "-405px", sm: "-48px", md: "-48px", lg: "-48px"},
                }} onClick={handleClose} />
                </Box>
                </Stack>
      </Modal>
    </>
  );
}