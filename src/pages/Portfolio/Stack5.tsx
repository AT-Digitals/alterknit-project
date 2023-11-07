import { Box, Grid, Stack, useMediaQuery } from "@mui/material";

import Cloth28Modal from "./Cloth(32)Modal";
import Cloth29Modal from "./Cloth(33)Modal";
import Cloth30Modal from "./Cloth(34)Modal";
import Cloth31Modal from "./Cloth(35)Modal";
import Cloth32Modal from "./Cloth(36)Modal";
import Cloth33Modal from "./Cloth(37)Modal";
import Cloth34Modal from "./Cloth(38)Modal";
import Cloth35Modal from "./Cloth(39)Modal";
import image33 from "../../assets/1679606149531_Taylor Stitch.jpg";
import image34 from "../../assets/1679606212644_Vintage.png";
import image35 from "../../assets/1679922747634_Aqua.png";
import image36 from "../../assets/1679606226001_Woolovers.jpg";
import image37 from "../../assets/1679606165081_Tom Ford.png";
import image38 from "../../assets/1679606239335_Wyett.jpg";
import image39 from "../../assets/1679606179069_Vince.png";
import image40 from "../../assets/1679606198318_Vince Beige.png";

export default function Stack5container() {
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
              <Cloth28Modal />
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
              <Cloth29Modal />
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
              <Cloth30Modal />
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
              <Cloth31Modal />
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
              <Cloth32Modal />
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
              <Cloth33Modal />
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
              <Cloth34Modal />
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
              <Cloth35Modal />
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
            <Cloth28Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image33}
              alt="image33"
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
            <Cloth29Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image34}
              alt="image34"
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
            <Cloth30Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image35}
              alt="image35"
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
            <Cloth31Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image36}
              alt="image36"
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
            <Cloth32Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image37}
              alt="image37"
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
            <Cloth33Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image38}
              alt="image38"
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
            <Cloth34Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image39}
              alt="image39"
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
            <Cloth35Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image40}
              alt="image40"
            />
          </Box>
        </>
      )}
    </Stack>
  );
}
