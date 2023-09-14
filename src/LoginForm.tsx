import { Box, Button, Checkbox, Divider, Grid, Stack, Typography, styled } from "@mui/material";
import CustomTextField from "./CustomTextField";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, NavLink } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Colors from "./Colors";
import CustomButton from "./CustomButton";

const StyleNav = styled(NavLink)({
    ".active": {
        color: Colors.BLACK,
    }
})


export default function LoginForm() {
    return (
        <Stack direction="column" spacing={3}>
            <Box textAlign="left">
                <Typography variant="h3" >Welcome to AlterKnit!</Typography>
                <Typography variant="body2" >Please sign-in to your account and start the adventure</Typography>
            </Box>
            <CustomTextField label="Username or Email" required={false} sx={{
                color: Colors.BLACK,
                ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: `${Colors.BLACK} !important`
                }
            }} />
            <CustomTextField label="Password" required={false} endIcon={<VisibilityIcon />} sx={{
                color: Colors.BLACK,
                ".css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: `${Colors.BLACK} !important`
                }
            }} />

            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" spacing={0.5} alignItems="center">
                    <Checkbox />
                    <Typography variant="body2">Remember me</Typography>
                </Stack>
                <Link to={""} color={Colors.BLACK}>Forgot password?</Link>
            </Stack>
            <CustomButton variant="contained" color={Colors.WHITE} bgColor={Colors.BLACK} sx={{ borderRadius: "5px" }} >Login</CustomButton>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                <Typography variant="body2">New on our platform?</Typography>
                <StyleNav to={""} >Create an account</StyleNav>
            </Stack>

            <Divider > OR</Divider>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={3}>
                <GoogleIcon />
                <FacebookIcon />
                <TwitterIcon />
            </Stack>
        </Stack>
    )
}