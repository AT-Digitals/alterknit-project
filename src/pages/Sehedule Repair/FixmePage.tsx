import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AppContainer from "../../component/AppContainer";
import Colors from "../../CommonComponent/Colors";
import routes from "../../routes/routes";
import { useEffect } from "react";
import CustomButton from "../../CommonComponent/CustomButton";

const StyleCard = styled(Card)({
  maxWidth: 590,
  borderRadius: "50px",
  height: "100%",
  ":hover": {
    border: `5px solid ${Colors.LINK}`,
  },
});

interface shipinprops {
  nextStep: (value: any) => void;
  secondNextStep: (value: any) => void;
}

export default function FixmePage({ nextStep, secondNextStep }: shipinprops) {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box marginY={10}>
      <Stack mb={5} spacing={5} alignItems={"center"}>
        <Typography
          fontWeight={500}
          fontSize="80px"
          textTransform={"lowercase"}
          variant={isSmScreen ? "h4" : "h3"}
          fontFamily={"IndustrialGothicBannerStd, sans-serif"}
        >
          WHICH OPTION WORKS BEST FOR YOU?{" "}
        </Typography>
        <AppContainer>
          <Stack
            display={"flex"}
            justifyContent={"space-around"}
            direction={"row"}
            spacing={4}
          >
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Grid pt={0} item xs={12} sm={6}>
                <Link onClick={nextStep} sx={{ textDecoration: "none" }}>
                  {/* <Link to={routes.SHIPIN} style={{ textDecoration: "none" }}> */}
                  <StyleCard>
                    <Stack
                      gap={2}
                      style={{ background: "#f8f1eb" }}
                      p={3}
                      direction={"column"}
                      alignItems={"center"}
                    >
                      <Typography
                        fontWeight={500}
                        variant={isSmScreen ? "h4" : "h3"}
                        fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                        fontSize="3rem"
                        textTransform={"lowercase"}
                      >
                        SHIP IN
                      </Typography>
                      <CardMedia
                        sx={{ width: 70 }}
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
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontWeight={500}
                      >
                        Available from all 50 states. You will receive a
                        pre-paid shipping label via email and an order summary
                        to print out and include with your item(s). If you are
                        international, please contact us.
                      </Typography>
                    </CardContent>
                  </StyleCard>
                </Link>
                {/* </Link> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link onClick={secondNextStep} sx={{ textDecoration: "none" }}>
                  {/* <Link to={routes.DOORTODOOR} style={{ textDecoration: "none" }}> */}
                  <StyleCard>
                    <Stack
                      gap={2}
                      style={{ background: "#f8f1eb" }}
                      p={3}
                      direction={"column"}
                      alignItems={"center"}
                    >
                      <Typography
                        fontWeight={500}
                        variant={isSmScreen ? "h4" : "h3"}
                        fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                        fontSize="3rem"
                        textTransform={"lowercase"}
                      >
                        DOOR TO DOOR{" "}
                      </Typography>
                      <CardMedia
                        sx={{ width: 70 }}
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
                        style={{ textAlign: "center", maxWidth: 350 }}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontWeight={500}
                      >
                        Same day pick up service is available in <b>SELECT</b>{" "}
                        zip codes within the 5 boroughs of NYC from{" "}
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
