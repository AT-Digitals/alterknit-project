import { Box, Typography } from "@mui/material";

export default function OurStory() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "15rem 0",
        backgroundImage: `url(https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_our_story.jpg)`,
        backgroundPosition: "center",
      }}
    >
      <Box
        width={"100%"}
        maxWidth={"1440px"}
        margin={"0 auto"}
        padding={"0 10rem"}
      >
        <Box
          bgcolor={"white"}
          border={"4px dashed black"}
          borderRadius={"40px"}
          margin={"0 auto"}
          padding={"2rem 15rem "}
        >
          <Typography
            lineHeight={"4rem"}
            textAlign={"center"}
            margin={"0 auto"}
            fontSize={"70px"}
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            fontWeight={400}
            textTransform={"lowercase"}
          >
            we built this company on the promise of providing the best quality
            repair available.
          </Typography>
        </Box>
      </Box>
    </section>
  );
}
