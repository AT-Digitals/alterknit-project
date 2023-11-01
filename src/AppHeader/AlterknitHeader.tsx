import {
  Box,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Alterknit from "../assets/alterknit.png";
import AppContainer from "../component/AppContainer";
import Colors from "../CommonComponent/Colors";
import CustomButton from "../CommonComponent/CustomButton";
import { auth } from "../firebase";
import routes from "../routes/routes";

// const ServiceItem = styled(Link)`
//   text-decoration: none;
//   position: relative;
//   color: graytext;

//   &:hover {
//     color: black;
//   }

//   &:hover::before {
//     content: "•";
//     color: black;
//     position: absolute;
//     top: 50%;
//     left: -25px;
//     transform: translateY(-50%);
//     font-size: 40px;
//   }
// `;

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
  activeTab: string;
}

export default function AlterknitHeader({
  setActiveTab,
  activeTab,
}: headerProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const services = [
    { linkname: "Services", url: routes.SERVICES },
    { linkname: "Our Story", url: routes.OUR_STORY },
    { linkname: "Portfolio", url: routes.PORTFOLIO },
    { linkname: "Care", url: routes.CARE },
    { linkname: "Blog", url: routes.BLOG_PAGE },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [isSelected, setIsSelected] = useState(Colors.BLACK);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (menu: string) => {
    localStorage.setItem(activeTab, menu);
    setActiveTab(menu);
  };

  // React.useEffect(() => {
  //   const storedMenu = localStorage.getItem(activeTab);
  //   if (storedMenu && storedMenu !== activeTab) {
  //     setActiveTab(storedMenu);
  //   }
  // }, [setActiveTab, activeTab]);

  const handleClick = () => {
    if (activeTab === routes.SCHEDULE_REPAIR) {
      setIsSelected(Colors.LINK);
    }
    // window.location.href = '/schedule-repair';
  };
  // const handleReloadClick = () => {
  //   window.location.reload();
  //   window.scrollTo(0, 0);
  // };

  const navigate = useNavigate();

  function clearCaches() {
    if ("caches" in window) {
      caches.keys().then(function (cacheNames) {
        cacheNames.forEach(function (cacheName) {
          caches.delete(cacheName);
          console.log(`${cacheName} cache cleared`);
        });
      });
    }
  }

  const handleLogout = async () => {
    localStorage.setItem("activeTab", activeTab);
    try {
      clearCaches();
      localStorage.removeItem("userToken");
      await auth.signOut();
      navigate(routes.ROOT);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Box
      bgcolor={"white"}
      width="100%"
      borderBottom={"1px solid black"}
      position="sticky"
      top={0}
      zIndex={1}
    >
      <AppContainer display={{ xs: "none", xl: "flex" }}>
        <Stack
          pt={isSmallScreen ? 3 : 4.5}
          pb={4}
          direction={isSmallScreen ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
          spacing={isSmallScreen ? 2 : 5}
        >
          <Box>
            <Link to={routes.HOME} onClick={() => handleMenuClick(routes.HOME)}>
              <img
                width={isSmallScreen ? 120 : 170}
                src={Alterknit}
                alt="alterknit"
              />
            </Link>
          </Box>
          {/* {isSmallScreen ? (
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
                <DragHandleIcon />
              </IconButton> */}
          {/* <Menu
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
                  </MenuItem> */}
          {/* //     <Stack
                  //     direction={isSmallScreen ? "column" : "row"}
                  //     spacing={3}
                  //     alignItems="center"
                  //   >
                  //     <Link to={routes.SCHEDULE_REPAIR} onClick={() => handleMenuClick(routes.SCHEDULE_REPAIR)}>
                  //       <StyledButton
                  //         bgColor={activeTab === routes.SCHEDULE_REPAIR ? Colors.LINK : Colors.BLACK}
                  //         onClick={handleClick}
                  //       >
                  //         Schedule your repair
                  //       </StyledButton>
                  //     </Link>
                  //     {/* <Link to={routes.ROOT}> */}
          {/* //     <StyledButton onClick={handleLogout} bgColor={Colors.BLACK}>
                  //       Logout
                  //     </StyledButton>
                  //     {/* </Link> */}
          {/* //   </Stack>
                  // </Stack>
                ))}
              </Menu>
            </Box>
          ) : (  */}
          <Stack
            whiteSpace="nowrap"
            alignItems="center"
            spacing={isSmallScreen ? 2 : 6}
            direction={isSmallScreen ? "column" : "row"}
          >
            {services.map((service, index) => (
              <HeaderLink
                href={service.url}
                onClick={() => handleMenuClick(service.url)}
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
          {/* )} */}
          <Stack
            direction={isSmallScreen ? "column" : "row"}
            spacing={3}
            alignItems="center"
          >
            <Link
              to={routes.SCHEDULE_REPAIR}
              onClick={() => handleMenuClick(routes.SCHEDULE_REPAIR)}
            >
              <StyledButton
                bgColor={
                  activeTab === routes.SCHEDULE_REPAIR
                    ? Colors.LINK
                    : Colors.BLACK
                }
                onClick={handleClick}
              >
                Schedule your repair
              </StyledButton>
            </Link>
            {/* <Link to={routes.ROOT}> */}
            <StyledButton onClick={handleLogout} bgColor={Colors.BLACK}>
              Logout
            </StyledButton>
            {/* </Link> */}
          </Stack>
        </Stack>
      </AppContainer>
    </Box>
  );
}
