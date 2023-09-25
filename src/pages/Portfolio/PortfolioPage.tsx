import { Stack } from "@mui/material";
import SubscribePage from "../Home/SubscribePage";
import PorfolioHeader from "./PortfolioHeader";

export default function PortfolioPage() {
    return (
        <Stack>
            <PorfolioHeader />
            <SubscribePage />
        </Stack>
    )
}