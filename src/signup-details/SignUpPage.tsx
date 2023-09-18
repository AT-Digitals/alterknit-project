import { Grid } from "@mui/material";
import background from "../assets/alterknit-image.jpg";
import SignUpForm from "./SignUpForm";

export default function SignUpPage() {
    return (
        <Grid
            minHeight="100vh"
            container
            width="100%"
            maxWidth="1200px"
            margin="auto"
            paddingY={5}
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
                <SignUpForm />
            </Grid>
        </Grid>
    );
}
