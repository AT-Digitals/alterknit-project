import { Grid } from "@mui/material";
import LoginSection from "./LoginSection";
import SignInForm from "./SignInForm";

export default function SignInPage() {
  return (
    <Grid minHeight="100vh" container>
      <Grid
        item
        xs={12}
        sm={6}
        maxHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <LoginSection />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        maxHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <SignInForm />
      </Grid>
    </Grid>
  );
}
