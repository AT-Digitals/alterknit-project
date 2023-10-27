import { Stack, Typography } from "@mui/material";
import Colors from "../../CommonComponent/Colors";

export default function BlackBoxSection() {
    return (
        <Stack paddingX={{ xs: 3, sm: 6, md: 6, lg: 13 }}>
            <Stack
                direction={{ xs: "column", lg: "row" }}
                alignItems="center"
                justifyContent="space-between"
                sx={{ backgroundColor: Colors.BLACK, borderRadius: "20px" }}
                paddingX={6}
                paddingY={8}
            >
                <Typography
                    fontSize={{ xs: "3rem", sm: "80px" }}
                    fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                    fontWeight={500}
                    color={Colors.WHITE}
                    maxWidth="470px"
                    lineHeight={1}
                    textAlign={{ xs: "center", md: "center", lg: "start" }}
                >
                    this will only hurt a little
                </Typography>
                <Typography
                    fontSize={{ xs: "17.5px", sm: "22px" }}
                    lineHeight={1.2}
                    marginBottom={{ lg: 3 }}
                    marginTop={{ xs: 3, sm: 3, md: 3, lg: 0 }}
                    color={Colors.WHITE}
                    maxWidth="430px"
                    marginRight={{ xs: 0, lg: 6 }}
                    fontFamily={`"ProximaNovaMedium", sans-serif`} fontWeight={500}
                    textAlign={{ xs: "center", md: "center", lg: "start" }}
                >
                    Parting with your darlings is painful, but they are in good hands.
                    We'll give a no-charge thorough examination and report back on how we
                    can help.
                </Typography>
            </Stack>
        </Stack>
    );
}
