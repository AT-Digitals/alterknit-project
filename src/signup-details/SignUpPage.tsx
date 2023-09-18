import { Grid } from "@mui/material";
import background from "../assets/alterknit-image.jpg";
import SignUpForm from "./SignUpForm";

export default function SignUpPage() {
    return (
        <Grid minHeight="100vh" container>
            <Grid item xs={12} sm={6} >
                <img src={background} width={"100%"} height={"100%"} alt="background"></img>
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
                <SignUpForm />
            </Grid>
        </Grid>
    );
}
