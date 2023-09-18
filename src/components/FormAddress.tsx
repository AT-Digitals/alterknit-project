import { Box, Stack, Typography } from "@mui/material";
import { IconButton, Link, LinkProps } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link color="inherit" target="_blank" {...props}>
      <IconButton color="inherit">{children}</IconButton>
    </Link>
  );
};

export default function FormAddress() {
  return (
    <>
      <Box marginTop={"20px"}>
        <Typography fontWeight={"bold"} fontSize={"32px"} color={"black"}>
          Contact us
        </Typography>
        <Typography color={"grey"} marginTop={"20px"}>
          Lorem ipsum dollar sit amet, consectetur{" "}
          <Typography>adipiscing elit sed do eius mod tempor</Typography>
          <Typography>incidudunt labore et dolar magna at iqua.</Typography>
          <Typography>Ut Enim</Typography>
        </Typography>
        <Box display={"flex"} alignItems={"center"} marginTop={"35px"}>
          <PhoneIcon
            style={{
              fontSize: "35px",
              color: "grey",
            }}
          />
          <Typography color={"grey"} margin={"0px 15px"}>
            +1258 6645 7654
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} marginTop={"35px"}>
          <EmailIcon
            style={{
              fontSize: "35px",
              color: "grey",
            }}
          />
          <Typography color={"grey"} margin={"0px 15px"}>
            hello@work.com
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} marginTop={"35px"}>
          <LocationOnIcon
            style={{
              fontSize: "35px",
              color: "grey",
            }}
          />
          <Typography color={"grey"} margin={"0px 15px"}>
            102 Strret, Y cross 18567
          </Typography>
        </Box>
        <Stack margin={"60px 20px"} direction="row" spacing={2}>
          <SocialLink>
            <GoogleIcon href="https://www.google.com/accounts/signup" />
          </SocialLink>
          <SocialLink href="https://twitter.com/home?lang=en">
            <TwitterIcon />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/accounts/login/">
            <InstagramIcon />
          </SocialLink>
          <SocialLink href="https://www.facebook.com/login/">
            <FacebookIcon />
          </SocialLink>
        </Stack>
      </Box>
    </>
  );
}
