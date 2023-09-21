import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import Colors from "../../CommonComponent/Colors";
import CustomButton from "../../CommonComponent/CustomButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import bottomImage from "../../assets/home_services_bg_bottom.svg";
import bugImage from "../../assets/bug_02.png";
import topImage from "../../assets/home_services_bg_top.svg";
import routes from "../../routes/routes";
import { Link } from "react-router-dom";

const listItemStyle = {
  fontSize: "22px",
  marginBottom: "30px",
};

const customMarkerStyle = {
  minWidth: "15px",
  minHeight: "15px",
  backgroundColor: "black",
  borderRadius: "50%",
  marginRight: "25px",
  marginBottom: "30px",
};

export default function ServiceSection() {
  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={topImage} alt="top" />
      <Box>
        <Stack
          bgcolor={"#f8f1eb"}
          direction={"row"}
          justifyContent={"space-around"}
        >
          <Box display={"flex"} position={"relative"} zIndex={1} >
            <Box
              alignItems={"flex-start"}
              flex={1}
              display={"flex"}
              flexDirection={"column"}
              justifyItems={"flex-start"}
              pt={2}
            >
              <Typography
                fontSize="80px"
                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                fontWeight={400}
                textTransform="uppercase"
                lineHeight={1}
              >
                holes? <br /> we fix them
              </Typography>
              <Link to={routes.SERVICES}>
                <CustomButton
                  bgColor={Colors.BLACK}
                  sx={{
                    borderRadius: "5px",
                    padding: "20px 30px",
                    textTransform: "none",
                    fontSize: "18px",
                    marginTop: 2,
                    fontWeight: 600,
                  }}
                >
                  See our services
                </CustomButton>
              </Link>
            </Box>

            <Box flex={1} display={"flex"} flexDirection={"column"}>
              <List
                sx={{
                  listStyleType: "disc",
                  fontSize: "20px",
                }}
              >
                <ListItem style={listItemStyle}>
                  <ListItemIcon style={{ minWidth: 0 }}>
                    <div style={customMarkerStyle}></div>
                  </ListItemIcon>
                  <ListItemText>
                    <Typography fontSize={"20px"}>
                      We work with you to determine the scope of service you
                      need.
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem style={listItemStyle}>
                  <ListItemIcon style={{ minWidth: 0 }}>
                    <div style={customMarkerStyle}></div>
                  </ListItemIcon>
                  <ListItemText>
                    <Typography fontSize={"20px"}>
                      Our unmatched team works diligently to restore your items.
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem style={listItemStyle}>
                  <ListItemIcon style={{ minWidth: 0 }}>
                    <div style={customMarkerStyle}></div>
                  </ListItemIcon>
                  <ListItemText>
                    <Typography fontSize={"20px"}>
                      Your items come back to you repaired and ready to enjoy
                      again.
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>{" "}
            </Box>
          </Box>
        </Stack>
      </Box>

      <img src={bottomImage} alt="bottom" />
      <img
        style={{
          maxWidth: 375,
          position: "absolute",
          left: 0,
          bottom: 0,
          marginBottom: "-13%",
        }}
        src={bugImage}
        alt="bug"
        loading="lazy"
      />
    </section>
  );
}
