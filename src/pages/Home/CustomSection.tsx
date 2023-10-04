import { Stack, Typography } from "@mui/material";
import Colors from "../../CommonComponent/Colors";

export default function CustomSection() {
    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            maxWidth={1300}
            paddingY={10}
            pl={13}
            pr={10}
            margin="0 auto"
        >
            <Stack
                direction="row"
                width={1300}
                spacing={3}
                justifyContent={"space-between"}
                alignItems="center"
            >
                <Typography
                    fontSize="80px"
                    fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                    fontWeight={500}
                    textTransform="lowercase"
                >
                    We reap what we sew
                </Typography>
                <Typography
                    fontSize="80px"
                    fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                    fontWeight={500}
                >
                    custom jobs for all
                </Typography>
            </Stack>
            <Stack
                direction="row"
                width={1300}
                justifyContent={"space-between"}
                alignItems="center"
            >
                <Typography
                    fontSize="22px"
                    mb={3}
                    color={Colors.Text_COLOR}
                    maxWidth={500}
                    fontFamily={`"ProximaNovaMedium", sans-serif`}
                    fontWeight={500}
                >
                    All of the fibers used in your repair are harvested and grafted from
                    your garment itself.
                </Typography>
                <Typography
                    fontSize="22px"
                    mr={3}
                    color={Colors.Text_COLOR}
                    maxWidth={500}
                    fontFamily={`"ProximaNovaMedium", sans-serif`}
                    fontWeight={500}
                >
                    All of our repairs are performed by skilled human beings working with
                    very tiny needles and really big magnifiers.
                </Typography>
            </Stack>
        </Stack>
    );
}
