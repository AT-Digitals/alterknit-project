import { Box, Typography, useMediaQuery } from "@mui/material";

import { useEffect } from "react";

const InstagramBoxNavigation = [
  {
    Image:
      " https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/ig_1.jpg",
    link: "https://www.instagram.com/reel/CpDbBhVJ3aJ/?hl=en",
  },
  {
    Image:
      "https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/ig_2.jpg",
    link: "https://www.instagram.com/reel/Co-hEaxD0cf/?hl=en",
  },
  {
    Image:
      " https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/ig_3.jpg",
    link: "https://www.instagram.com/reel/Co5eKd5joyq/?hl=en",
  },
  {
    Image:
      " 	https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/ig_4.jpg",
    link: "https://www.instagram.com/reel/CoyD8WQjlaT/?hl=en",
  },
];

export default function OurStory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isXsScreen = useMediaQuery("(max-width:600px)");
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: isXsScreen ? " 3.5rem 10px" : "9.5rem 0",
          backgroundImage: `url(https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_our_story.jpg)`,
          backgroundPosition: "center",
        }}
      >
        <Box
          width={"100%"}
          maxWidth={"1440px"}
          margin={"0 auto"}
          padding={{ xs: "0 1rem", sm: "0 3rem", md: "0 5rem", lg: "0 13rem" }}
        >
          <Box
            bgcolor={"#f8f1ec"}
            border={"4px dashed black"}
            borderRadius={"40px"}
            margin={"0 auto"}
            padding={{ xs: "1.5rem 2rem", sm: "3rem 4rem", md: "3rem 4rem", lg: "4rem 8rem" }}
            textAlign="center"          >
            <Typography
              lineHeight={isXsScreen ? "2.6rem" : "5rem"}
              fontSize={{ xs: "40px", sm: "80px", md: "80px" }}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontWeight={500}
              textTransform={"lowercase"}
            >
              We built this company on the promise of providing the best quality
              repair available.
            </Typography>
          </Box>
        </Box>
      </section>
      <section>
        <Box p={"4rem 0 0 0"}>
          <Box
            width={"90%"}
            maxWidth={1160}
            margin={"0 auto"}
            textAlign={"center"}
          >
            <Typography
              fontSize={isXsScreen ? "45px" : "80px"}
              lineHeight={1.1}
              fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
              position={"relative"}
              zIndex={1}
              fontWeight={500}
              textTransform={"lowercase"}
            >
              WE STAND BY THAT COMMITMENT 100%.
            </Typography>
            <Typography
              position={"relative"}
              zIndex={1}
              fontSize={isXsScreen ? "17px" : "22px"}
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              color={"#575656"}
              margin={"0.5rem"}
            >
              We fix clothing that other companies turn away. And if we can't
              fix it to our standards, we tell you. Your happiness and
              satisfaction are the most important to us and is ultimately our
              reward.
            </Typography>
            <img
              style={{
                maxWidth: isXsScreen ? "320px" : "550px",
                marginTop: "-70px",
              }}
              src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bug_05.jpg"
              alt="bug"
              loading="lazy"
            ></img>
          </Box>
        </Box>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          style={{ width: "100%" }}
          src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/our_story_values_bg_top.svg"
          alt="background"
          loading="lazy"
        ></img>
        <Box bgcolor={"#df7c6d"}>
          <Box width={"100%"} maxWidth={1440} m={"0 auto"}>
            <Typography
              textAlign={"center"}
              mb={"1rem"}
              fontSize={isXsScreen ? "41px" : "80px"}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontWeight={500}
              textTransform={"lowercase"}
            >
              ABOUT OUR SERVICES
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={"3rem"}
              padding={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
            >
              <Box
                textAlign={isXsScreen ? "center" : "start"}
                maxWidth={980}
                bgcolor={"white"}
                p={"2.5rem"}
                borderRadius={"20px"}
                sx={{ transition: "opacity .35s ease-in-out" }}
              >
                <Typography
                  fontSize={isXsScreen ? "30px" : "48px"}
                  fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                  fontWeight={500}
                  textAlign={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "start",
                  }}
                  textTransform={"lowercase"}
                  mb={1.5}
                >
                  HONEST REPAIR
                </Typography>
                <Typography
                  color={"#575656"}
                  fontSize="16px"
                  fontFamily={`"ProximaNovaMedium", sans-serif`}
                  lineHeight={1.2}
                  textAlign={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "start",
                  }}
                >
                  In order to make good on that promise to you, we have spent
                  decades honing our craft and assembling a team of highly
                  skilled artisans. We work with tiny needles and magnifying
                  lamps restoring garments by hand and back to new. It is a
                  trade that requires an enormous amount of patience and a huge
                  dedication to perfection and we love it! We restore clothing
                  that other companies turn away, and if we are unable to fix
                  something to our standards, then we will tell you.
                </Typography>
              </Box>

              <Box
                maxWidth={980}
                bgcolor={"white"}
                p={"2.5rem"}
                borderRadius={"20px"}
                textAlign={isXsScreen ? "center" : "start"}
                sx={{ transition: "opacity .35s ease-in-out" }}
              >
                <Typography
                  textAlign={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "start",
                  }}
                  fontSize={isXsScreen ? "30px" : "48px"}
                  fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                  fontWeight={500}
                  textTransform={"lowercase"}
                  mb={1.5}
                >
                  INHERENTLY SUSTAINABLE
                </Typography>
                <Typography
                  color={"#575656"}
                  fontSize="16px"
                  fontFamily={`"ProximaNovaMedium", sans-serif`}
                  lineHeight={1.2}
                  padding={isXsScreen ? "12px" : "0px"}
                >
                  We are also dedicated to doing our part to lessen the impact
                  of consumption on our planet's environment and resources. You
                  might be interested to know that over 85% of the garments we
                  repair are on sweaters and suits made overseas and on
                  machines. We fix your clothes right here in America. Working
                  by hand and harvesting fibers from the garments themselves we
                  leave virtually no carbon footprint at all. Choosing to repair
                  with Alterknit means that not only do you get to enjoy your
                  favorite clothes again, but together, we have saved them from
                  ending up in another landfill.
                </Typography>
              </Box>
              <Box
                maxWidth={980}
                bgcolor={"white"}
                p={"2.5rem"}
                borderRadius={"20px"}
                textAlign={isXsScreen ? "center" : "start"}
                sx={{ transition: "opacity .35s ease-in-out" }}
              >
                <Typography
                  mb={1.5}
                  lineHeight={"1"}
                  fontSize={isXsScreen ? "30px" : "48px"}
                  fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                  fontWeight={500}
                  textTransform={"lowercase"}
                  textAlign={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "start",
                  }}
                >
                  NOW YOU SEE IT , <br /> NOW YOU DONT'T{" "}
                </Typography>
                <Typography
                  mt={2}
                  color={"#575656"}
                  fontSize={"16px"}
                  fontFamily={`"ProximaNovaMedium", sans-serif`}
                  lineHeight={1.2}
                  padding={isXsScreen ? "18px" : "0px"}
                >
                  Your favorite clothes mean a lot to you and we know how much
                  you love them. We also know how upsetting it can be when you
                  pull out your favorite sweater only to discover that it is
                  suddenly damaged by wear and tear or pesky moths which is why
                  we are here to help with the promise to provide you the best
                  quality repair available.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <img
          src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/our_story_values_bg_bottom.svg"
          alt="background"
          loading="lazy"
        ></img>
      </section>
      <section style={{ padding: "6rem 0" }}>
        <Box width={"100%"} maxWidth={"1440px"} m={"0 auto"}>
          <Box
            padding={{ xs: "0 32px", sm: "0 32px", md: "0 32px" }}
            maxWidth={1200}
            m={"0 auto"}
            textAlign={"center"}
          >
            <Typography
              fontSize={isXsScreen ? "51px" : "80px"}
              fontFamily={`'IndustrialGothicBannerStd', sans-serif`}
              fontWeight={500}
              lineHeight={1.1}
              textTransform={"lowercase"}
            >
              A MESSAGE FROM ALTERKNIT
            </Typography>
            <Typography
              marginTop={{ sm: "2rem" }}
              fontSize={isXsScreen ? "16px" : "22px"}
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              mb={"2rem"}
              color={"#575656"}
              lineHeight={1.2}
              mt={isXsScreen ? "2rem" : "0px"}
            >
              Alterknit launched officially in 2009 with a mini website
              advertising hand finishing and repairs on primarily hand knitted
              items. You couldn't trigger a shipping label, we had no before and
              after pictures, no chatbot and not one social media profile. I had
              a Palm Treo phone and I rarely texted. I had no idea that we would
              turn into the company we are today with the vast majority of the
              repairs being made on mass market knit and woven fabrics.
            </Typography>
            <Typography
              fontSize={isXsScreen ? "16px" : "22px"}
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              color={"#575656"}
              lineHeight={1.2}
              mb="1rem"
            >
              We have set a high bar for Alterknit. It is our commitment to
              being the best at what we do that is reflected in the beautiful
              repairs that come home to you. It is not easy to build a company
              that brings this level of craftsmanship to scale in today's times,
              but that is our goal. We hope you will join us on our mission to
              keep your favorite clothes in your closet, damage free and in your
              daily rotation. We can't wait for you to see what we can do for
              you.
            </Typography>
            <img
              style={{
                maxWidth: isXsScreen ? "200px" : "300px",
                marginTop: "3rem",
              }}
              src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/signatures.png"
              alt="signatures"
              loading="lazy"
            ></img>
            <Typography>
              <em
                style={{
                  fontSize: isXsScreen ? "17px" : "22px",
                  fontFamily: `"ProximaNovaMedium", sans-serif`,
                  color: "#575656",
                }}
              >
                Miriam Mades, Founder of Alterknot
              </em>
            </Typography>
          </Box>
        </Box>
      </section>
      <section>
        <Box width={"100%"} maxWidth={1440} m={"0 auto"}>
          <Typography
            fontSize={isXsScreen ? "41px" : "80px"}
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            lineHeight={1.1}
            textAlign={"center"}
            mb={"5rem"}
          >
            <span style={{ color: "#df7c6d" }}>@ALTERKNITNEWYORK</span> ON
            INSTAGRAM
          </Typography>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            gap={"4rem"}
            mt={"-3rem"}
            pb={{ xs: "40px" }}
          >
            {InstagramBoxNavigation.map((items, index) => (
              <Box
                key={index}
                width={"100%"}
                maxWidth={280}
                borderRadius={"40px"}
                overflow={"hidden"}
                position="relative"
              >
                <a href={items.link} target="_blank" rel="noreferrer">
                  <img
                    style={{
                      width: "100%",
                      transition: "transform 0.3s",
                    }}
                    src={items.Image}
                    alt="reel"
                    loading="lazy"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </a>
              </Box>
            ))}
          </Box>
        </Box>
      </section>
    </>
  );
}
