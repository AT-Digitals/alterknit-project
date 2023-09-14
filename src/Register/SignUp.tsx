import { Box, Stack, Typography } from "@mui/material";
import Colors from "../CommonComponent/Colors";
import CustomButton from "../CommonComponent/CustomButton";
import CustomTextField from "../CommonComponent/CustomTextField";
import { useState } from "react";

export default function SignUp() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmit = (e: any) => {
        e.preventDefault();
        const data = {
            usename: userName,
            password: password,
            email: email,
            confirmpassword: confirmPassword,
        }
        console.log(data);
    }


    return (
        <Box>
            <Stack direction="column" spacing={3}>
                <Stack direction="column" spacing={3} >
                    <img src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/logo.svg" alt="logo" width="60%" height="60%" />
                    <Typography variant="h4" textAlign="left">Sign Up</Typography>
                </Stack>
                <CustomTextField label="Username" required={false} value={userName} onChange={setUserName} sx={{
                    color: Colors.BLACK,
                    ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${Colors.BLACK} !important`
                    }
                }} />
                <CustomTextField label="Email ID" required={false} value={email} onChange={setEmail} sx={{
                    color: Colors.BLACK,
                    ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${Colors.BLACK} !important`
                    }
                }} />
                <CustomTextField label="Password" required={false} value={password} onChange={setPassword} sx={{
                    color: Colors.BLACK,
                    ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${Colors.BLACK} !important`
                    }
                }} />
                <CustomTextField label="Confirm Password" required={false} value={confirmPassword} onChange={setConfirmPassword} sx={{
                    color: Colors.BLACK,
                    ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${Colors.BLACK} !important`
                    }
                }} />

                <CustomButton variant="contained" onClick={onSubmit} color={Colors.WHITE} bgColor={Colors.BLACK} sx={{ borderRadius: "5px", ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline:hover": { backgroundColor: "#df7c6d", } }} >Sign Up</CustomButton>
            </Stack>
        </Box>
    )
}