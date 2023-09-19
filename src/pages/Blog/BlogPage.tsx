import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AppContainer from "../../component/AppContainer";

export default function BlogPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppContainer>
      <Stack justifyContent={"flex-start"}>
        <Box p={2} mt={10} mb={5}>
          <Typography variant="h4">
            Threads Of Change: How Clothes Mending Impacts Sustainability
          </Typography>
          <img
            style={{
              maxWidth: isSmallScreen ? "300px" : "500px",
              height: isSmallScreen ? 200 : 277,
            }}
            src="https://alterknitnewyork.com/wp-content/uploads/2023/08/bug.png"
            alt="Bug"
            decoding="async"
            sizes="(max-width: 640px) 100vw, 640px"
          ></img>
          <Typography maxWidth={1200} fontSize={"18px"}>
            Mending clothes might seem like a distant memory in a world driven
            by fast fashion and disposable clothing. However, beneath the
            surface of this throwaway culture lies a profound opportunity for
            change. The art of clothes mending, often considered old-fashioned,
            is experiencing a revival, and its impact on sustainability is
            remarkable and underappreciated. Mending is…
          </Typography>
        </Box>
        <Button
          style={{
            padding: "20px",
            background: "#df7c6c",
            alignItems: "flex-start",
            maxWidth: 200,
            color: "white",
            marginBottom: 50,
            marginLeft: 10,
          }}
        >
          Continue reading
        </Button>
      </Stack>
    </AppContainer>
  );
}
