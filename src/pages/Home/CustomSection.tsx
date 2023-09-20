import { Stack, Box, Typography, Grid } from "@mui/material";
import Colors from "../../CommonComponent/Colors";

export default function CustomSection() {
    return (
        <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-between"
            maxWidth={1300}
            margin="0 auto"
            paddingX={10}
            paddingY={10}
        >
            <Grid container columnSpacing={10}>
                <Grid item xs={6}>
                    <Typography fontSize="80px" fontFamily={`"IndustrialGothicBannerStd", sans-serif`} fontWeight={400} textTransform="uppercase">
                        We reap what we sew
                    </Typography>
                    <Typography fontSize="22px" marginY={3} color={Colors.Text_COLOR}>
                        All of the fibers used in your repair are harvested and grafted from
                        your garment itself.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography fontSize="80px" fontFamily={`"IndustrialGothicBannerStd", sans-serif`} fontWeight={400} textTransform="uppercase">
                        custom jobs for all
                    </Typography>
                    <Typography fontSize="22px" marginY={3} color={Colors.Text_COLOR}>
                        All of our repairs are performed by skilled human beings working
                        with very tiny needles and really big magnifiers.
                    </Typography>
                </Grid>
            </Grid>
        </Stack>
    )
}