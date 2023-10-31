import AlterknitHeader from "./AlterknitHeader";
import AppContainer from "../component/AppContainer";
import { Box } from "@mui/material";
import Colors from "../CommonComponent/Colors";
import MobileHeader from "./moblie/MobileHeader";

interface AppHeaderProps {
  setActiveTab: (event: any) => void;
  activeTab: string;
}

export default function AppHeader({ activeTab, setActiveTab }: AppHeaderProps) {
  return (
    <Box
      borderBottom={`1px solid ${Colors.SHADOW}`}
      bgcolor={Colors.WHITE}
      position="sticky"
      top={0}
      zIndex={1}
    >
      <AppContainer direction="row" alignItems="center" spacing={1} padding={0}>
        <MobileHeader setActiveTab={setActiveTab} activeTab={activeTab} />
      </AppContainer>
      <Box bgcolor={Colors.WHITE}>
        <AlterknitHeader setActiveTab={setActiveTab} activeTab={activeTab} />
      </Box>
    </Box>
  );
}
