import { Box, Grid, Stack, useMediaQuery } from "@mui/material";

import BaseModal from "./Cloth(2)Modal";
import BasicModal from "./Cloth(1)Modal";
import BasisModal from "./Cloth(3)Modal";
import Cloth1Modal from "./Cloth(5)Modal";
import Cloth2Modal from "./Cloth(6)Modal";
import Cloth3Modal from "./Cloth(7)Modal";
import Cloth4Modal from "./Cloth(8)Modal";
import ClothModal from "./Cloth(4)Modal";
import image1 from "../../assets/1679605614091_H&M.png";
import image2 from "../../assets/1679605690207_Britches.jpg";
import image3 from "../../assets/1679605635399_Autumn Cashmere.jpg";
import image4 from "../../assets/1679605705905_Circle.jpg";
import image5 from "../../assets/1679605736771_Creatures of the Wind.jpg";
import image6 from "../../assets/1679605722126_Cotelac.jpg";
import image7 from "../../assets/1679605654400_Blanket.png";
import image8 from "../../assets/1679605674930_Boss.png";

export default function StackOneContainer() {
  const isXsScreen = useMediaQuery("(max-width:1280px)");

  return (
    <Stack
      height={isXsScreen ? undefined : "1525px"}
      gridTemplateRows={"1fr 1fr 1fr 1fr 1fr 1fr"}
      gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr "}
      gap={"20px"}
      width={"80%"}
      margin={" 0 auto"}
      padding={"10px"}
      display={isXsScreen ? "column" : "grid"}
    >
      {isXsScreen ? (
        <Grid container rowGap={2} columnSpacing={2}>
          <Grid item xs={6} md={6}>
            <Box
              sx={{
                gridRowStart: "1",
                gridRowEnd: "3",
                gridColumnStart: "1",
                gridColumnEnd: "3",
              }}
              overflow={"hidden"}
              border={"6px solid #df7c6d"}
              borderRadius={"20px"}
            >
              <BasicModal />
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box
              sx={{
                gridRowStart: "1",
                gridRowEnd: "2",
                gridColumnStart: "3",
                gridColumnEnd: "5",
              }}
              overflow={"hidden"}
              border={"6px solid #df7c6d"}
              borderRadius={"20px"}
            >
              <BaseModal />
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box
              sx={{
                gridRowStart: "3",
                gridRowEnd: "5",
                gridColumnStart: "1",
                gridColumnEnd: "3",
              }}
              overflow={"hidden"}
              border={"6px solid #df7c6d"}
              borderRadius={"20px"}
            >
              <Cloth1Modal />
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box
              sx={{
                gridRowStart: "2",
                gridRowEnd: "4",
                gridColumnStart: "3",
                gridColumnEnd: "5",
              }}
              overflow={"hidden"}
              border={"6px solid #df7c6d"}
              borderRadius={"20px"}
            >
              <ClothModal />
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box
              sx={{
                gridRowStart: "1",
                gridRowEnd: "4",
                gridColumnStart: "5",
                gridColumnEnd: "6",
              }}
              overflow={"hidden"}
              border={"6px solid #df7c6d"}
              borderRadius={"20px"}
            >
              <BasisModal />
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box
              sx={{
                gridRowStart: "4",
                gridRowEnd: "5",
                gridColumnStart: "3",
                gridColumnEnd: "6",
              }}
              overflow={"hidden"}
              border={"6px solid #df7c6d"}
              borderRadius={"20px"}
            >
              <Cloth2Modal />
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box
              sx={{
                gridRowStart: "5",
                gridRowEnd: "7",
                gridColumnStart: "1",
                gridColumnEnd: "4",
              }}
              overflow={"hidden"}
              border={"6px solid #df7c6d"}
              borderRadius={"20px"}
            >
              <Cloth3Modal />
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box
              sx={{
                gridRowStart: "5",
                gridRowEnd: "7",
                gridColumnStart: "4",
                gridColumnEnd: "6",
              }}
              overflow={"hidden"}
              border={"6px solid #df7c6d"}
              borderRadius={"20px"}
            >
              <Cloth4Modal />
            </Box>
          </Grid>
        </Grid>
      ) : (
        <>
          <Box
            sx={{
              gridRowStart: "1",
              gridRowEnd: "3",
              gridColumnStart: "1",
              gridColumnEnd: "3",
            }}
            overflow={"hidden"}
            border={"6px solid #df7c6d"}
            borderRadius={"20px"}
          >
            <BasicModal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image1}
              alt="imag1"
            />
          </Box>
          <Box
            sx={{
              gridRowStart: "1",
              gridRowEnd: "2",
              gridColumnStart: "3",
              gridColumnEnd: "5",
            }}
            overflow={"hidden"}
            border={"6px solid #df7c6d"}
            borderRadius={"20px"}
          >
            <BaseModal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image2}
              alt="imag2"
            />
          </Box>
          <Box
            sx={{
              gridRowStart: "3",
              gridRowEnd: "5",
              gridColumnStart: "1",
              gridColumnEnd: "3",
            }}
            overflow={"hidden"}
            border={"6px solid #df7c6d"}
            borderRadius={"20px"}
          >
            <Cloth1Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image3}
              alt="imag3"
            />
          </Box>
          <Box
            sx={{
              gridRowStart: "2",
              gridRowEnd: "4",
              gridColumnStart: "3",
              gridColumnEnd: "5",
            }}
            overflow={"hidden"}
            border={"6px solid #df7c6d"}
            borderRadius={"20px"}
          >
            <ClothModal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image4}
              alt="imag4"
            />
          </Box>
          <Box
            sx={{
              gridRowStart: "1",
              gridRowEnd: "4",
              gridColumnStart: "5",
              gridColumnEnd: "6",
            }}
            overflow={"hidden"}
            border={"6px solid #df7c6d"}
            borderRadius={"20px"}
          >
            <BasisModal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image5}
              alt="imag5"
            />
          </Box>
          <Box
            sx={{
              gridRowStart: "4",
              gridRowEnd: "5",
              gridColumnStart: "3",
              gridColumnEnd: "6",
            }}
            overflow={"hidden"}
            border={"6px solid #df7c6d"}
            borderRadius={"20px"}
          >
            <Cloth2Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image6}
              alt="imag6"
            />
          </Box>
          <Box
            sx={{
              gridRowStart: "5",
              gridRowEnd: "7",
              gridColumnStart: "1",
              gridColumnEnd: "4",
            }}
            overflow={"hidden"}
            border={"6px solid #df7c6d"}
            borderRadius={"20px"}
          >
            <Cloth3Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image7}
              alt="imag7"
            />
          </Box>
          <Box
            sx={{
              gridRowStart: "5",
              gridRowEnd: "7",
              gridColumnStart: "4",
              gridColumnEnd: "6",
            }}
            overflow={"hidden"}
            border={"6px solid #df7c6d"}
            borderRadius={"20px"}
          >
            <Cloth4Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image8}
              alt="imag8"
            />
          </Box>
        </>
      )}
    </Stack>
  );
}
