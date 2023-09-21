import { Stack } from "@mui/material";
import SubscribePage from "../Home/SubscribePage";
import FaqPage from "./FaqPage";
import ServiceHeader from "./ServiceHeader";
import CardPage from "./CardPage";
import BoxCreation from "./BoxCreation";

export default function ServicePage() {
    return (
        <Stack>
            <ServiceHeader />
            <CardPage />
            <BoxCreation />
            <FaqPage />
            <SubscribePage />
        </Stack>
    )
}