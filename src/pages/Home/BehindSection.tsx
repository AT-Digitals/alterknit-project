import { Stack, Typography, Grid, CardMedia } from "@mui/material";

export default function BehindSection() {
    return (
        <Stack margin="0 auto" paddingY={13}>
            <Typography marginBottom={8} fontSize={{ xs: "3rem", sm: "80px" }} fontFamily={`"IndustrialGothicBannerStd", sans-serif`} fontWeight={500} textAlign="center">behind the scenes</Typography>
            <Grid container spacing={5} paddingX={{ xs: 3, sm: 23, md: 15, lg: 12 }}>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <CardMedia
                        component='video'
                        sx={{ borderRadius: "40px" }}
                        image={"https://alterknitnewyork.com/wp-content/themes/alterknit/assets/vid/01.mp4"}
                        autoPlay muted loop
                    /></Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} ><CardMedia
                    component='video'
                    sx={{ borderRadius: "40px" }}
                    image="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/vid/02.mp4"
                    autoPlay muted loop
                /></Grid>

                <Grid item xs={12} sm={12} md={6} lg={3}><CardMedia
                    component='video'
                    sx={{ borderRadius: "40px" }}
                    image="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/vid/03.mp4"
                    autoPlay muted loop
                /></Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}><CardMedia
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