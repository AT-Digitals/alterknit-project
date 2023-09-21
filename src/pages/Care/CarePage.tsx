import { Stack } from "@mui/material";
import SubscribePage from "../Home/SubscribePage";
import Care from "./Care";

export default function CarePage() {
    return (
        <Stack>
            <Care />
            <SubscribePage />
        </Stack>
    )
}