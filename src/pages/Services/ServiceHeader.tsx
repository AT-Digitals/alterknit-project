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
          backgroundImage: `url(https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_services.jpg)`,
          backgroundPosition: "center",
        }}
      >
        <Box
          width={"100%"}
          maxWidth={"1050px"}
          margin={"0 auto"}
          padding={isXsScreen ? "0 1rem" : "0 5rem"}
        >
          <Box
            bgcolor={"#f8f1ec"}
            border={"4px dashed black"}
            borderRadius={isXsScreen ? "20px" : "40px"}
            margin={"0 auto"}
            padding={isXsScreen ? "0" : "2rem 8rem"}
            textAlign="center"
            sx={{
              borderWidth: isXsScreen ? "3px" : "5px"
            }}
          >
            <Typography
              lineHeight={isXsScreen ? "1" : "1"}
              fontSize={isXsScreen ? "50px" : "78px"}
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
