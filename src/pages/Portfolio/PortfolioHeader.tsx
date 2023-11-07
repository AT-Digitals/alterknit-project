/* eslint-disable jsx-a11y/img-redundant-alt */

import {
  Box,
  CardMedia,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

import Bug from "../../assets/bug_08.png";
import { Link } from "react-router-dom";
import Staack2Container from "./Stack2";
import Stack3Container from "./Stack3";
import Stack4Container from "./Stack4";
import Stack5container from "./Stack5";
import StackOneContainer from "./Stack1";
import routes from "../../routes/routes";

const StyledTypography = styled(Typography)({
  ":hover": {
    color: "#df7c6d",
  },
});

export default function PorfolioHeader() {
  const isXsScreen = useMediaQuery("(max-width:1280px)");

  return (
    <Stack>
      <Stack
        marginTop={"70px"}
        direction="row"
        justifyContent={"space-around"}
        maxWidth={"1050px"}
      >
        <Stack
          direction={"column"}
          padding={{
            xs: "0rem 0 2rem 0",
            sm: "0rem 0 2rem 0",
            md: "0rem 0 2rem 0",
            lg: "0rem 0 11rem 0",
          }}
          maxWidth={"620px"}
          margin={{ xs: "20px", sm: "0 auto", md: "0 auto", lg: "20px" }}
        >
          <Typography
            lineHeight={"1"}
            color={"black"}
            fontWeight={"500"}
            fontSize={{ xs: "45px", sm: "75px", md: "75px", lg: "80px" }}
            fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
            textTransform="lowercase"
            textAlign={{ xs: "center", sm: "center", md: "center", lg: "left" }}
            marginBottom={"15px"}
          >
            SEEING IS BELEIVING
          </Typography>
          <Typography
            margin={isXsScreen ? "15px 2px" : "27px 2px"}
            color={"#575656"}
            fontWeight={"500"}
            lineHeight={1.2}
            fontFamily={`"ProximaNovaMedium", sans-serif`}
            fontSize={isXsScreen ? "19px" : "22px"}
            textAlign={{ xs: "center", sm: "center", md: "center", lg: "left" }}
          >
            Don't think we can fix what you've got?
            <Typography
              color={"#575656"}
              fontWeight={"500"}
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              fontSize={isXsScreen ? "20px" : "22px"}
              paddingTop={"5px"}
              lineHeight={1.2}
              textAlign={{
                xs: "center",
                sm: "center",
                md: "center",
                lg: "left",
              }}
            >
              Check out our gallery of before and afters to see what magic
              <Typography
                color={"#575656"}
                fontWeight={"500"}
                fontFamily={`"ProximaNovaMedium", sans-serif`}
                fontSize={isXsScreen ? "20px" : "22px"}
                paddingTop={"5px"}
                lineHeight={1.2}
                textAlign={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "left",
                }}
              >
                we can work on any garment in any condition.
              </Typography>
            </Typography>
          </Typography>
          <Link to={routes.SCHEDULE_REPAIR} style={{ textDecoration: "none" }}>
            <StyledTypography
              lineHeight={"1"}
              color={"black"}
              fontWeight={"500"}
              fontSize={isXsScreen ? "2.23rem" : "2.3rem"}
              fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
              textTransform="lowercase"
              textAlign={{
                xs: "center",
                sm: "center",
                md: "center",
                lg: "left",
              }}
              marginTop={isXsScreen ? "10px" : "0px"}
            >
              REPAIR IT WITH A CLICK. WE DARE YOU.
            </StyledTypography>
          </Link>
        </Stack>

        <Box display={{ xs: "none", md: "flex" }}>
          <CardMedia
            sx={{
              marginRight: "-35px",
              marginTop: "55px",
              top: 0,
              right: "120px",
              position: "absolute",
              maxWidth: "840px",
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              },
            }}
            component="img"
            src={Bug}
            alt="bug-image"
            width={"100%"}
          />
        </Box>
      </Stack>

      <Box
        width={isXsScreen ? "100%" : undefined}
        position={"relative"}
        z-zIndex={"1"}
        marginBottom={"3rem"}
      >
        <StackOneContainer />

        <Staack2Container />

        <Stack3Container />

        <Stack4Container />

        <Stack5container />
      </Box>
    </Stack>
  );
}
