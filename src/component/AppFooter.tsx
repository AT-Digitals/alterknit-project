import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import AppContainer from "./AppContainer";
import Colors from "../CommonComponent/Colors";
import { Link } from "react-router-dom";
import routes from "../routes/routes";

export default function AppFooter() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const services = [
    { linkname: "Home", url: routes.HOME },
    { linkname: "Services", url: routes.ROOT },
    { linkname: "Our Story", url: routes.CONTACT_US },
    { linkname: "Portfolio", url: routes.HOME },
    { linkname: "Care", url: routes.HOME },
    { linkname: "Blog", url: routes.BLOG_PAGE },
    { linkname: "Schedule Repair", url: routes.SCHEDULE_REPAIR },
    { linkname: "Partners", url: routes.HOME },
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
                      {service.linkname}
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
          <Stack
            spacing={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="row"
          >
            <Typography
              fontSize={isSmScreen ? "16px" : "20px"}
              color={"#B2B2B2"}
              textAlign="center"
            >
              Copyright AlterKnit New York 2023
            </Typography>
            <Link
              style={{
                fontSize: isSmScreen ? "16px" : "20px",
                color: "#B2B2B2",
                marginLeft: isSmScreen ? "1rem" : "2rem",
                marginRight: isSmScreen ? "1rem" : "2rem",
              }}
              to={""}
            >
              Privacy Policy
            </Link>
            <Link
              style={{
                fontSize: isSmScreen ? "16px" : "20px",
                color: "#B2B2B2",
              }}
              to={""}
            >
              Terms and Conditions
            </Link>
          </Stack>
        </AppContainer>
      </Box>
    </Box>
  );
}
