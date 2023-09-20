import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Alterknit from "../assets/alterknit.png";
import AppContainer from "../component/AppContainer";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import routes from "../routes/routes";
import Colors from "../CommonComponent/Colors";
import CustomButton from "../CommonComponent/CustomButton";

const ServiceItem = styled(Link)`
  text-decoration: none;
  position: relative;
  color: graytext;

  &:hover {
    color: black;
  }

  &:hover::before {
    content: "•";
    color: black;
    position: absolute;
    top: 50%;
    left: -25px;
    transform: translateY(-50%);
    font-size: 40px;
  }
`;

export default function AlterknitHeader() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const services = [
    { linkname: "Services", url: routes.HOME },
    { linkname: "Our Story", url: routes.CONTACT_US },
    { linkname: "Portfolio", url: routes.HOME },
    { linkname: "Care", url: routes.HOME },
    { linkname: "Blog", url: routes.BLOG_PAGE },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      bgcolor={"white"}
      width="100%"
      borderBottom={"1px solid black"}
      position="sticky"
      top={0}
      zIndex={100}
    >
      <AppContainer>
        <Stack
          pt={isSmallScreen ? 3 : 4.5}
          pb={4}
          direction={isSmallScreen ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
          spacing={isSmallScreen ? 2 : 5}
        >
          <Box>
            <Link to={""}>
              <img
                width={isSmallScreen ? 120 : 170}
                src={Alterknit}
                alt="alterknit"
              />
            </Link>
          </Box>
          {isSmallScreen ? (
            <Box>
              <IconButton
                aria-controls="mobile-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="mobile-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                style={{
                  top: "60px",
                }}
              >
                {services.map((service, index) => (
                  <MenuItem key={index} onClick={handleMenuClose}>
                    <ServiceItem to={service.url} className="service-item">
                      <Typography variant="subtitle1" key={index}>
                        {service.linkname}
                      </Typography>
                    </ServiceItem>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Stack
              whiteSpace="nowrap"
              alignItems="center"
              spacing={isSmallScreen ? 2 : 4}
              direction={isSmallScreen ? "column" : "row"}
            >
              {services.map((service, index) => (
                <MenuItem key={index} onClick={handleMenuClose}>
                  <ServiceItem to={service.url} className="service-item">
                    <Typography fontSize="21px" key={index}>
                      {service.linkname}
                    </Typography>
                  </ServiceItem>
                </MenuItem>
              ))}
            </Stack>
          )}
          <Stack direction="row" spacing={3} alignItems="center">
            <Link
              to={routes.SCHEDULE_REPAIR}
            // style={{
            //   fontSize: isSmallScreen ? "16px" : "20px",

            //   backgroundColor: "black",
            //   color: "white",
            //   padding: "16px 30px",
            //   borderRadius: 5,
            //   fontWeight: 600
            // }}
            >
              <CustomButton bgColor={Colors.BLACK} sx={{ borderRadius: "5px", fontSize: "20px", fontWeight: 600, padding: "15px 20px", textTransform: "none" }}>Schedule your repair</CustomButton>
            </Link>
            <Link to={routes.SIGN_IN}
            // style={{
            //   fontSize: isSmallScreen ? "16px" : "20px",
            //   textDecoration: "none",
            //   backgroundColor: "black",
            //   color: "white",
            //   padding: "16px 30px",
            //   borderRadius: 5,
            //   fontWeight: 600,
            // }}
            >
              <CustomButton bgColor={Colors.BLACK} sx={{ borderRadius: "5px", fontSize: "20px", fontWeight: 600, padding: "15px 20px", textTransform: "none" }}>Logout</CustomButton>
            </Link>
          </Stack>
        </Stack>
      </AppContainer>
    </Box>
  );
}
