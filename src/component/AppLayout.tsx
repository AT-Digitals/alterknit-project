import { Box, BoxProps } from "@mui/material";
import AppFooter from "./AppFooter";
import Layout from "../CommonComponent/Layout";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import routes from "../routes/routes";
import AppHeader from "../AppHeader/AppHeader";
import Colors from "../CommonComponent/Colors";

export default function AppLayout({ children, ...props }: BoxProps) {
  const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab') || routes.HOME);

  const handleSelectMenu = (menu: string) => {
    console.log("menu", menu);
    setActiveTab(menu);
    localStorage.setItem('activeTab', menu);
  };
  console.log("activeTab", activeTab);
  return (
    <Layout {...props}>
      <AppHeader setActiveTab={handleSelectMenu} activeTab={activeTab} />
      <Box display="flex" flexDirection="column" width="100%" flexGrow={1}>
        <Box display="flex" flexDirection="column" flexGrow={1}>
          <Box sx={{
            backgroundColor: Colors.WHITE,
          }} display="flex" flexDirection="column" flexGrow={1}>

            <Outlet />
          </Box>
          <AppFooter activeTab={activeTab} setActiveTab={handleSelectMenu} />
        </Box>
      </Box>
    </Layout>
  );
}
