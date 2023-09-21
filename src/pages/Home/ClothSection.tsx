import { Stack, Grid, Typography } from "@mui/material";
import Colors from "../../CommonComponent/Colors";
import CustomButton from "../../CommonComponent/CustomButton";
import clothImage from "../../assets/before_after.jpg";

export default function ClothSection() {
    return (
        <Stack
            direction="row"
            maxWidth={1300}
            justifyContent="space-between"
            alignItems="center"
            margin="0 auto"
            padding={10}
        >
            <Grid container>
                <Grid item xs={7}>
                    <img src={clothImage} alt="clothes" />
                </Grid>
                <Grid item xs={5}>
                    <Typography fontSize="80px" fontFamily={`"IndustrialGothicBannerStd", sans-serif`} fontWeight={400} textTransform="uppercase">
                        don't settle for inferior solutions!
                    </Typography>
                    <Typography fontSize="1.3rem" lineHeight={1.5} marginY={3}>
                        Alterknit is the home of invisible repair. We don't patch and we
                        don't darn. We are the ultimate repair service and take care of
                        your clothing as if they are our own.
                    </Typography>
                    <CustomButton
                        bgColor={Colors.BLACK}
                        sx={{
                            borderRadius: "5px",
                            padding: "20px 30px",
                            textTransform: "none",
                            fontSize: "20px",
                            fontWeight: "bold"
                        }}
                    >
                        Seeing is Believing
                    </CustomButton>
                </Grid>
            </Grid>
        </Stack>
    )
}