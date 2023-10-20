import { Box, Typography, useMediaQuery } from "@mui/material";
import Service from "../../assets/services_services_bg_top.svg";



export default function ServiceHeader() {

    const isXsScreen = useMediaQuery("(max-width:600px)");
    const isLgScreen = useMediaQuery("(min-width:961px)");
    return (
        <Box bgcolor={"#f8f1eb"}>
            <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: isXsScreen ? " 3.5rem 10px" : "15.5rem 0",
          // padding: isXsScreen ? " 3.5rem 10px" : "9.5rem 0",
          backgroundImage: `url(http://localhost:3000/static/media/bg_services.f9e222d4fbfe26c645b7.jpg)`,
          backgroundPosition: "center",
        }}
      >
        <Box
          width={"100%"}
          maxWidth={"1440px"}
          margin={"0 auto"}
          padding={isXsScreen ? "0 1rem" : "0 14rem"}
        >
          <Box
            bgcolor={"#f8f1ec"}
            border={"4px dashed black"}
            borderRadius={"40px"}
            margin={"0 auto"}
            padding={isXsScreen ? "0" : "2rem 8rem"}
            textAlign="center"
          >
            <Typography
              lineHeight={isXsScreen ? "2.6rem" : "5rem"}
              fontSize={isLgScreen ? "78px" : "40px"}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontWeight={500}
              textTransform={"lowercase"}
              padding={3}
            >
           HAPPINESS 100% GUARENTEED
            </Typography>
          </Box>
        </Box>
      </section>
            <img style={{
                marginTop: "-10%",
            }} src={Service} alt="service-header" />
        </Box>
    );
}
