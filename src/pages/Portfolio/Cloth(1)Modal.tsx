import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import image1 from "../../assets/1679605614091_H&M.png";
import { Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import image2 from "../../assets/1679605614091_H&M (1).png"


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }} onClick={handleOpen} src={image1} alt="imag1" />
                
      <Modal style={{
        border: "0",
      }}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={{
            backgroundColor: "#f8f1eb",
        }} padding={"10px"} height={"480px"} marginTop={"130px"} direction={"row"} spacing={6} display={"flex"} justifyContent={"center"}>
       
         <Box style={{
                   width: "480px",
                   height: "550px",
                   display: "flex",
                   flexDirection: "column",
                   borderRadius: "30px",
                   position: "relative",
                   backgroundColor: "#df7c6d",
                   padding: "7px",
                   border: "0px solid white",
                   marginTop: "-40px",
                   
                }}  overflow={"hidden"} border={"6px solid #df7c6d"}>
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
                <Typography   color={"black"} fontSize={"1.3rem"}>H&M</Typography>
                </Box>
                </Box>
                <Box style={{
                   width: "480px",
                   height: "550px",
                   display: "flex",
                   flexDirection: "column",
                   borderRadius: "30px",
                   position: "relative",
                   backgroundColor: "#df7c6d",
                   padding: "7px",
                   border: "0px solid white",
                   marginTop: "-40px",
                   
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
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
                <Typography   color={"black"} fontSize={"1.3rem"}>H&M</Typography>
                </Box>
                </Box>
                <Box>
                <CloseIcon style={{
                    position: "absolute",
                    marginLeft: "-75px",
                    fontSize: "25px",
                    borderRadius: "17px",
                    backgroundColor: "#df7c6d",
                    padding: "5px 5px",
                    marginTop: "-48px",
                }} onClick={handleClose} />
                </Box>
                </Stack>
      </Modal>
    </>
  );
}