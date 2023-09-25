import {
  Box,
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
import Colors from "../CommonComponent/Colors";
import CustomButton from "../CommonComponent/CustomButton";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import routes from "../routes/routes";

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

interface headerProps {
  setActiveTab: (event: any) => void;
}

export default function AlterknitHeader({ setActiveTab }: headerProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const services = [
    { linkname: "Services", url: routes.SERVICES },
    { linkname: "Our Story", url: routes.OUR_STORY },
    { linkname: "Portfolio", url: routes.PORTFOLIO },
    { linkname: "Care", url: routes.CARE },
    { linkname: "Blog", url: routes.BLOG_PAGE },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (_event: any, newValue: any) => {
    setActiveTab(newValue);
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
                <MenuItem key={index} onClick={handleMenuClose} onChange={(e) => handleChange(service.linkname, e)}>
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
            <Link to={routes.SCHEDULE_REPAIR}>
              <CustomButton
                bgColor={Colors.BLACK}
                sx={{
                  borderRadius: "5px",
                  fontSize: "20px",
                  fontWeight: 600,
                  padding: "15px 20px",
                  textTransform: "none",
                }}
              >
                Schedule your repair
              </CustomButton>
            </Link>
            <Link to={routes.SIGN_IN}>
              <CustomButton
                bgColor={Colors.BLACK}
                sx={{
                  borderRadius: "5px",
                  fontSize: "20px",
                  fontWeight: 600,
                  padding: "15px 20px",
                  textTransform: "none",
                }}
              >
                Logout
              </CustomButton>
            </Link>
          </Stack>
        </Stack>
      </AppContainer>
    </Box>
  );
}
