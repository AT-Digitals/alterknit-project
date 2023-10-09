import { Box, Typography } from "@mui/material";

import routes from "../../../routes/routes";
import styled from "@emotion/styled";

const LinkWrapper = styled.div`
  margin-top: 40px;
`;

const StyledLink = styled.a`
  display: inline-block;
  line-height: 50px;
  padding: 0px 20px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  height: 50px;
  background: #df7c6d;
  font-size: 18px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: black;
    color: white;
  }
`;

interface DoorProps {
  prevStep: () => void;
}


export default function DarnIt({ prevStep }: DoorProps) {
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
        fontWeight={500}
        textTransform={"lowercase"}
      >
        DARN IT!
      </Typography>
      <Typography
        borderTop={"1px solid #333"}
        textAlign={"center"}
        fontSize={"42px"}
        fontWeight={500}
        fontFamily={"IndustrialGothicBannerStd, sans-serif"}
        borderBottom={"1px solid #333"}
        paddingBottom={"35px"}
        paddingTop={"35px"}
        textTransform={"lowercase"}
        lineHeight={1.2}
      >
        AT THIS TIME WE DO NOT OFFER DOOR TO <br /> DOOR SERVICE IN YOUR AREA
      </Typography>
      <LinkWrapper>
        <StyledLink onClick={prevStep}>OK! I will ship it</StyledLink>
      </LinkWrapper>
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
