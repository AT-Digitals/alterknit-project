import { Stack } from "@mui/material";
import SubscribePage from "../Home/SubscribePage";
import FaqPage from "./FaqPage";
import ServiceHeader from "./ServiceHeader";
import CardPage from "./CardPage";
import BoxCreation from "./BoxCreation";
import HelpPage from "./HelpPage";

export default function ServicePage() {
    return (
        <Stack>
            <ServiceHeader />
            <HelpPage />
            <CardPage />
            <BoxCreation />
            <FaqPage />
            <SubscribePage />
        </Stack>
    )
}