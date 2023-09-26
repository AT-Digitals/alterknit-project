import { Box, Typography } from "@mui/material";

import routes from "../../../routes/routes";

export default function DarnIt() {
  return (
    <Box
      mt={"2rem"}
      textAlign={"center"}
      padding={"40px 50px"}
      border={"1px solid black"}
      borderRadius={"30px"}
      bgcolor={"white"}
      margin={"auto"}
      position={"relative"}
    >
      <Typography
        fontSize={"100px"}
        fontFamily={"IndustrialGothicBannerStd, sans-serif"}
      >
        DARN IT!
      </Typography>
      <Typography
        borderTop={"1px solid #333"}
        textAlign={"center"}
        fontSize={"42px"}
        fontFamily={"IndustrialGothicBannerStd, sans-serif"}
        borderBottom={"1px solid #333"}
        paddingBottom={"35px"}
        paddingTop={"35px"}
      >
        AT THIS TIME WE DO NOT OFFER DOOR TO <br /> DOOR SERVICE IN YOUR AREA
      </Typography>
      <Box mt={"40px"}>
        <a
          href={routes.FIXME}
          style={{
            display: "inline-block",
            lineHeight: "50px",
            padding: "0px 20px",
            color: "white",
            cursor: "pointer",
            textDecoration: "none",
            height: "50px",
            background: "#df7c6d",
          }}
          color="'#df7c6d"
        >
          OK! I will ship it
        </a>
      </Box>
      <img
        style={{
          position: "absolute",
          right: "-85px",
          top: "0px",
          objectFit: "contain",
          height: "530px",
          transform: "translateX(62%)",
        }}
        alt="door-to-door"
        src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/moskitooz.png"
      ></img>
    </Box>
  );
}
