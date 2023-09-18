import { Box, CircularProgress, Stack, Typography } from "@mui/material";

import Colors from "../CommonComponent/Colors";
import CustomButton from "../CommonComponent/CustomButton";
import CustomDialog from "../Popup/Popup";
import CustomTextField from "../CommonComponent/CustomTextField";
import { auth } from "../firebase";
import routes from "../routes/routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import alterknitImage from "../assets/alterknit.png";

export default function SignUp() {
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

  const handlePopupClose = () => {
    setIsDrawerOpen(false);
    if (error === "Your account details have been saved.") {
      navigate(routes.SIGN_IN);
    }
  };
  return (
    <Box>
      <Stack direction="column" spacing={3}>
        <Stack direction="column" spacing={3}>
          <img
            src={alterknitImage}
            alt="logo"
            width="60%"
            height="60%"
          />
          <Typography variant="h4" textAlign="left">
            Sign Up
          </Typography>
        </Stack>
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
    </Box>
  );
}
