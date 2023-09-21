import { Stack } from "@mui/material";
import SubscribePage from "../Home/SubscribePage";
import FaqPage from "./FaqPage";

export default function ServicePage() {
    return (
        <Stack>
            <FaqPage />
            <SubscribePage />
        </Stack>
    )
}