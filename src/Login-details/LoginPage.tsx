import { Grid } from "@mui/material";
import LoginForm from "./LoginForm";
import LoginSection from "./LoginSection";

export default function LoginPage() {
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
        <LoginForm />
      </Grid>
    </Grid>
  );
}
