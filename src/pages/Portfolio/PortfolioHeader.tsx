import { Box, Stack, Typography, styled } from "@mui/material";
import Bug from "../../assets/bug_08.png";
import image1 from "../../assets/1679605614091_H&M.png";
import image2 from "../../assets/1679605690207_Britches.jpg";
import image3 from "../../assets/1679605635399_Autumn Cashmere.jpg";
import image4 from "../../assets/1679605705905_Circle.jpg";
import image5 from "../../assets/1679605736771_Creatures of the Wind.jpg";
import image6 from "../../assets/1679605722126_Cotelac.jpg";
import image7 from "../../assets/1679605654400_Blanket.png";
import image8 from "../../assets/1679605674930_Boss.png";
import image9 from "../../assets/1679605754885_Dear Cashmere.png";
import image10 from "../../assets/1679605824689_Hermes.png";
import image11 from "../../assets/1679605771784_Dries Van Noten.jpeg";
import image12 from "../../assets/1679605837602_J. Crew.jpg";
import image13 from "../../assets/1679605870985_Jonstons of Elgin.jpg";
import image14 from "../../assets/1679605853752_Jill Sander.png";
import image15 from "../../assets/1679605786831_Gucci.jpeg";
import image16 from "../../assets/1679605805057_Gucci.png";
import image17 from "../../assets/1679605886044_JPress.png";
import image18 from "../../assets/1679605946026_Laligne.png";
import image19 from "../../assets/1679605990858_Marimekko.jpg";
import image20 from "../../assets/1679605963784_Line of Trade.png";
import image21 from "../../assets/1679605900149_Jumper 1234.png";
import image22 from "../../assets/1679605977956_Lord & Taylor.jpeg";
import image23 from "../../assets/1679605913882_Kate Spade.jpeg";
import image24 from "../../assets/1679605929700_L.L. Bean.png";
import image25 from "../../assets/1679606010381_Michael Kors.jpg";
import image26 from "../../assets/1679606094115_Rag & Bone.png";
import image27 from "../../assets/1679606134057_Taylor Stitch.jpg";
import image28 from "../../assets/1679606108797_Reformation.png";
import image29 from "../../assets/1679606024239_Oscar de la Renta.png";
import image30 from "../../assets/1679606120647_Sutton Studio.png";
import image31 from "../../assets/1679606040555_Patagonia.jpg";
import image32 from "../../assets/1679606053805_Prada.png";
import image33 from "../../assets/1679606149531_Taylor Stitch.jpg";
import image34 from "../../assets/1679606212644_Vintage.png";
import image35 from "../../assets/1679922747634_Aqua.png";
import image36 from "../../assets/1679606226001_Woolovers.jpg";
import image37 from "../../assets/1679606165081_Tom Ford.png";
import image38 from "../../assets/1679606239335_Wyett.jpg";
import image39 from "../../assets/1679606179069_Vince.png";
import image40 from "../../assets/1679606198318_Vince Beige.png";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import BasicModal from "./Cloth(1)Modal";
import BaseModal from "./Cloth(2)Modal";
import BasisModal from "./Cloth(3)Modal";
import ClothModal from "./Cloth(4)Modal";
import Cloth1Modal from "./Cloth(5)Modal";
import Cloth2Modal from "./Cloth(6)Modal";
import Cloth3Modal from "./Cloth(7)Modal";
import Cloth4Modal from "./Cloth(8)Modal";
import Cloth5Modal from "./Cloth(9)Modal";
import Cloth6Modal from "./Cloth(10)Modal";
import Cloth7Modal from "./Cloth(11)Modal";
import Cloth8Modal from "./Cloth(12)Modal";
import Cloth9Modal from "./Cloth(13)Modal";
import Cloth10Modal from "./Cloth(14)Modal";
import Cloth11Modal from "./Cloth(15)Modal";
import Cloth12Modal from "./Cloth(16)Modal";
import Cloth13Modal from "./Cloth(17)Modal";
import Cloth14Modal from "./Cloth(18)Modal";
import Cloth15Modal from "./Cloth(19)Modal";
import Cloth16Modal from "./Cloth(20)Modal";
import Cloth17Modal from "./Cloth(21)Modal";
import Cloth18Modal from "./Cloth(22)Modal";
import Cloth19Modal from "./Cloth(23)Modal";
import Cloth20Modal from "./Cloth(24)Modal";
import Cloth21Modal from "./Cloth(25)Modal";
import Cloth22Modal from "./Cloth(26)Modal";
import Cloth23Modal from "./Cloth(27)Modal";
import Cloth25Modal from "./Cloth(29)Modal";
import Cloth24Modal from "./Cloth(28)Modal";
import Cloth26Modal from "./Cloth(30)Modal";
import Cloth27Modal from "./Cloth(31)Modal";
import Cloth28Modal from "./Cloth(32)Modal";
import Cloth29Modal from "./Cloth(33)Modal";
import Cloth30Modal from "./Cloth(34)Modal";
import Cloth32Modal from "./Cloth(36)Modal";
import Cloth31Modal from "./Cloth(35)Modal";
import Cloth33Modal from "./Cloth(37)Modal";
import Cloth34Modal from "./Cloth(38)Modal";
import Cloth35Modal from "./Cloth(39)Modal";



const StyledTypography= styled(Typography)({
    ":hover": {
       color: "#df7c6d",
    },
})


export default function PorfolioHeader() {


    return (
        <>
        <Box width={"100%"} maxWidth={"1440px"} margin={"0 auto"} padding={"0 10rem"}>
        <Box position={"relative"}>
            <Box padding={"8rem 0 14rem 0"} maxWidth={"620px"} position={"relative"} zIndex={"1"}>
        <Typography  lineHeight={"0.5"} color={"black"} fontWeight={"400"} fontSize={"5.3rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>SEEING IS BELEIVING</Typography>
          <Typography margin={"50px 2px"} color={"#575656"} fontWeight={"500"} fontSize={"1.3rem"} fontFamily={`"Proxima Nova", sans-serif`}>Don't think we can fix what you've got?<Typography color={"#575656"} fontWeight={"500"} fontSize={"1.3rem"} fontFamily={`"Proxima Nova", sans-serif`} paddingTop={"5px"}>Check out our gallery of before and afters to see what magic we can work on any garment in any condition.</Typography></Typography>  
          <Link to={routes.SCHEDULE_REPAIR} style={{ textDecoration: "none" }}>
          <StyledTypography lineHeight={"0"} color={"black"} fontWeight={"400"} fontSize={"2.3rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>REPAIR IT WITH A CLICK. WE DARE YOu</StyledTypography>
          </Link>
          </Box>
            <img style={{
                marginRight: "-69px",
                marginTop: "-79px",
                top: 0,
                right: 237,
                position: "absolute",
                maxWidth: "840px",
            }} src={Bug} width={"100%"} alt="bug-image" />
        </Box>
        </Box>
        <Box position={"relative"} z-zIndex={"1"} marginBottom={"-5rem"}>
        <Box width={"100%"} maxWidth={"1440px"} margin={"0 auto"} padding={"0 10rem"}>
            <Stack marginBottom={"20px"} height={"1525px"} gridTemplateRows={"1fr 1fr 1fr 1fr 1fr 1fr"} gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr 1fr"} display={"grid"} gap={"20px"}>
                <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "3",
                    gridColumnStart: "1",
                    gridColumnEnd: "3",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <BasicModal />
                <img style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }} src={image1} alt="imag1" />
                </Box>
                <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "2",
                    gridColumnStart: "3",
                    gridColumnEnd: "5",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <BaseModal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image2} alt="imag2" />
                </Box>
                <Box sx={{
                    gridRowStart: "3",
                    gridRowEnd: "5",
                    gridColumnStart: "1",
                    gridColumnEnd: "3",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                <Cloth1Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image3} alt="imag3" />
                </Box>
                <Box sx={{
                    gridRowStart: "2",
                    gridRowEnd: "4",
                    gridColumnStart: "3",
                    gridColumnEnd: "5",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <ClothModal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image4} alt="imag4" />
                </Box>
                <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "4",
                    gridColumnStart: "5",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                     <BasisModal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image5} alt="imag5" />
                </Box>
                <Box sx={{
                    gridRowStart: "4",
                    gridRowEnd: "5",
                    gridColumnStart: "3",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth2Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image6} alt="imag6" />
                </Box>
                <Box sx={{
                    gridRowStart: "5",
                    gridRowEnd: "7",
                    gridColumnStart: "1",
                    gridColumnEnd: "4",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth3Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image7} alt="imag7" />
                </Box>
                <Box sx={{
                    gridRowStart: "5",
                    gridRowEnd: "7",
                    gridColumnStart: "4",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth4Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image8} alt="imag8" />
                </Box>
            </Stack>
            <Stack marginBottom={"20px"} height={"1525px"} gridTemplateRows={"1fr 1fr 1fr 1fr 1fr 1fr"} gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr 1fr"} display={"grid"} gap={"20px"}>
                <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "3",
                    gridColumnStart: "1",
                    gridColumnEnd: "3",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth5Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image9} alt="image9" />
                </Box>
                <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "2",
                    gridColumnStart: "3",
                    gridColumnEnd: "5",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth6Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image10} alt="image10" />
                </Box>
                <Box sx={{
                    gridRowStart: "3",
                    gridRowEnd: "5",
                    gridColumnStart: "1",
                    gridColumnEnd: "3",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth9Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image11} alt="image11" />
                </Box>
                <Box sx={{
                    gridRowStart: "2",
                    gridRowEnd: "4",
                    gridColumnStart: "3",
                    gridColumnEnd: "5",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth8Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image12} alt="image12" />
                </Box>
                <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "4",
                    gridColumnStart: "5",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth7Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image13} alt="image13" />
                </Box>
                <Box sx={{
                    gridRowStart: "4",
                    gridRowEnd: "5",
                    gridColumnStart: "3",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth10Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image14} alt="image14" />
                </Box>
                <Box sx={{
                    gridRowStart: "5",
                    gridRowEnd: "7",
                    gridColumnStart: "1",
                    gridColumnEnd: "4",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth11Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image15} alt="image15" />
                </Box>
                <Box sx={{
                    gridRowStart: "5",
                    gridRowEnd: "7",
                    gridColumnStart: "4",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth12Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image16} alt="image16" />
                </Box>
            </Stack>
            <Stack marginBottom={"20px"} height={"1525px"} gridTemplateRows={"1fr 1fr 1fr 1fr 1fr 1fr"} gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr 1fr"} display={"grid"} gap={"20px"}>
            <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "3",
                    gridColumnStart: "1",
                    gridColumnEnd: "3",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth13Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image17} alt="image17" />
                </Box>
                <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "2",
                    gridColumnStart: "3",
                    gridColumnEnd: "5",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth14Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image18} alt="image18" />
                </Box>
                <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "4",
                    gridColumnStart: "5",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth15Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image19} alt="image19" />
                </Box>
                <Box sx={{
                    gridRowStart: "2",
                    gridRowEnd: "4",
                    gridColumnStart: "3",
                    gridColumnEnd: "5",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth16Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image20} alt="image20" />
                </Box>
                <Box sx={{
                    gridRowStart: "3",
                    gridRowEnd: "5",
                    gridColumnStart: "1",
                    gridColumnEnd: "3",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth17Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image21} alt="image21" />
                </Box>
                <Box sx={{
                    gridRowStart: "4",
                    gridRowEnd: "5",
                    gridColumnStart: "3",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth18Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image22} alt="image22" />
                </Box>
                <Box sx={{
                    gridRowStart: "5",
                    gridRowEnd: "7",
                    gridColumnStart: "1",
                    gridColumnEnd: "4",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth19Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image23} alt="image23" />
                </Box>
                <Box sx={{
                    gridRowStart: "5",
                    gridRowEnd: "7",
                    gridColumnStart: "4",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth20Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image24} alt="image24" />
                </Box>
            </Stack>
            <Stack marginBottom={"20px"} height={"1525px"} gridTemplateRows={"1fr 1fr 1fr 1fr 1fr 1fr"} gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr 1fr"} display={"grid"} gap={"20px"}>
            <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "3",
                    gridColumnStart: "1",
                    gridColumnEnd: "3",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth21Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image25} alt="image25" />
                </Box>
                <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "2",
                    gridColumnStart: "3",
                    gridColumnEnd: "5",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth22Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image26} alt="image26" />
                </Box>
                <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "4",
                    gridColumnStart: "5",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth23Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image27} alt="image27" />
                </Box>
                <Box sx={{
                    gridRowStart: "2",
                    gridRowEnd: "4",
                    gridColumnStart: "3",
                    gridColumnEnd: "5",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth25Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image28} alt="image28" />
                </Box>
                <Box sx={{
                    gridRowStart: "3",
                    gridRowEnd: "5",
                    gridColumnStart: "1",
                    gridColumnEnd: "3",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth24Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image29} alt="image29" />
                </Box>
                <Box sx={{
                    gridRowStart: "4",
                    gridRowEnd: "5",
                    gridColumnStart: "3",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth26Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image30} alt="image30" />
                </Box>
                <Box sx={{
                    gridRowStart: "5",
                    gridRowEnd: "7",
                    gridColumnStart: "1",
                    gridColumnEnd: "4",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth27Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image31} alt="image31" />
                </Box>
                <Box sx={{
                    gridRowStart: "5",
                    gridRowEnd: "7",
                    gridColumnStart: "4",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth26Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image32} alt="image32" />
                </Box>
            </Stack>
            <Stack marginBottom={"80px"} height={"1525px"} gridTemplateRows={"1fr 1fr 1fr 1fr 1fr 1fr"} gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr 1fr"} display={"grid"} gap={"20px"}>
            <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "3",
                    gridColumnStart: "1",
                    gridColumnEnd: "3",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth28Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image33} alt="image33" />
                </Box>
                <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "2",
                    gridColumnStart: "3",
                    gridColumnEnd: "5",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth29Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image34} alt="image34" />
                </Box>
                <Box sx={{
                    gridRowStart: "1",
                    gridRowEnd: "4",
                    gridColumnStart: "5",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth30Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image35} alt="image35" />
                </Box>
                <Box sx={{
                    gridRowStart: "2",
                    gridRowEnd: "4",
                    gridColumnStart: "3",
                    gridColumnEnd: "5",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth31Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image36} alt="image36" />
                </Box>
                <Box sx={{
                    gridRowStart: "3",
                    gridRowEnd: "5",
                    gridColumnStart: "1",
                    gridColumnEnd: "3",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth32Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image37} alt="image37" />
                </Box>
                <Box sx={{
                    gridRowStart: "4",
                    gridRowEnd: "5",
                    gridColumnStart: "3",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth33Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image38} alt="image38" />
                </Box>
                <Box sx={{
                    gridRowStart: "5",
                    gridRowEnd: "7",
                    gridColumnStart: "1",
                    gridColumnEnd: "4",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth34Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image39} alt="image39" />
                </Box>
                <Box sx={{
                    gridRowStart: "5",
                    gridRowEnd: "7",
                    gridColumnStart: "4",
                    gridColumnEnd: "6",
                }}  overflow={"hidden"} border={"6px solid #df7c6d"} borderRadius={"20px"}>
                    <Cloth35Modal />
                <img style={{
                     width: "100%",
                     height: "100%",
                    objectFit: "cover",
                }} src={image40} alt="image40" />
                </Box>
            </Stack>
            </Box>
        </Box>
        </>
    )
}