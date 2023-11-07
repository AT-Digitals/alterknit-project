import { Box, Grid, Stack, useMediaQuery } from "@mui/material";

import Cloth10Modal from "./Cloth(14)Modal";
import Cloth11Modal from "./Cloth(15)Modal";
import Cloth12Modal from "./Cloth(16)Modal";
import Cloth5Modal from "./Cloth(9)Modal";
import Cloth6Modal from "./Cloth(10)Modal";
import Cloth7Modal from "./Cloth(11)Modal";
import Cloth8Modal from "./Cloth(12)Modal";
import Cloth9Modal from "./Cloth(13)Modal";
import image10 from "../../assets/1679605824689_Hermes.png";
import image11 from "../../assets/1679605771784_Dries Van Noten.jpeg";
import image12 from "../../assets/1679605837602_J. Crew.jpg";
import image13 from "../../assets/1679605870985_Jonstons of Elgin.jpg";
import image14 from "../../assets/1679605853752_Jill Sander.png";
import image15 from "../../assets/1679605786831_Gucci.jpeg";
import image16 from "../../assets/1679605805057_Gucci.png";
import image9 from "../../assets/1679605754885_Dear Cashmere.png";

export default function Staack2Container() {
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
              <Cloth5Modal />
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
              <Cloth6Modal />
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
              <Cloth9Modal />
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
              <Cloth8Modal />
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
              <Cloth7Modal />
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
              <Cloth10Modal />
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
              <Cloth11Modal />
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
              <Cloth11Modal />
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
            <Cloth5Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image9}
              alt="image9"
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
            <Cloth6Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image10}
              alt="image10"
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
            <Cloth9Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image11}
              alt="image11"
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
            <Cloth8Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image12}
              alt="image12"
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
            <Cloth7Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image13}
              alt="image13"
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
            <Cloth10Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image14}
              alt="image14"
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
            <Cloth11Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image15}
              alt="image15"
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
            <Cloth12Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image16}
              alt="image16"
            />
          </Box>
        </>
      )}
    </Stack>
  );
}
