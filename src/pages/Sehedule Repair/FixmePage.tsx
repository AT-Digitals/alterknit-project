import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AppContainer from "../../component/AppContainer";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import Colors from "../../CommonComponent/Colors";

const StyleCard = styled(Card)({
  maxWidth: 590,
  borderRadius: "50px",
  height: "100%",
  ":hover": {
    border: `5px solid ${Colors.LINK}`
  }
})

export default function FixmePage() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box marginY={10}>
      <Stack mb={5} spacing={5} alignItems={"center"}>
        <Typography fontWeight={400} fontSize="5.5rem" variant={isSmScreen ? "h4" : "h3"} fontFamily={"IndustrialGothicBannerStd, sans-serif"}>
          WHICH OPTION WORKS BEST FOR YOU?{" "}
        </Typography>
        <AppContainer>
          <Stack
            display={"flex"}
            justifyContent={"space-around"}
            direction={"row"}
            spacing={4}
          >
            <Grid container spacing={3}>
              <Grid pt={0} item xs={12} sm={6}>
                <Link to={routes.SHIPIN} style={{ textDecoration: "none" }}>
                  <StyleCard>
                    <Stack
                      gap={2}
                      style={{ background: "#f8f1eb" }}
                      p={3}
                      direction={"column"}
                      alignItems={"center"}
                    >
                      <Typography
                        fontWeight="bold"
                        variant={isSmScreen ? "h4" : "h3"}
                        fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                        fontSize="3rem"
                      >
                        SHIP IN
                      </Typography>
                      <CardMedia
                        sx={{ width: 80 }}
                        component="img"
                        src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/icon_package.png"
                        alt="package"
                      />
                    </Stack>
                    <CardContent
                      sx={{
                        backgroundColor: "#df7c6d",
                        padding: 5,
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      className="foot"
                    >
                      <Typography
                        variant="body2"
                        style={{ textAlign: "center", maxWidth: 350 }}
                      >
                        Available from all 50 states. You will receive a pre-paid
                        shipping label via email and an order summary to print out
                        and include with your item(s). If you are international,
                        please contact us.
                      </Typography>
                    </CardContent>
                  </StyleCard>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link to={routes.DOORTODOOR} style={{ textDecoration: "none" }}>
                  <StyleCard>
                    <Stack
                      gap={2}
                      style={{ background: "#f8f1eb" }}
                      p={3}
                      direction={"column"}
                      alignItems={"center"}
                    >
                      <Typography
                        fontWeight="bold"
                        variant={isSmScreen ? "h4" : "h3"}
                        fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                        fontSize="3rem"
                      >
                        DOOR TO DOOR{" "}
                      </Typography>
                      <CardMedia
                        sx={{ width: 80 }}
                        component="img"
                        src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/icon_door.png"
                        alt="package"
                      />
                    </Stack>
                    <CardContent
                      sx={{
                        backgroundColor: "#df7c6d",
                        padding: 5,
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      className="foot"
                    >
                      <Typography
                        variant="body2"
                        style={{ textAlign: "center", maxWidth: 300 }}
                      >
                        Same day pick up service is available in <b>SELECT</b> zip
                        codes within the 5 boroughs of NYC from{" "}
                        <b>24HR RESIDENTIAL</b> doorman buildings.
                      </Typography>
                    </CardContent>
                  </StyleCard>
                </Link>
              </Grid>
            </Grid>
          </Stack>
        </AppContainer>
      </Stack>
    </Box>
  );
}
