import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import AppContainer from "./AppContainer";
import Colors from "../CommonComponent/Colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import routes from "../routes/routes";

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
      <Box borderBottom="1px solid white">
        <AppContainer color={Colors.WHITE}>
          <Stack
            p={5}
            direction={isSmScreen ? "column" : "row"}
            justifyContent={isSmScreen ? "center" : "space-between"}
            alignItems="center"
          >
            <Stack>
              <a href="https://alterknitnewyork.com">
                {" "}
                <img
                  src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/logo_white.svg"
                  alt="alterknit logo"
                  loading="lazy"
                />{" "}
              </a>
            </Stack>
            <Stack
              spacing={3}
              alignItems={isSmScreen ? "center" : "end"}
              textAlign={isSmScreen ? "center" : "end"}
            >
              <Stack spacing={3} direction={isSmScreen ? "column" : "row"}>
                {services.map((service, index) => (
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    key={index}
                    to={service.url}
                    className="service-item"
                  >
                    <Typography
                      flexWrap={"wrap"}
                      fontSize={"16px"}
                      variant="h5"
                      key={index}
                      color={"#B2B2B2"}
                    >
                      {service.name}
                    </Typography>
                  </Link>
                ))}
              </Stack>
              <Stack direction="row" spacing={3}>
                <Typography
                  color={"#B2B2B2"}
                  fontSize={"16px"}
                  alignItems="center"
                >
                  orders@alterknitnewyork.com
                </Typography>
                <Typography
                  fontSize={"16px"}
                  alignItems="center"
                  color={"#B2B2B2"}
                  whiteSpace={"nowrap"}
                >
                  212 473 6363
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </AppContainer>
      </Box>
      <Box p={isSmScreen ? "2rem" : "4rem"}>
        <AppContainer>
          <Box display="flex" alignItems="center">
            <Box display={"flex"} marginLeft={"auto"} gap={"1rem"}>
              <Typography
                fontSize={isSmScreen ? "16px" : "20px"}
                color={"#B2B2B2"}
                textAlign="center"
              >
                Copyright AlterKnit New York 2023
              </Typography>
              <Link
                style={{
                  fontSize: isSmScreen ? "16px" : "16px",
                  color: "#B2B2B2",
                  marginLeft: isSmScreen ? "1rem" : "2rem",
                  marginRight: isSmScreen ? "1rem" : "2rem",
                }}
                to={routes.PRIVACY}
              >
                Privacy Policy
              </Link>
              <Link
                style={{
                  fontSize: isSmScreen ? "16px" : "16px",
                  color: "#B2B2B2",
                }}
                to={routes.TERM}
              >
                Terms and Conditions
              </Link>
            </Box>
            <Box display={"flex"} marginLeft={"auto"} gap={"2rem"}>
              <FacebookIcon style={{ color: "#B2B2B2" }} />
              <InstagramIcon style={{ color: "#B2B2B2" }} />
            </Box>
          </Box>
        </AppContainer>
      </Box>
    </Box>
  );
}
