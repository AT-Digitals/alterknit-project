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
import React, { useState } from "react";

import Alterknit from "../assets/alterknit.png";
import AppContainer from "../component/AppContainer";
import Colors from "../CommonComponent/Colors";
import CustomButton from "../CommonComponent/CustomButton";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
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

const HeaderLink = styled("a")`
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

const StyledButton = styled(CustomButton)({
  borderRadius: "5px",
  fontSize: "22px",
  fontWeight: 600,
  padding: "16px 30px",
  textTransform: "none",
  whiteSpace: "nowrap",
  fontFamily: `"ProximaNovaSemibold", sans-serif !important`,
});

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

  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  const handleReloadClick = () => {
    window.location.reload();
    window.scrollTo(0, 0);
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
              spacing={isSmallScreen ? 2 : 6}
              direction={isSmallScreen ? "column" : "row"}
            >
              {services.map((service, index) => (
                <HeaderLink
                  href={service.url}
                  onClick={handleReloadClick}
                  key={index}
                  className="service-item"
                >
                  <Typography
                    fontSize="22px"
                    fontFamily={`"ProximaNovaRegular", sans-serif`}
                    fontWeight={400}
                  >
                    {service.linkname}
                  </Typography>
                </HeaderLink>
              ))}
            </Stack>
          )}
          <Stack
            direction={isSmallScreen ? "column" : "row"}
            spacing={3}
            alignItems="center"
          >
            <Link to={routes.SCHEDULE_REPAIR}>
              <StyledButton
                bgColor={Colors.BLACK}
                onClick={handleClick}
                style={{
                  backgroundColor: isSelected ? Colors.LINK : Colors.BLACK,
                }}
              >
                Schedule your repair
              </StyledButton>
            </Link>
            <Link to={routes.SIGN_IN}>
              <StyledButton bgColor={Colors.BLACK}>Logout</StyledButton>
            </Link>
          </Stack>
        </Stack>
      </AppContainer>
    </Box>
  );
}
