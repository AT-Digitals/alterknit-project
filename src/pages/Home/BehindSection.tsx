import { Stack, Typography, Grid, CardMedia } from "@mui/material";

export default function BehindSection() {
    return (
        <Stack maxWidth={1300} margin="0 auto" paddingY={13}>
            <Typography marginBottom={8} fontSize="80px" fontFamily={`"IndustrialGothicBannerStd", sans-serif`} fontWeight={400} textTransform="uppercase" textAlign="center">behind the scenes</Typography>
            <Grid container spacing={5}>
                <Grid item xs={3}>
                    <CardMedia
                        component='video'
                        sx={{ borderRadius: "40px" }}
                        image={"https://alterknitnewyork.com/wp-content/themes/alterknit/assets/vid/01.mp4"}
                        autoPlay muted loop
                    /></Grid>
                <Grid item xs={3}><CardMedia
                    component='video'
                    sx={{ borderRadius: "40px" }}
                    image="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/vid/02.mp4"
                    autoPlay muted loop
                /></Grid>

                <Grid item xs={3}><CardMedia
                    component='video'
                    sx={{ borderRadius: "40px" }}
                    image="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/vid/03.mp4"
                    autoPlay muted loop
                /></Grid>
                <Grid item xs={3}><CardMedia
                    component='video'
                    sx={{ borderRadius: "40px" }}
                    image="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/vid/04.mp4"
                    autoPlay muted loop
                />
                </Grid>
            </Grid>
        </Stack>
    )
}