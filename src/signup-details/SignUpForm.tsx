import { Box, CircularProgress, Stack, Typography, styled } from "@mui/material";

import Colors from "../CommonComponent/Colors";
import CustomButton from "../CommonComponent/CustomButton";
import CustomDialog from "../Popup/Popup";
import CustomTextField from "../CommonComponent/CustomTextField";
import { auth } from "../firebase";
import routes from "../routes/routes";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import alterknitImage from "../assets/alterknit.png";

export default function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await auth.createUserWithEmailAndPassword(email, password);
      console.log(email + "" + password);
      setError("Your account details have been saved.");
    } catch (error) {
      console.log(error);
      setError("Can't create user");
    } finally {
      setIsLoading(false);
      setIsDrawerOpen(true);
    }
  };
  const StyleNav = styled(NavLink)({
    ".active": {
      color: Colors.BLACK,
    },
  });

  const handlePopupClose = () => {
    setIsDrawerOpen(false);
    if (error === "Your account details have been saved.") {
      navigate(routes.SIGN_IN);
    }
  };
  return (
    <Box marginTop="100px">
      <Stack direction="column" spacing={3}>
        <Typography variant="h4" textAlign="center">
          Create your account
        </Typography>
        <CustomTextField
          label="Username"
          required={false}
          value={userName}
          onChange={setUserName}
          sx={{
            color: Colors.BLACK,
            ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: `${Colors.BLACK} !important`,
            },
          }}
        />
        <CustomTextField
          label="Email ID"
          required={false}
          value={email}
          onChange={setEmail}
          sx={{
            color: Colors.BLACK,
            ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: `${Colors.BLACK} !important`,
            },
          }}
        />
        <CustomTextField
          label="Password"
          required={false}
          value={password}
          onChange={setPassword}
          sx={{
            color: Colors.BLACK,
            ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: `${Colors.BLACK} !important`,
            },
          }}
        />
        <CustomTextField
          label="Confirm Password"
          required={false}
          value={confirmPassword}
          onChange={setConfirmPassword}
          sx={{
            color: Colors.BLACK,
            ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: `${Colors.BLACK} !important`,
            },
          }}
        />

        <CustomButton
          variant="contained"
          onClick={handleSubmit}
          color={Colors.WHITE}
          bgColor={Colors.BLACK}
          sx={{
            borderRadius: "5px",
            ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline:hover":
              { backgroundColor: "#df7c6d" },
          }}
        >
          Sign Up
        </CustomButton>
      </Stack>
      {isLoading ? (
        <CircularProgress color="success" />
      ) : (
        <CustomDialog
          isOpen={isDrawerOpen}
          onClose={handlePopupClose}
          message={error || ""}
        />
      )}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        marginY={3}
      >
        <Typography variant="body2">Already have an account? </Typography>
        <StyleNav to={routes.SIGN_IN} style={{ textDecoration: "none", color: Colors.BLACK }}>Sign In</StyleNav>
      </Stack>
    </Box>
  );
}