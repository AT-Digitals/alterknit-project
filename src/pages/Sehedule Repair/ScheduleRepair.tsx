import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";

import Colors from "../../CommonComponent/Colors";

interface shipinprops {
  nextStep: (value: any) => void;
}

export default function ScheduleReapir({ nextStep }: shipinprops) {
  const buttonStyle = {
    backgroundColor: Colors.HOME_BACKGROUND,
    width: 220,
    transition: "background-color 0.3s, color 0.3s",
    borderRadius: "20px",
  };

  const buttonHoverStyle = {
    backgroundColor: "black",
    color: "white",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isXsScreen = useMediaQuery("(max-width:890px)");

  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign={"center"}
        sx={{
          backgroundImage: `url('https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/knitting.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: { xs: "100%", md: "67%" },
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography
          // minWidth={700}
          variant="h2"
          fontWeight={"500"}
          textTransform={"lowercase"}
          sx={{
            fontFamily: "IndustrialGothicBannerStd, sans-serif",
            fontSize: { xs: "4.5rem", md: "9.5em" },
            lineHeight: 1,
            textAlign: "center",
            padding: { xs: "2rem", md: "0 150px 0 5rem" },
          }}
        >
          WELCOME TO REAL REPAIR.
        </Typography>
        {isXsScreen ? undefined : (
          <Box
            sx={{
              backgroundImage: `url('	https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_syr_left.svg')`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "right",
              width: 150,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              content: '""',
              marginRight: "-1px",
              top: 0,
              right: 0,
            }}
          ></Box>
        )}
      </Box>
      <Box
        width={{ xs: "100%", md: "35%" }}
        bgcolor={"#df7c6d"}
        color={"black"}
        textAlign={"center"}
        padding={{ xs: "2rem 0 0 0", md: "4rem 4rem 3rem 1rem" }}
        position={"relative"}
      >
        <Typography
          variant="h3"
          fontSize={{ xs: "40px", md: "60px" }}
          fontWeight={500}
          fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
          textTransform={"lowercase"}
        >
          WE MAKE IT EASY!
        </Typography>
        <Stack padding={"2rem"} spacing={2}>
          <Typography
            fontSize={{ xs: "16px", md: "20px" }}
            fontFamily={`"ProximaNovaMedium", sans-serif`}
            fontWeight={500}
          >
            Access our shipping portal to create your order!
          </Typography>
          <Typography
            fontSize={{ xs: "16px", md: "20px" }}
            lineHeight={1}
            fontFamily={`"ProximaNovaMedium", sans-serif`}
            fontWeight={500}
          >
            A pre addressed shipping label and an order summary will come
            straight to your inbox for you to use.
          </Typography>
        </Stack>
        <Button
          style={
            isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={nextStep}
        >
          <Box minWidth={290} p={"15px 20px 5px"}>
            <Typography
              fontSize={{ xs: "45px", sm: "45px", md: "60px" }}
              fontWeight={500}
              color={isHovered ? "white" : "black"}
              fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
              lineHeight={1}
              textTransform={"lowercase"}
            >
              FIX ME!
            </Typography>
            <span
              style={{
                color: isHovered ? "white" : "black",
                textTransform: "none",
                fontSize: "18px",
                fontFamily: `"ProximaNovaMedium", sans-serif`,
                fontWeight: 500,
              }}
            >
              Click here to start
            </span>
          </Box>
        </Button>

        <Box mt={{ xs: 1, md: "70px" }}>
          <Typography
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            fontWeight={500}
            fontSize={"32px"}
            textTransform={"lowercase"}
          >
            ANY QUESTIONS?{" "}
          </Typography>
          <p
            style={{
              width: "240px",
              fontSize: "10px",
              margin: "0 auto",
              fontFamily: `"ProximaNovaMedium", sans-serif`,
              fontWeight: 500,
            }}
          >
            Be sure to visit our
            <a
              style={{
                color: "black",
                fontFamily: `"ProximaNovaMedium", sans-serif`,
                fontWeight: 500,
              }}
              href="https://alterknitnewyork.com/services#faqs"
            >
              FAQ Section
            </a>{" "}
            on our Service page to find out all the answers to your questions.
          </p>
          {isXsScreen ? undefined : (
            <img
              style={{
                maxWidth: "260px",
                position: "absolute",
                right: 0,
                bottom: 0,
                marginBottom: "-30px",
                pointerEvents: "none",
              }}
              src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bug_07.png"
              alt="bug"
            ></img>
          )}
        </Box>
      </Box>
    </Stack>
  );
}
