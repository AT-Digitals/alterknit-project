import {
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  auth,
  facebookProvider,
  googleProvider,
  twitterProvider,
} from "../firebase";

import Colors from "../CommonComponent/Colors";
import CustomButton from "../CommonComponent/CustomButton";
import CustomDialog from "../Popup/Popup";
import CustomTextField from "../CommonComponent/CustomTextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FirebaseError } from "firebase/app";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import Visibility from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";
import routes from "../routes/routes";
import { useState } from "react";

const StyleNav = styled(NavLink)({
  ".active": {
    color: Colors.BLACK,
  },
});

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      setIsDrawerOpen(true);
      return;
    }

    setIsLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log(email + "" + password);
      navigate(routes.HOME);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setError("Couldn't find your alterknit Account");
        setIsDrawerOpen(true);
        setPassword("");
      }
    } finally {
      setIsLoading(false);
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

  const handleGoogleLogin = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      navigate(routes.HOME);
    } catch (error: any) {
      console.error("Google login error:", error);
      if (error.code === "auth/popup-closed-by-user") {
        setError("Google login popup was closed by the user.");
        setIsDrawerOpen(true);
      } else {
        setError("An error occurred during Google login.");
        setIsDrawerOpen(true);
      }
    }
  };

  // const handleFacebookLogin = async () => {
  //   try {
  //     await auth.signInWithPopup(facebookProvider);
  //     navigate(routes.HOME);
  //   } catch (error) {
  //     console.error("Facebook login error:", error);
  //   }
  // };
  // const handleTwitterLogin = async () => {
  //   try {
  //     await auth.signInWithPopup(twitterProvider);
  //     navigate(routes.HOME);
  //   } catch (error) {
  //     console.error("twitter login error:", error);
  //   }
  // };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Stack direction="column" spacing={3} marginTop="100px">
      <Typography variant="h4" textAlign="center">
        Welcome back!
      </Typography>
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
        type={showPassword ? "text" : "password"}
        endIcon={
          <IconButton
            aria-label="toggle password visibility"
            onMouseDown={handleClickShowPassword}
            onMouseUp={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
        sx={{
          color: Colors.BLACK,
          ".css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: `${Colors.BLACK} !important`,
            },
        }}
      />
      {isLoading ? (
        <CircularProgress
          style={{ textAlign: "center", alignItems: "center", color: "black" }}
        />
      ) : null}

      <Stack direction="row" justifyContent="end" alignItems="center">
        <Link
          onClick={handleReset}
          to={""}
          color={Colors.BLACK}
          style={{ textDecoration: "none", color: Colors.BLACK }}
        >
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
        Sign In
      </CustomButton>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Typography variant="body2">New on our platform?</Typography>
        <StyleNav
          to={routes.SIGN_UP}
          style={{ textDecoration: "none", color: Colors.BLACK }}
        >
          Sign Up
        </StyleNav>
      </Stack>

      <Divider>or</Divider>
      {/* <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        <IconButton onClick={handleGoogleLogin}>
          <GoogleIcon style={{ color: "black" }} />
        </IconButton>
        <IconButton onClick={handleFacebookLogin}>
          <FacebookIcon style={{ color: "black" }} />
        </IconButton>
        <IconButton onClick={handleTwitterLogin}>
          <TwitterIcon style={{ color: "black" }} />
        </IconButton>
      </Stack> */}
      {/* <Box display={"flex"} rowGap={4} flex={4}>
        <GoogleIcon style={{ color: "black" }} />
        <Typography> Continue with Google</Typography>
      </Box> */}
      <Button
        onClick={handleGoogleLogin}
        style={{
          border: "1px solid black",
        }}
      >
        <GoogleIcon style={{ color: "black" }} />
        <span
          style={{
            marginLeft: "1rem",
            textTransform: "capitalize",
            color: "black",
          }}
        >
          Continue with Google
        </span>
      </Button>

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
