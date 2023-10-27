import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import AppContainer from "../../component/AppContainer";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import styled from "@emotion/styled";
import { useEffect } from "react";

const StyledButton = styled.button`
  padding: 10px 20px;
  background: #df7c6c;
  max-width: 200px;
  color: white;
  margin-bottom: 50px;
  text-transform: none;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  height: 49px;

  &:hover {
    background-color: #f58977;
  }
`;

export default function BlogPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AppContainer paddingLeft={"15px"}>
      <Stack justifyContent={"flex-start"} paddingY={6}>
        <Box paddingRight={"78px"} mb={3}>
          <Typography
            fontSize={"40px"}
            lineHeight={1.1}
            fontFamily={`"ProximaNovaRegular", sans-serif`}
            color={"#0f0d0d"}
          >
            Threads Of Change: How Clothes Mending Impacts Sustainability
          </Typography>
          <img
            style={{
              maxWidth: isSmallScreen ? "300px" : "640px",
              height: isSmallScreen ? 200 : 277,
            }}
            src="https://alterknitnewyork.com/wp-content/uploads/2023/08/bug.png"
            alt="Bug"
            decoding="async"
            sizes="(max-width: 640px) 100vw, 640px"
          ></img>
          <Typography
            color={"#575656"}
            maxWidth={1400}
            fontFamily={`"ProximaNovaMedium", sans-serif`}
            fontSize={"20px"}
          >
            Mending clothes might seem like a distant memory in a world driven
            by fast fashion and disposable clothing. However, beneath the
            surface of this throwaway culture lies a profound opportunity for
            change. The art of clothes mending, often considered old-fashioned,
            is experiencing a revival, and its impact on sustainability is
            remarkable and underappreciated. Mending is…
          </Typography>
        </Box>
        <Link to={routes.BLOG_PAGE_CONTENT}>
          <StyledButton
            style={{
              fontFamily: `"ProximaNovaMedium", sans-serif`,
            }}
          >
            Continue reading
          </StyledButton>
        </Link>
      </Stack>
    </AppContainer>
  );
}
