import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import AppContainer from "./AppContainer";
import Colors from "../CommonComponent/Colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import routes from "../routes/routes";
import styled from "@emotion/styled";
import Facebook from "../assets/fb.svg";

const StyleLink = styled(Link)({
  fontSize: "18px",
  color: "#787878",
  // marginLeft: isSmScreen ? "1rem" : "2rem",
  // marginRight: isSmScreen ? "1rem" : "2rem",
  textUnderlineOffset: "5px",
  ":hover": {
    color: Colors.WHITE,
  },
});
const StyleLink1 = styled(Link)({
  textDecoration: "none",
  fontSize: "18px",
  color: "#B2B2B2",
  ":hover": {
    color: Colors.WHITE,
  },
});

export default function AppFooter() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const services = [
    { name: "Home", url: routes.ROOT },
    { name: "Services", url: routes.ROOT },
    { name: "Our Story", url: routes.ROOT },
    { name: "Portfolio", url: routes.ROOT },
    { name: "Care", url: routes.CARE },
    { name: "Blog", url: routes.BLOG_PAGE },
    { name: "Schedule Repair", url: routes.SCHEDULE_REPAIR },
    { name: "Partners", url: routes.ROOT },
    { name: "Contact Us", url: routes.CONTACT_US },
  ];

  return (
    <Box bgcolor={Colors.BLACK}>
      <Box borderBottom="1px solid #272727">
        <AppContainer color={Colors.WHITE}>
          <Stack
            px={5}
            py={7}
            direction={isSmScreen ? "column" : "row"}
            justifyContent={isSmScreen ? "center" : "space-between"}
            alignItems="center"
          >
            <Stack>
              <a href={routes.ROOT}>
                <img
                  src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/logo_white.svg"
                  alt="alterknit logo"
                  loading="lazy"
                  width={200}
                  height={40}
                />
              </a>
            </Stack>
            <Stack
              spacing={3}
              alignItems={isSmScreen ? "center" : "end"}
              textAlign={isSmScreen ? "center" : "end"}
            >
              <Stack spacing={3} direction={isSmScreen ? "column" : "row"}>
                {services.map((service, index) => (
                  <StyleLink1 key={index} to={service.url}>
                    {service.name}
                  </StyleLink1>
                ))}
              </Stack>
              <Stack direction="row" spacing={3}>
                <StyleLink1 to="mailto:orders@alterknitnewyork.com">
                  orders@alterknitnewyork.com
                </StyleLink1>
                <StyleLink1 to="tel:+12124736363">212 473 6363</StyleLink1>
              </Stack>
            </Stack>
          </Stack>
        </AppContainer>
      </Box>
      <Box p={isSmScreen ? "2rem" : "4rem"} maxWidth={1300} margin="0 auto">
        {/* <AppContainer> */}
        <Stack direction="row" spacing={35} px={5} alignItems="center" justifyContent="flex-end" >
          <Stack
            spacing={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="row"
          >
            <Typography
              fontSize={isSmScreen ? "16px" : "18px"}
              color={"#787878"}
              textAlign="center"
            >
              Copyright
            </Typography>
            <Typography
              fontSize={isSmScreen ? "16px" : "18px"}
              color={"#787878"}
              textAlign="center"
            >
              AlterKnit New York 2023
            </Typography>
            <StyleLink to={routes.PRIVACY}>Privacy Policy</StyleLink>
            <StyleLink to={routes.TERM}>Terms and Conditions</StyleLink>
          </Stack>
          <Box display={"flex"} gap={"2rem"}>
            <StyleLink1 to="https://www.facebook.com/AlterKnitNY/" target="_blank"> <img src={Facebook} alt="icon" width={10} height={20} /></StyleLink1>
            <StyleLink1 to="https://www.instagram.com/alterknitnewyork/" target="_blank"><InstagramIcon /></StyleLink1>
          </Box>
        </Stack>
        {/* </AppContainer> */}
      </Box>
    </Box>
  );
}
