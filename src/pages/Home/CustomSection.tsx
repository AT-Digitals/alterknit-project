import { Grid, Stack, Typography } from "@mui/material";
import Colors from "../../CommonComponent/Colors";

export default function CustomSection() {
    return (
        <Stack
            direction="column"
            justifyContent="space-between"
            maxWidth={1300}
            paddingY={10}
            paddingX={15}
            alignItems="center"

        // margin="0 auto"
        >
            <Grid container columnSpacing={15} alignItems="center">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6} >
                    <Stack
                        direction="column"
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

                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6} >
                    <Stack
                        direction="column"
                        ml={7}
                        alignItems={{ lg: "center", xl: "none" }}
                    >
                        <Typography
                            fontSize="80px"
                            fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                            fontWeight={500}
                        >
                            custom jobs for all
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
                </Grid>
            </Grid>
        </Stack>
    );
}
