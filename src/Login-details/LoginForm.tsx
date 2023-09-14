
import {
  Box,
  Checkbox,
  Divider,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Colors from "../CommonComponent/Colors";
import CustomButton from "../CommonComponent/CustomButton";
import CustomDialog from "../Popup/Popup";
import CustomTextField from "../CommonComponent/CustomTextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FirebaseError } from "firebase/app";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { auth } from "../firebase";
import routes from "../routes/routes";
import { useState } from "react";


const StyleNav = styled(NavLink)({
  ".active": {
    color: Colors.BLACK,
  },
});

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log(email + "" + password);
      navigate(routes.ALTERKNIT_HEADER);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setError("Could't find your alterknit Account");
        setIsDrawerOpen(true);
      }
    }
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleReset = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await auth.sendPasswordResetEmail(email);
      console.log("Password reset email sent");
      setError("Password reset email sent");
      setIsDrawerOpen(true);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("Firebase Error:", error.code, error.message);
        setError("Firebase Error: " + error.message);
        setIsDrawerOpen(true);
      } else {
        console.error("Unknown Error:", error);
        setError("Unknown Error");
        setIsDrawerOpen(true);
      }
    }
  };

  return (
    <Stack direction="column" spacing={3}>
      <Box textAlign="left">
        <Typography variant="h3">Welcome to AlterKnit!</Typography>
        <Typography variant="body2">
          Please sign-in to your account and start the adventure
        </Typography>
      </Box>
      <CustomTextField
        value={email}
        label="Username or Email"
        required
        type="email"
        sx={{
          color: Colors.BLACK,
          ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: `${Colors.BLACK} !important`,
            },
        }}
        onChange={setEmail}
      />
      <CustomTextField
        value={password}
        onChange={setPassword}
        label="Password"
        required
        type="password"
        endIcon={<VisibilityIcon />}
        sx={{
          color: Colors.BLACK,
          ".css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: `${Colors.BLACK} !important`,
            },
        }}
      />

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Checkbox />
          <Typography variant="body2">Remember me</Typography>
        </Stack>
        <Link onClick={handleReset} to={""} color={Colors.BLACK}>
          Forgot password?
        </Link>
      </Stack>
      <CustomButton
        variant="contained"
        color={Colors.WHITE}
        bgColor={Colors.BLACK}
        sx={{ borderRadius: "5px" }}
        onClick={handleSubmit}
      >
        Login
      </CustomButton>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Typography variant="body2">New on our platform?</Typography>
        <StyleNav to={routes.REEGISTER_EMAIL}>Create an account</StyleNav>
      </Stack>

      <Divider> OR</Divider>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        <GoogleIcon />
        <FacebookIcon />
        <TwitterIcon />
      </Stack>
      {isDrawerOpen && (
        <CustomDialog
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          message={error || ""}
        />
      )}
    </Stack>
  );
}
