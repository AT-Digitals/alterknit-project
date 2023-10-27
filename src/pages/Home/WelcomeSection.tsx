import { Stack, Typography, Box, styled, Button, CardMedia } from "@mui/material";
import Colors from "../../CommonComponent/Colors";
import bug from "../../assets/bug_01.png";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

const StyledButton = styled(Button)(({ theme }) => ({
    position: "absolute",
    // right: "34%",

    borderRadius: "50%",
    // width: 190,
    // height: 190,
    fontWeight: 400,
    textTransform: "uppercase",
    padding: "30px",
    lineHeight: 1,
    color: Colors.WHITE,
    border: `6px solid ${Colors.WHITE} !important`,
    backgroundColor: Colors.BLACK,
    ":hover": {
        backgroundColor: Colors.LINK,
    },
    [theme.breakpoints.up('xs')]: {
        width: 152,
        height: 152,
        top: "62%",
        fontSize: "30px",
        left: "45px",
        transform: `translate(${-28}%, ${150}%)`,
    },
    [theme.breakpoints.up('sm')]: {
        width: 190,
        height: 190,
        top: "25%",
        fontSize: "30px",
        transform: `translate(${50}%, ${150}%)`,
    },
    [theme.breakpoints.up('md')]: {
        width: 190,
        height: 190,
        top: "20%",
        fontSize: "35px",
        transform: `translate(${101}%, ${150}%)`,
    },
    [theme.breakpoints.up('lg')]: {
        width: 190,
        height: 190,
        top: "35%",
        fontSize: "30px",
        transform: `translate(${195}%, ${150}%)`,
    },
    [theme.breakpoints.up('xl')]: {
        width: 190,
        height: 190,
        right: "34%",
        fontSize: "35px",
        transform: `translate(${415}%, ${60}%)`,
    },
}));

export default function WelcomeSection() {
    return (
        <Stack
            direction={{ lg: "column", xl: "row" }}
            maxWidth={1300}
            justifyContent="space-between"
            alignItems="center"
            margin="0 auto"
            paddingBottom={4}
        >
            <Stack direction="column" paddingTop={{ xs: 6, lg: 6, xl: 0 }} paddingX={{ xs: "20px", md: 0 }}>
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: "80px",
                        fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
                        paddingTop: { lg: "20px", xl: 0 }
                    }}
                    lineHeight={{ xs: "6rem" }}
                    paddingY={{ xs: "10px", md: 0 }}
                    textAlign={{ xs: "center", md: "center", xl: "start" }}
                >
                    welcome to real repair
                </Typography>
                <Typography
                    fontSize={{ xs: "17px", sm: "22px" }}
                    color={Colors.Text_COLOR}
                    lineHeight={1.3}
                    fontFamily={`"ProximaNovaMedium", sans-serif`}
                    fontWeight={500}
                    textAlign={{ xs: "center", lg: "center", xl: "start" }}
                >
                    We save the clothing that you, your tailor, <br /> or dry cleaner
                    can't.
                </Typography>
            </Stack>
            <Box>
                {/* <Link to={routes.SCHEDULE_REPAIR}> */}
                <StyledButton
                    sx={{
                        fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
                        fontWeight: 500,
                        fontSize: "32px",
                        textTransform: "lowercase",
                    }}
                    onClick={() => { window.location.href = '/schedule-repair'; }}
                >
                    Schedule a repair
                </StyledButton>
                {/* </Link> */}
                {/* <img src={bug} alt="bug-01" width="100%" height="100%" /> */}
                <CardMedia
                    component="img"
                    // height="194"
                    image={bug}
                    alt="bug-01"
                />
            </Box>
        </Stack>
    );
}
