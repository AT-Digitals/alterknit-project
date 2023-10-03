import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";

import AppContainer from "./AppContainer";
import Colors from "../CommonComponent/Colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import routes from "../routes/routes";

interface footerProps {
  activeTab: string;
}
export default function AppFooter({ activeTab }: footerProps) {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const services = [
    { name: "Home", url: routes.ROOT },
    { name: "Services", url: routes.SERVICES },
    { name: "Our Story", url: routes.OUR_STORY },
    { name: "Portfolio", url: routes.PORTFOLIO },
    { name: "Care", url: routes.CARE },
    { name: "Blog", url: routes.BLOG_PAGE },
    { name: "Schedule Repair", url: routes.SCHEDULE_REPAIR },
    { name: "Partners", url: routes.PARTNER },
  ];

  return (
    <Box bgcolor={Colors.BLACK}>
      <Box borderBottom="1px solid #272727">
        <Stack
          px={5}
          py={5}
          direction={isSmScreen ? "column" : "row"}
          justifyContent={isSmScreen ? "center" : "space-between"}
          alignItems="center"
          maxWidth={1400}
        >
          <a href={routes.ROOT}>
            <img
              src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/logo_white.svg"
              alt="alterknit logo"
              loading="lazy"
              width={200}
              height={40}
            />
          </a>
          <Stack
            padding={"4rem 0 3rem 0"}
            spacing={3}
            alignItems={isSmScreen ? "center" : "end"}
            textAlign={isSmScreen ? "center" : "end"}
          >
            <ul
              style={{
                flexWrap: "wrap",
                justifyContent: "center",
                display: "flex",
                gap: "1rem",
                padding: 0,
                marginTop: "20px",
              }}
            >
              {services.map((service, index) => (
                <li
                  key={index}
                  style={{
                    listStyleType: "none",
                  }}
                >
                  <a
                    style={{
                      fontFamily: "Proxima Nova, sans-serif",
                      color: "#787878",
                      textDecoration: "none",
                    }}
                    href={service.url}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>

            <Stack direction="row" spacing={3}>
              <ul
                style={{
                  flexWrap: "wrap",
                  justifyContent: "center",
                  display: "flex",
                  gap: "1rem",
                  padding: 0,
                  marginTop: "20px",
                }}
              >
                <li
                  style={{
                    listStyleType: "none",
                  }}
                >
                  <a
                    style={{
                      fontFamily: "Proxima Nova, sans-serif",
                      color: "#787878",
                      textDecoration: "none",
                    }}
                    href="mailto:orders@alterknitnewyork.com"
                  >
                    {" "}
                    orders@alterknitnewyork.com
                  </a>
                </li>
                <li
                  style={{
                    listStyleType: "none",
                  }}
                >
                  <a
                    style={{
                      fontFamily: "Proxima Nova, sans-serif",
                      color: "#787878",
                      textDecoration: "none",
                    }}
                    href="tel:+12124736363"
                  >
                    {" "}
                    212 473 6363
                  </a>
                </li>
              </ul>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box padding={"4rem 0 3rem 0"} color={"#787878"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"100%"}
          maxWidth={1440}
          justifyContent={"space-around"}
          flexWrap={"wrap"}
          margin={"0 auto"}
          gap={"2rem"}
        >
          <Box
            fontFamily="Proxima Nova, sans-serif"
            fontSize={"17px"}
            gap={"1.6rem"}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            marginLeft={"unset"}
          >
            {" "}
            <span>Copyright</span> <span>AlterKnit New York 2023</span>{" "}
            <a
              style={{ color: "#787878" }}
              href="https://alterknitnewyork.com/privacy-policy"
            >
              Privacy Policy
            </a>{" "}
            <a
              style={{ color: "#787878" }}
              href="https://alterknitnewyork.com/terms-and-conditions"
            >
              Terms and Conditions
            </a>{" "}
          </Box>

          <Box gap={"2rem"} display="flex" justifyContent="flex-end">
            <a
              href="https://www.facebook.com/AlterKnitNY/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FacebookIcon
                style={{
                  color: "#787878",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/alterknitnewyork/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon
                style={{
                  color: "#787878",
                }}
              />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
