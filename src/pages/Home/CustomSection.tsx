import { Grid, Stack, Typography } from "@mui/material";
import Colors from "../../CommonComponent/Colors";

export default function CustomSection() {
    return (
        <Stack
            direction="column"
            justifyContent="space-between"
            maxWidth={1300}
            paddingY={10}
            paddingX={{ xs: 3, md: 15 }}
            alignItems="center"

        // margin="0 auto"
        >
            <Grid container columnSpacing={15} rowGap={{ xs: 5 }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6} textAlign={{ sm: "center", md: "center", xl: "start" }} >
                    <Stack
                        direction="column"
                        alignItems={{ xs: "center", sm: "center", md: "center", xl: "start" }}
                        spacing={{ xs: 2, sm: 0 }}
                    >
                        <Typography
                            fontSize={{ xs: "3rem", sm: "80px" }}
                            fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                            fontWeight={500}
                            textTransform="lowercase"
                            lineHeight={{ xs: "3.5rem", sm: 1.5 }}
                            textAlign={{ xs: "center" }}

                        >
                            We reap what we sew
                        </Typography>
                        <Typography
                            fontSize={{ xs: "17.5px", sm: "22px" }}
                            mb={3}
                            color={Colors.Text_COLOR}
                            maxWidth={{ sm: 470, xl: 550 }}
                            fontFamily={`"ProximaNovaMedium", sans-serif`}
                            fontWeight={500}
                            textAlign={{ xs: "center", lg: "center", xl: "start" }}
                        >
                            All of the fibers used in your repair are harvested and grafted from
                            your garment itself.
                        </Typography>

                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6} textAlign={{ sm: "center", md: "center", xl: "start" }}>
                    <Stack
                        direction="column"
                        ml={{ xs: 0, xl: 7 }}
                        alignItems={{ xs: "center", sm: "center", md: "center", xl: "none" }}
                        spacing={{ xs: 2, sm: 0 }}

                    >
                        <Typography
                            fontSize={{ xs: "3rem", sm: "80px" }}
                            fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                            fontWeight={500}
                            lineHeight={{ xs: "3.5rem", sm: 1.5 }}
                            textAlign={{ xs: "center" }}
                        >
                            custom jobs for all
                        </Typography>
                        <Typography
                            fontSize={{ xs: "17.5px", sm: "22px" }}

                            mr={3}
                            color={Colors.Text_COLOR}
                            maxWidth={{ sm: 470, xl: 550 }}
                            fontFamily={`"ProximaNovaMedium", sans-serif`}
                            fontWeight={500}
                            textAlign={{ xs: "center", lg: "center", xl: "start" }}
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
