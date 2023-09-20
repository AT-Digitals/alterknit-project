import { Stack, Typography, Box, styled } from "@mui/material";
import Colors from "../../CommonComponent/Colors";
import CustomButton from "../../CommonComponent/CustomButton";
import bug from "../../assets/bug_01.png";

const StyledButton = styled(CustomButton)({
    position: "absolute",
    top: "50%",
    right: "32%",
    borderRadius: "50%",
    width: 180,
    height: 180,
    fontSize: "20px",
    fontWeight: 400,
    textTransform: "uppercase",
    padding: "30px",
    color: Colors.WHITE,
    border: `6px solid ${Colors.WHITE} !important`,
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
            <Stack direction="column" >
                <Typography
                    sx={{
                        textTransform: "uppercase",
                        fontWeight: 400,
                        fontSize: "80px",
                        fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
                    }}
                >
                    welcome to real repair
                </Typography>
                <Typography fontSize="22px" color={Colors.Text_COLOR}>
                    We save the clothing that you, your tailor, <br /> or dry cleaner
                    can't.
                </Typography>
            </Stack>
            <Box>
                <StyledButton sx={{ fontFamily: `"IndustrialGothicBannerStd", sans-serif !important`, }} bgColor={Colors.BLACK}>Schedule a repair</StyledButton>
                <img src={bug} alt="bug-01" width="100%" height="100%" />
            </Box>
        </Stack>
    );
}
