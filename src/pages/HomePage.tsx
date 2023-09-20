import { Box, Stack, Typography } from "@mui/material";
import bug from "../assets/bug_01.png";
import Colors from "../CommonComponent/Colors";
import CustomButton from "../CommonComponent/CustomButton";
import styled from "@emotion/styled";

const StyledButton = styled(CustomButton)({
    position: "absolute",
    top: "55%",
    right: "30%",
    borderRadius: "50%",
    width: 180,
    height: 180,
    fontSize: "20px",
    fontWeight: 500,
    textTransform: "uppercase",
    padding: "30px",
    color: Colors.WHITE,
});

export default function HomePage() {
    return (
        <Stack maxWidth={1300} margin="auto">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="column" spacing={2}>
                    <Typography
                        variant="h3"
                        sx={{ textTransform: "uppercase", fontWeight: 600 }}
                    >
                        welcome to real repair
                    </Typography>
                    <Typography fontSize="20px">
                        We save the clothing that you, your tailor, or dry cleaner can't.
                    </Typography>
                </Stack>
                <Box>
                    <StyledButton
                        bgColor={Colors.BLACK}
                    >
                        Schedule a repair
                    </StyledButton>
                    <img src={bug} alt="bug-01" width="100%" height="100%" />
                </Box>
            </Stack>
        </Stack>
    );
}
