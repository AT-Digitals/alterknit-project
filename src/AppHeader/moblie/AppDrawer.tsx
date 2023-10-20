import { Drawer, List, styled, Typography, Stack } from "@mui/material";

import Colors from "../../CommonComponent/Colors";
import routes from "../../routes/routes";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../CommonComponent/CustomButton";
import React, { useState } from 'react';
import { auth } from "../../firebase";

const HeaderLink = styled("a")`
  text-decoration: none;
  position: relative;
  color: graytext;

  &:hover {
    color: black;
  }
 
  
`;

const StyledDrawer = styled(Drawer)({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "300px",
    boxSizing: "border-box",
    backgroundColor: Colors.WHITE,
    padding: "20px",
    "& .MuiListItemButton-root:hover": {
      backgroundColor: Colors.WHITE,
      color: Colors.WHITE,
    },
  },
});

const StyledButton = styled(CustomButton)({
  borderRadius: "5px",
  fontSize: "22px",
  fontWeight: 600,
  padding: "16px 30px",
  textTransform: "none",
  whiteSpace: "nowrap",
  fontFamily: `"ProximaNovaSemibold", sans-serif !important`,
});


interface AppDrawerProps {
  open: boolean;
  onClose?: () => void;
  setActiveTab: (event: any) => void;
  activeTab: string;
}


export default function AppDrawer({ open, onClose, setActiveTab, activeTab }: AppDrawerProps) {

  const services = [
    { linkname: "Services", url: routes.SERVICES },
    { linkname: "Our Story", url: routes.OUR_STORY },
    { linkname: "Portfolio", url: routes.PORTFOLIO },
    { linkname: "Care", url: routes.CARE },
    { linkname: "Blog", url: routes.BLOG_PAGE },
  ];
  const [isSelected, setIsSelected] = useState(Colors.BLACK);

  const handleMenuClick = (menu: string) => {
    localStorage.setItem(activeTab, menu);
    setActiveTab(menu);
  };


  const handleClick = () => {
    if (activeTab === routes.SCHEDULE_REPAIR) {
      setIsSelected(Colors.LINK);
    }
    // window.location.href = '/schedule-repair';
  };

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
    localStorage.setItem('activeTab', activeTab);
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
    <StyledDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
    // onEscapeKeyDown={onClose}
    >
      {/* <DrawerHeader> */}
      {/* <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton> */}
      {/* </DrawerHeader> */}
      {/* <Divider /> */}
      <List>
        {services.map((service, index) => (
          <HeaderLink
            href={service.url}
            onClick={() => handleMenuClick(service.url)}
            key={index}
            className="service-item"
          >
            <Typography
              fontSize="22px"
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              fontWeight={500}
              padding={2}
              color={Colors.BLACK}
            >
              {service.linkname}
            </Typography>
          </HeaderLink>
        ))}
      </List>
      <Stack
        direction={"column"}
        spacing={3}
        alignItems="start"
      >
        <HeaderLink
          href={routes.SCHEDULE_REPAIR}
          onClick={() => handleMenuClick(routes.SCHEDULE_REPAIR)}
          className="service-item"
        >
          <Typography
            fontSize="22px"
            fontFamily={`"ProximaNovaMedium", sans-serif`}
            fontWeight={500}
            padding={2}
            color={Colors.BLACK}
          >
            Schedule your repair
          </Typography>
        </HeaderLink>
        {/* <Link to={routes.SCHEDULE_REPAIR} onClick={() => handleMenuClick(routes.SCHEDULE_REPAIR)}>
          {/* <StyledButton
            bgColor={activeTab === routes.SCHEDULE_REPAIR ? Colors.LINK : Colors.BLACK}
            onClick={handleClick}
          > */}
        {/* Schedule your repair
          </StyledButton>
        </Link> */}
        <HeaderLink
          // href={routes.SCHEDULE_REPAIR}
          onClick={handleLogout}
          className="service-item"
          style={{ marginTop: 0 }}
        >
          <Typography
            fontSize="22px"
            fontFamily={`"ProximaNovaMedium", sans-serif`}
            fontWeight={500}
            padding={2}
            color={Colors.BLACK}
          >
            Logout
          </Typography>
        </HeaderLink>

        {/* <StyledButton onClick={handleLogout} bgColor={Colors.BLACK}>
          Logout
        </StyledButton> */}

      </Stack>
    </StyledDrawer>
  );
}
