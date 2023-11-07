import { Box, Grid, Stack, useMediaQuery } from "@mui/material";

import Cloth21Modal from "./Cloth(25)Modal";
import Cloth22Modal from "./Cloth(26)Modal";
import Cloth23Modal from "./Cloth(27)Modal";
import Cloth24Modal from "./Cloth(28)Modal";
import Cloth25Modal from "./Cloth(29)Modal";
import Cloth26Modal from "./Cloth(30)Modal";
import Cloth27Modal from "./Cloth(31)Modal";
import image25 from "../../assets/1679606010381_Michael Kors.jpg";
import image26 from "../../assets/1679606094115_Rag & Bone.png";
import image27 from "../../assets/1679606134057_Taylor Stitch.jpg";
import image28 from "../../assets/1679606108797_Reformation.png";
import image29 from "../../assets/1679606024239_Oscar de la Renta.png";
import image30 from "../../assets/1679606120647_Sutton Studio.png";
import image31 from "../../assets/1679606040555_Patagonia.jpg";
import image32 from "../../assets/1679606053805_Prada.png";

export default function Stack4Container() {
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
        <>
          <Grid container rowGap={2} columnSpacing={2}>
            <Grid item xs={6} md={6}>
              {" "}
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
                <Cloth21Modal />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              {" "}
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
                <Cloth22Modal />
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
                <Cloth23Modal />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              {" "}
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
                <Cloth25Modal />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              {" "}
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
                <Cloth24Modal />
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
                <Cloth26Modal />
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
                <Cloth27Modal />
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
                <Cloth26Modal />
              </Box>
            </Grid>
          </Grid>
        </>
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
            <Cloth21Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image25}
              alt="image25"
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
            <Cloth22Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image26}
              alt="image26"
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
            <Cloth23Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image27}
              alt="image27"
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
            <Cloth25Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image28}
              alt="image28"
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
            <Cloth24Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image29}
              alt="image29"
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
            <Cloth26Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image30}
              alt="image30"
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
            <Cloth27Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image31}
              alt="image31"
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
            <Cloth26Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image32}
              alt="image32"
            />
          </Box>
        </>
      )}
    </Stack>
  );
}
