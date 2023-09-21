import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AppContainer from "../../component/AppContainer";

export default function FixmePage() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box mt={10}>
      <Stack mb={5} spacing={5} alignItems={"center"}>
        <Typography fontWeight="bold" variant={isSmScreen ? "h4" : "h3"}>
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
                <Card
                  sx={{
                    maxWidth: 590,
                    borderRadius: "50px",
                    height: "100%",
                  }}
                >
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
                    >
                      SHIP IN
                    </Typography>
                    <CardMedia
                      sx={{ width: 50 }}
                      component="img"
                      src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/icon_package.png"
                      alt="package"
                    />
                  </Stack>
                  <CardContent
                    sx={{
                      backgroundColor: "#df7c6d",
                      padding: 5,
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
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    maxWidth: 590,
                    borderRadius: "50px",
                    height: "100%",
                  }}
                >
                  {" "}
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
                    >
                      DOOR TO DOOR{" "}
                    </Typography>
                    <CardMedia
                      sx={{ width: 50 }}
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
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </AppContainer>
      </Stack>
    </Box>
  );
}
