import { Box, BoxProps } from "@mui/material";

import AlterknitHeader from "../AppHeader/AlterknitHeader";
import AppFooter from "./AppFooter";
import Layout from "../CommonComponent/Layout";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function AppLayout({ children, ...props }: BoxProps) {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <Layout {...props}>
      <AlterknitHeader setActiveTab={setActiveTab} />
      <Box display="flex" flexDirection="column" width="100%" flexGrow={1}>
        <Box display="flex" flexDirection="column" flexGrow={1}>
          <Box display="flex" flexDirection="column" flexGrow={1}>
            <Outlet />
          </Box>
          <AppFooter activeTab={activeTab} />
        </Box>
      </Box>
    </Layout>
  );
}
