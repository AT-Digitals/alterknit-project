import { Box } from "@mui/material";
import AppContainer from "../component/AppContainer";
import AlterknitHeader from "./AlterknitHeader";
import MobileHeader from "./moblie/MobileHeader";
import Colors from "../CommonComponent/Colors";
import { Link } from "@mui/icons-material";
import routes from "../routes/routes";


interface AppHeaderProps {
    setActiveTab: (event: any) => void;
    activeTab: string;
}

export default function AppHeader({
    activeTab,
    setActiveTab
}: AppHeaderProps) {
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
