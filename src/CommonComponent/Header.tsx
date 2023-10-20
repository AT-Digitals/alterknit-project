import { Stack } from "@mui/material";
import alterknitImage from "../assets/alterknit.png";

export default function Header() {
    return (
        <Stack direction="row" margin="auto" spacing={3} justifyContent="center" alignItems="center" width="100%" maxWidth="1200px" paddingY={3}>
            <img
                src={alterknitImage}
                alt="logo"
                width="15%"
                height="15%"
            />
        </Stack>
    )
}