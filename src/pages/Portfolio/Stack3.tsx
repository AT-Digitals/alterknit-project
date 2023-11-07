import { Box, Grid, Stack, useMediaQuery } from "@mui/material";

import Cloth13Modal from "./Cloth(17)Modal";
import Cloth14Modal from "./Cloth(18)Modal";
import Cloth15Modal from "./Cloth(19)Modal";
import Cloth16Modal from "./Cloth(20)Modal";
import Cloth17Modal from "./Cloth(21)Modal";
import Cloth18Modal from "./Cloth(22)Modal";
import Cloth19Modal from "./Cloth(23)Modal";
import Cloth20Modal from "./Cloth(24)Modal";
import image17 from "../../assets/1679605886044_JPress.png";
import image18 from "../../assets/1679605946026_Laligne.png";
import image19 from "../../assets/1679605990858_Marimekko.jpg";
import image20 from "../../assets/1679605963784_Line of Trade.png";
import image21 from "../../assets/1679605900149_Jumper 1234.png";
import image22 from "../../assets/1679605977956_Lord & Taylor.jpeg";
import image23 from "../../assets/1679605913882_Kate Spade.jpeg";
import image24 from "../../assets/1679605929700_L.L. Bean.png";

export default function Stack3Container() {
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
                <Cloth13Modal />
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
                <Cloth14Modal />
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
                <Cloth15Modal />
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
                <Cloth16Modal />
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
                <Cloth17Modal />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              {" "}
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
                <Cloth18Modal />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              {" "}
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
                <Cloth19Modal />
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
                <Cloth20Modal />
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
            <Cloth13Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image17}
              alt="image17"
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
            <Cloth14Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image18}
              alt="image18"
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
            <Cloth15Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image19}
              alt="image19"
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
            <Cloth16Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image20}
              alt="image20"
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
            <Cloth17Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image21}
              alt="image21"
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
            <Cloth18Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image22}
              alt="image22"
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
            <Cloth19Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image23}
              alt="image23"
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
            <Cloth20Modal />
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={image24}
              alt="image24"
            />
          </Box>
        </>
      )}
    </Stack>
  );
}
