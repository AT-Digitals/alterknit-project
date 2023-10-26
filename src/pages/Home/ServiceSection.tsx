import {
  Box,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import Colors from "../../CommonComponent/Colors";
import CustomButton from "../../CommonComponent/CustomButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import bottomImage from "../../assets/home_services_bg_bottom.svg";
import bugImage from "../../assets/bug_02.png";
import topImage from "../../assets/home_services_bg_top.svg";
import routes from "../../routes/routes";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const listItemStyle = {
  fontSize: "22px",
  // marginBottom: "30px",
};

const customMarkerStyle = {
  minWidth: "15px",
  minHeight: "15px",
  backgroundColor: "black",
  borderRadius: "50%",
  marginRight: "25px",
  marginBottom: "30px",
};

const customMarkerStyle2 = {
  borderTop: "1px dashed black",
  paddingTop: "20px",
}



export default function ServiceSection() {
  const isXsScreen = useMediaQuery("(max-width:1200px)");
  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={topImage} alt="top" />
      <Box bgcolor={Colors.HOME_BACKGROUND}>
        <Stack
          bgcolor={Colors.HOME_BACKGROUND}
          direction={{ xs: "column", xl: "row" }}

          justifyContent="space-around"
          paddingY={8}
          paddingX={{ xs: 3, lg: 15 }}
          alignItems={{ xs: "center", xl: "" }}
        >
          <Box
            alignItems={{ xs: "center", lg: "flex-start" }}
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            justifyItems={"flex-start"}
            pt={2}
            // maxWidth={350}
            zIndex={1}
            mb={{ xs: 4, sm: 4, md: 4 }}
            paddingX={{ xl: "13%" }}
          >
            {isXsScreen ? <Typography
              fontSize={{ xs: "3rem", sm: "80px" }}
              fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
              fontWeight={500}
              lineHeight={1}
            >
              holes? we fix them
            </Typography>
              : <Typography
                fontSize={{ xs: "3rem", sm: "80px" }}
                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                fontWeight={500}
                lineHeight={1}
              >
                holes?  <br /> we fix them
              </Typography>}
            <Link to={routes.SERVICES}>
              <CustomButton
                bgColor={Colors.BLACK}
                sx={{
                  borderRadius: "5px",
                  padding: "20px 30px",
                  textTransform: "none",
                  fontSize: "20px",
                  marginTop: 2,
                  fontWeight: 600,
                  fontFamily: `"ProximaNovaSemibold", sans-serif !important`,
                }}
              >
                See our services
              </CustomButton>
            </Link>
          </Box>

          <Box
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            maxWidth={450}
          >
            <List
              sx={{
                listStyleType: "disc",
                fontSize: "20px",
              }}
            >
              <ListItem style={listItemStyle}>
                {isXsScreen ?
                  <>
                    <ListItemText style={customMarkerStyle2}>
                      <Typography
                        lineHeight={1.3}
                        fontSize={{ xs: "17.5px", sm: "22px" }}
                        fontWeight={500}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        textAlign={{ xs: "center", md: "center" }}
                      >
                        We work with you to determine the scope of service you need.
                      </Typography>
                    </ListItemText> </> : <> <ListItemIcon style={{ minWidth: 0 }}>
                      <div style={customMarkerStyle}></div>
                    </ListItemIcon>
                    <ListItemText >
                      <Typography
                        lineHeight={1.3}
                        fontSize={"22px"}
                        fontWeight={500}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}

                      >
                        We work with you to determine the scope of service you need.
                      </Typography>
                    </ListItemText> </>}
              </ListItem>

              <ListItem style={listItemStyle}>
                {isXsScreen ?
                  <>
                    <ListItemText style={customMarkerStyle2}>
                      <Typography
                        lineHeight={1.3}
                        fontSize={{ xs: "17.5px", sm: "22px" }}
                        fontWeight={500}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        textAlign={{ xs: "center", md: "center" }}
                      >
                        Our unmatched team works diligently to restore your items.
                      </Typography>
                    </ListItemText> </> : <><ListItemIcon style={{ minWidth: 0 }}>
                      <div style={customMarkerStyle}></div>
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        lineHeight={1.3}
                        fontSize={"22px"}
                        fontWeight={500}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                      >
                        Our unmatched team works dilightly to restore your items.
                      </Typography>
                    </ListItemText></>}
              </ListItem>

              <ListItem style={listItemStyle}>
                {isXsScreen ? <>
                  <ListItemText style={customMarkerStyle2}>
                    <Typography
                      lineHeight={1.3}
                      fontSize={{ xs: "17.5px", sm: "22px" }}
                      fontWeight={500}
                      fontFamily={`"ProximaNovaMedium", sans-serif`}
                      textAlign={{ xs: "center", md: "center" }}
                    >
                      Your items come back to you repaired and ready to enjoy
                      again.
                    </Typography>
                  </ListItemText></> : <>
                  <ListItemIcon style={{ minWidth: 0 }}>
                    <div style={customMarkerStyle}></div>
                  </ListItemIcon>
                  <ListItemText >
                    <Typography
                      lineHeight={1.3}
                      fontSize={"22px"}
                      fontWeight={500}
                      fontFamily={`"ProximaNovaMedium", sans-serif`}
                    >
                      Your items come back to you repaired and ready to enjoy
                      again.
                    </Typography>
                  </ListItemText></>}
              </ListItem>
            </List>{" "}
          </Box>
        </Stack>
      </Box>
      <img src={bottomImage} alt="bottom" />
      <CardMedia
        component="img"
        image={bugImage}
        alt="Paella dish"
        sx={{
          maxWidth: 375,
          position: "absolute",
          left: 0,
          bottom: 0,
          marginBottom: "-13%",
          display: { xs: "none", sm: "none", md: "none", lg: "none", xl: "flex" }
        }}
      />
    </section>
  );
}
