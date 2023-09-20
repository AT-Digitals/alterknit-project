import { Grid } from "@mui/material";
import SignInForm from "./SignInForm";
import background from "../assets/alterknit-image.jpg";
import Header from "../CommonComponent/Header";

export default function SignInPage() {
  return (
    <>
      <Header />
      <Grid
        minHeight="100vh"
        container
        width="100%"
        maxWidth="1200px"
        margin="auto"
      >
        <Grid item xs={12} sm={7}>
          <img
            src={background}
            width={"100%"}
            height={"100%"}
            alt="background"
          ></img>
        </Grid>
        <Grid item xs={12} sm={5}>
          <SignInForm />
        </Grid>
      </Grid>
    </>
  );
}