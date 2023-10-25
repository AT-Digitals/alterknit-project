import { Stack, Typography } from "@mui/material";
import Colors from "../../CommonComponent/Colors";

export default function BlackBoxSection() {
    return (
        <Stack width="100%" maxWidth={{ xs: 600, md: 900, lg: 1200, xl: 1300 }} margin="0 auto" paddingX={{ xs: 3, md: 10 }}>
            <Stack
                direction={{ xs: "column", md: "row" }}
                // alignItems="center"
                justifyContent="space-between"
                sx={{ backgroundColor: Colors.BLACK, borderRadius: "20px" }}
                paddingX={6}
                paddingY={8}
            >
                <Typography
                    fontSize="80px"
                    fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                    fontWeight={500}
                    // textTransform="uppercase"
                    color={Colors.WHITE}
                    // maxWidth="470px"
                    lineHeight={1}
                >
                    this will only hurt a little
                </Typography>
                <Typography
                    fontSize="22px"
                    lineHeight={1.2}
                    marginY={3}
                    color={Colors.WHITE}
                    // maxWidth="430px"
                    marginRight={6}
                    fontFamily={`"ProximaNovaMedium", sans-serif`} fontWeight={500}
                >
                    Parting with your darlings is painful, but they are in good hands.
                    We'll give a no-charge thorough examination and report back on how we
                    can help.
                </Typography>
            </Stack>
        </Stack>
    );
}
