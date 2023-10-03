import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import AppContainer from "./AppContainer";
import Colors from "../CommonComponent/Colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import routes from "../routes/routes";
import styled from "@emotion/styled";

interface footerProps {
  activeTab: string;
}

const StyleLink = styled(Link)({
  color: "#787878",

  textUnderlineOffset: "5px",
  textDecoration: "none",
  "&:hover": {
    color: Colors.WHITE,
  },
});
const StyleLink1 = styled(Link)({
  color: "#787878",

  textUnderlineOffset: "5px",
  "&:hover": {
    color: Colors.WHITE,
  },
});

export default function AppFooter({ activeTab }: footerProps) {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const services = [
    { name: "Home", url: routes.ROOT },
    { name: "Services", url: routes.SERVICES },
    { name: "Our Story", url: routes.OUR_STORY },
    { name: "Portfolio", url: routes.PORTFOLIO },
    { name: "Care", url: routes.CARE },
    { name: "Blog", url: routes.BLOG_PAGE },
    { name: "Schedule Repair", url: routes.SCHEDULE_REPAIR },
    { name: "Partners", url: routes.PARTNER },
    { name: "Contact us", url: routes.CONTACT_US },
  ];

  return (
    <Box bgcolor={Colors.BLACK}>
      <AppContainer>
        <Box borderBottom="1px solid #272727">
          <Stack
            px={5}
            py={7}
            direction={isSmScreen ? "column" : "row"}
            justifyContent={isSmScreen ? "center" : "space-between"}
            alignItems="center"
          >
            <a href={routes.ROOT}>
              <img
                src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/logo_white.svg"
                alt="alterknit logo"
                loading="lazy"
                width={200}
                height={40}
              />
            </a>
            <Stack
              padding={"4rem 0 3rem 0"}
              spacing={3}
              alignItems={isSmScreen ? "center" : "end"}
              textAlign={isSmScreen ? "center" : "end"}
            >
              <ul
                style={{
                  flexWrap: "wrap",
                  justifyContent: "center",
                  display: "flex",
                  gap: "1rem",
                  padding: 0,
                  marginTop: "20px",
                }}
              >
                {services.map((service, index) => (
                  <li
                    key={index}
                    style={{
                      listStyleType: "none",
                    }}
                  >
                    <StyleLink to={service.url}>{service.name}</StyleLink>
                  </li>
                ))}
              </ul>

              <Stack direction="row" spacing={3}>
                <ul
                  style={{
                    flexWrap: "wrap",
                    justifyContent: "center",
                    display: "flex",
                    gap: "1rem",
                    padding: 0,
                    marginTop: "20px",
                  }}
                >
                  <li
                    style={{
                      listStyleType: "none",
                    }}
                  >
                    <StyleLink to="mailto:orders@alterknitnewyork.com">
                      {" "}
                      orders@alterknitnewyork.com
                    </StyleLink>
                  </li>
                  <li
                    style={{
                      listStyleType: "none",
                    }}
                  >
                    <StyleLink to="tel:+12124736363"> 212 473 6363</StyleLink>
                  </li>
                </ul>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </AppContainer>
      <Box p={isSmScreen ? "2rem" : "4rem"} maxWidth={1300} margin="0 auto">
        <Stack
          direction="row"
          spacing={35}
          px={5}
          alignItems="center"
          justifyContent="flex-end"
        >
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
            <StyleLink1 to={routes.PRIVACY}>Privacy Policy</StyleLink1>
            <StyleLink1 to={routes.TERM}>Terms and Conditions</StyleLink1>
          </Stack>
          <Box display={"flex"} gap={"2rem"}>
            <StyleLink1
              to="https://www.facebook.com/AlterKnitNY/"
              target="_blank"
            >
              {" "}
              <FacebookIcon />
            </StyleLink1>
            <StyleLink1
              to="https://www.instagram.com/alterknitnewyork/"
              target="_blank"
            >
              <InstagramIcon />
            </StyleLink1>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
