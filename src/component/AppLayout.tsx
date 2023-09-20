import { Box, BoxProps } from "@mui/material";

import AlterknitHeader from "../AppHeader/AlterknitHeader";
import AppFooter from "./AppFooter";
import Layout from "../CommonComponent/Layout";
import { Outlet } from "react-router-dom";

export default function AppLayout({ children, ...props }: BoxProps) {
  return (
    <Layout {...props}>
      <AlterknitHeader />
      <Box display="flex" flexDirection="column" width="100%" flexGrow={1}>
        <Box display="flex" flexDirection="column" flexGrow={1}>
          <Box display="flex" flexDirection="column" flexGrow={1}>
            <Outlet />
          </Box>
          <AppFooter />
        </Box>
      </Box>
    </Layout>
  );
}
