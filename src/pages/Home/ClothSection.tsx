import { Stack, Grid, Typography, CardMedia } from "@mui/material";
import Colors from "../../CommonComponent/Colors";
import CustomButton from "../../CommonComponent/CustomButton";
import clothImage from "../../assets/before_after.jpg";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

export default function ClothSection() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            paddingY={10}
            paddingX={3}
            margin="0 auto"
            maxWidth={1300}
        >
            <Grid container rowGap={5}>
                <Grid item xs={12} md={12} xl={7} textAlign={{ xs: "center", md: "center", lg: "center", xl: "start" }}>
                    {/* <img src=  /> */}
                    <CardMedia
                        component="img"
                        // height="194"
                        image={clothImage}
                        alt="clothes"
                        sx={{ width: "100%", maxWidth: "716px", margin: "0 auto" }}
                    />
                </Grid>
                <Grid item xs={12} md={12} xl={5} textAlign={{ xs: "center", md: "center", lg: "center", xl: "start" }}>
                    <Typography
                        fontSize={{ xs: "3rem", sm: "80px" }}
                        lineHeight={1}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        fontWeight={500}

                    >
                        don't settle for inferior solutions!
                    </Typography>
                    <Typography
                        fontSize={{ xs: "17.5px", sm: "22px" }}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontWeight={500}
                        lineHeight={1.5}
                        mt={"20px"}
                        mb={4}
                        // maxWidth={420}
                        color="#575656"
                    >
                        Alterknit is the home of invisible repair. We don't patch and we
                        don't darn. We are the ultimate repair service and take care of your
                        clothing as if they are our own.
                    </Typography>
                    <Link to={routes.PORTFOLIO}>
                        <CustomButton
                            bgColor={Colors.BLACK}
                            sx={{
                                borderRadius: "5px",
                                padding: "20px 30px",
                                textTransform: "none",
                                fontSize: "20px",
                                fontWeight: 600,
                                fontFamily: `"ProximaNovaSemibold", sans-serif !important`,
                            }}
                        >
                            Seeing is Believing
                        </CustomButton>
                    </Link>
                </Grid>
            </Grid>
        </Stack>
    );
}
