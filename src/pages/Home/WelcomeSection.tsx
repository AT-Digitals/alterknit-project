import { Stack, Typography, Box, styled, Button } from "@mui/material";
import Colors from "../../CommonComponent/Colors";
import bug from "../../assets/bug_01.png";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

const StyledButton = styled(Button)({
    position: "absolute",
    right: "34%",
    transform: `translate(${18}%, ${128}%)`,
    borderRadius: "50%",
    width: 190,
    height: 190,
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
});

export default function WelcomeSection() {
    return (
        <Stack
            direction="row"
            maxWidth={1300}
            justifyContent="space-between"
            alignItems="center"
            margin="0 auto"
            paddingBottom={4}
        >
            <Stack direction="column">
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: "80px",
                        fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
                    }}
                >
                    welcome to real repair
                </Typography>
                <Typography
                    fontSize="22px"
                    color={Colors.Text_COLOR}
                    lineHeight={1.3}
                    fontFamily={`"ProximaNovaMedium", sans-serif`}
                    fontWeight={500}
                >
                    We save the clothing that you, your tailor, <br /> or dry cleaner
                    can't.
                </Typography>
            </Stack>
            <Box>
                <Link to={routes.SCHEDULE_REPAIR}>
                    <StyledButton
                        sx={{
                            fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
                            fontWeight: 500,
                            fontSize: "32px",
                            textTransform: "lowercase",
                        }}
                    >
                        Schedule a repair
                    </StyledButton>
                </Link>
                <img src={bug} alt="bug-01" width="100%" height="100%" />
            </Box>
        </Stack>
    );
}
