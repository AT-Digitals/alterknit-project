import { Box, Stack, Typography } from "@mui/material";

import AppContainer from "../../component/AppContainer";

export default function ScheduleReapir() {
  return (
    <Stack direction={"row"}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign={"center"}
        height="100vh"
        sx={{
          backgroundImage: `url('https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/knitting.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "65%",
          //   padding: 2,
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "YourFontFamily", // Replace with your desired font family
            fontSize: "7rem", // Adjust the font size as needed
            lineHeight: "9rem", // Adjust the line height as needed
            textAlign: "center", // Center align the text
          }}
        >
          WELCOME TO REAL REPAIR.
        </Typography>
        <Box
          sx={{
            backgroundImage: `url('https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_syr_left.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionX: "right",
            width: 150,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            content: '""',
            marginRight: "-1px",
            top: 0,
            right: 0,
          }}
        ></Box>
      </Box>
      <Box
        width={"37%"}
        bgcolor={"#df7c6d"}
        color={"black"}
        textAlign={"center"}
        padding={"6rem 4rem 5rem 1rem"}
        position={"relative"}
      >
        <Typography>we make it easy!</Typography>
      </Box>
    </Stack>
  );
}
