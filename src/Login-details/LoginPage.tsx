import { Grid } from "@mui/material";
import LoginForm from "./LoginForm";
import LoginSection from "./LoginSection";

export default function LoginPage() {
    return (
        <Grid minHeight="100vh" container>
            <Grid item xs={12} sm={6} maxHeight="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center">
                {/* <img src={background} width={"100%"} height={"100%"} alt="background image"></img> */}
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
