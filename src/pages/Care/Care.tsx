import { Box, Typography, styled } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import HoverCard from "./CardContent";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const StyledBox = styled(Box)`
  cursor: pointer; /* Add cursor pointer to indicate clickability */
  &:hover {
    color: #df7c6d;
    & > .MuiTypography-root {
      color: #df7c6d;
    }
    & > .MuiSvgIcon-root {
      color: #df7c6d;
    }
  }
`;

const Notes = [
  {
    title: "THE MOST COMMON CAUSE OF MOTH HOLES?",
    paragraph:
      "DIRT! Don't be afraid to dry clean or wash your sweaters by hand or on gentle delicate in your machine (now is the time to break out that mesh bag). Neither will harm your garment - in fact your cashmere and wool will feel even softer. Plus, washing away food and dirt will leave less behind for moths and other critters to munch on.",
  },
  {
    title: "WHAT CAN I DO?",
    paragraph:
      "Check in with your wardrobe! Out of sight is not out of mind and might just lead to your favorite sweater or suit being out of your closet for good. So check in with your clothes, commit to regular cleaning schedule after multiple wears and in between seasons. There's a lot of noise on the internets about not cleaning but we have years in clothing after care and just can't get behind that. Keep it clean folks!",
  },
];

const Notes1 = [
  {
    title: "WHAT'S UP WITH ALL THE PILLS AND FUZZIES",
    paragraph:
      "We've got good news and bad news on this one. The bad news is that cashmere and wool will always pill to some degree. The good news is what you love about cashmere and fine merino - its softness - is what makes it pill. So for example cashmere is a short hair fiber (we know you weren't planning on a science lesson) which is why it's so soft and comfy. Short haired fiber strands, when they come in contact with friction, can tend toward fuzzing and then pilling. Antidote: Get yourself a sweater comb or shaver and maintain your sweater's surface regularly, especially the hip areas and the underarm seams. (You know what we're talking about!)",
  },
  {
    title: "SNAG-YOU'RE IT!",
    paragraph:
      "Get your snag to us before it gets worse. A snag is so much easier to fix when the yarn has not been broken. Most holes start as a pull and then ends up tearing because most of us keep wearing it without treating the snag. Next thing you know the snag rips and then usually runs! So catch your snag before it tears!",
  },
];

export default function CarePage() {
  const [openNoteIndex, setOpenNoteIndex] = useState(null);

  const handleAddIconClick = (index: any) => {
    if (openNoteIndex === index) {
      setOpenNoteIndex(null);
    } else {
      setOpenNoteIndex(index);
    }
  };
  const [openNote1Index, setOpenNote1Index] = useState(null);

  const handleAddIconClick1 = (index: any) => {
    if (openNote1Index === index) {
      setOpenNote1Index(null);
    } else {
      setOpenNote1Index(index);
    }
  };

  return (
    <Box>
      <section
        style={{
          padding: "6.5rem",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(' https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_care.png')`,
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"5rem"}
        >
          <Box
            maxWidth={900}
            bgcolor={"#f8f1ec"}
            border={"5px solid #df7c6d"}
            borderRadius={"40px"}
            textAlign={"center"}
            padding={"4rem 5.4rem"}
          >
            <Typography
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontSize={"80px"}
              fontWeight={500}
              textTransform={"lowercase"}
            >
              CARE THROUGH REPAIR
            </Typography>
            <p
              style={{
                color: "#575656",
                fontSize: "19px",
                fontFamily: `"ProximaNovaMedium", sans-serif`,
                marginTop: "-6px",
              }}
            >
              Care is at the core of everything we do here at Alterknit.
            </p>
            <p
              style={{
                maxWidth: 690,
                fontSize: "19px",
                fontFamily: `"ProximaNovaMedium", sans-serif`,
                lineHeight: "1.4rem",
                marginBottom: "2.5rem",
                color: "#575656",
              }}
            >
              Caring goes beyond the time and skill we invest when repairing
              your items. It is further reflected in the measures we put in
              place to operate ethically and sustainably.
            </p>
            <p
              style={{
                color: "#575656",
                maxWidth: 690,
                fontSize: "19px",
                fontFamily: `"ProximaNovaMedium", sans-serif`,
                lineHeight: "1.4rem",
                marginBottom: "2.5rem",
              }}
            >
              The fashion industry is changing and we are leading the charge
              with our founding principle of shifting the conversation to repair
              not replace. Fashion manufacturing solutions are complex with many
              still in the idea phase. However, we believe impactful change can
              and does happen one garment at a time. This change is happening
              now through services such as our's.
            </p>
          </Box>
          <Box
            maxWidth={900}
            border={"5px solid #df7c6d"}
            borderRadius={"40px"}
            textAlign={"center"}
            padding={"2.5rem 5rem"}
            bgcolor={"black"}
            borderColor={"black"}
            color={"white"}
          >
            <Typography
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontSize={"80px"}
              fontWeight={500}
              textTransform={"lowercase"}
            >
              WHERE WE STAND
            </Typography>
            <p
              style={{
                maxWidth: 690,
                fontSize: "19px",
                fontFamily: `"ProximaNovaMedium", sans-serif`,
                lineHeight: "1.4rem",
                marginBottom: "2.5rem",
                color: "white",
              }}
            >
              That doesn't mean we are going to push some hocus-pocus narrative
              on saving the planet. The truth is that no garment or accessory is
              going to last forever, but we can do our part. Beyond repair, we
              can share some helpful tips on preservation, but we know life
              happens while you enjoy your clothes.
            </p>
            <p
              style={{
                maxWidth: 690,
                fontSize: "19px",
                fontFamily: `"ProximaNovaMedium", sans-serif`,
                lineHeight: "1.4rem",
                marginBottom: "2.5rem",
                color: "white",
              }}
            >
              This is where we step in by giving you a choice on what to do next
              and by offering a proper repair that will sustain the life of your
              garment for as long as possible.
            </p>
            <p
              style={{
                maxWidth: 690,
                fontSize: "19px",
                fontFamily: `"ProximaNovaMedium", sans-serif`,
                lineHeight: "1.4rem",
                marginBottom: "2.5rem",
                color: "white",
              }}
            >
              Because we care, your restored items will not only look amazing
              but will last longer through whatever life throws at you. And when
              your stuff comes back home to you hole free you will not only see
              our magic but feel it too.
            </p>
          </Box>
        </Box>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "6rem 0 0  0",
        }}
      >
        <img
          src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_care_top.svg"
          alt="thems1"
          style={{ width: "100%", height: "auto" }}
        />
        <Box bgcolor={"#df7c6d"} paddingBottom={"0 10rem"}>
          <Box margin={"0 auto"} width={"100%"} maxWidth={1300}>
            <Typography
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontSize={"80px"}
              fontWeight={500}
            >
              dear alterknit... (just asking)
            </Typography>
            <Box
              mb={"6rem"}
              mt={4}
              display={"flex"}
              flexDirection={"column"}
              gap={"3rem"}
              sx={{
                "@media (max-width: 768px)": {
                  flexDirection: "column-reverse",
                  alignItems: "center",
                  gap: "2rem",
                  padding: "1rem",
                },
              }}
            >
              {Notes.map((notes, index) => (
                <Box
                  bgcolor={"#f8f1ec"}
                  borderRadius={"24px"}
                  p={" 1rem 1.5rem"}
                  alignItems={"center"}
                  key={index}
                  maxWidth={1240}
                >
                  <StyledBox
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    onClick={() => handleAddIconClick(index)}
                  >
                    <Typography
                      fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                      fontSize={"48px"}
                      fontWeight={500}
                      textTransform={"lowercase"}
                      color={"black"}
                    >
                      {notes.title}
                    </Typography>
                    {openNoteIndex === index ? (
                      <RemoveIcon sx={{ width: 48, height: 48 }} />
                    ) : (
                      <AddIcon sx={{ width: 48, height: 48 }} />
                    )}
                  </StyledBox>
                  {openNoteIndex === index && (
                    <Typography
                      fontFamily={`"ProximaNovaMedium", sans-serif`}
                      fontSize={"22px"}
                      color={"#575656"}
                    >
                      {notes.paragraph}
                    </Typography>
                  )}
                </Box>
              ))}

              <Box
                bgcolor={"#f8f1ec"}
                borderRadius={"24px"}
                p={" 1rem 1.5rem"}
                alignItems={"center"}
                maxWidth={1240}
              >
                <Typography
                  fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                  fontSize={"48px"}
                  color={"#df7c6d"}
                  fontWeight={500}
                  textTransform={"lowercase"}
                >
                  WHEN BAD THINGS HAPPEN TO GOOD SWEATERS
                </Typography>
                <Typography
                  fontFamily={`"ProximaNovaMedium", sans-serif`}
                  fontSize={"22px"}
                  color={"#575656"}
                >
                  We've seen it all over here and fixed it too: your favorite
                  office cardigan caught in a desk chair wheel with blown out
                  elbows? Your son's baby blanket hugged to shreds? The Missoni
                  wrap you wear to the beach now full of snags? Or the everyday
                  v-neck you bought at Uniqlo- it wasn't expensive but they
                  don't make that color anymore. We save it all and restore it
                  like nobody's business.
                </Typography>
              </Box>
              {Notes1.map((notes, index) => (
                <Box
                  bgcolor={"#f8f1ec"}
                  borderRadius={"24px"}
                  p={" 1rem 1.5rem"}
                  alignItems={"center"}
                  key={index}
                  maxWidth={1240}
                >
                  <StyledBox
                    display={"flex"}
                    justifyContent={"space-between"}
                    onClick={() => handleAddIconClick1(index)}
                    alignItems={"center"}
                  >
                    <Typography
                      fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                      fontSize={"48px"}
                      color={"black"}
                      fontWeight={500}
                      textTransform={"lowercase"}
                    >
                      {notes.title}
                    </Typography>
                    {openNote1Index === index ? (
                      <RemoveIcon sx={{ width: 48, height: 48 }} />
                    ) : (
                      <AddIcon sx={{ width: 48, height: 48 }} />
                    )}
                  </StyledBox>
                  {openNote1Index === index && (
                    <Typography
                      fontFamily={`"ProximaNovaMedium", sans-serif`}
                      fontSize={"22px"}
                      color={"#575656"}
                    >
                      {notes.paragraph}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <img
          src=" https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_care_bottom.svg"
          alt="thems1"
        />
      </section>
      <section style={{ padding: "3rem 0 0 0" }}>
        <Box
          margin={"auto 0"}
          padding={"0 10rem"}
          sx={{
            padding: { xs: "10px", md: "0 11rem" },
          }}
        >
          <Typography
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            fontSize={"80px"}
            lineHeight={"1.25rem 0"}
            fontWeight={500}
            textTransform={"lowercase"}
          >
            HEY,DID YOU KNOW...
          </Typography>
          <Box
            p={"4rem 0"}
            display={"flex"}
            flexWrap={"wrap"}
            gap={"6rem 9rem"}
            justifyContent={"center"}
          >
            <HoverCard />
          </Box>
        </Box>
      </section>

      <section style={{ padding: "8rem 0 1rem 0" }}>
        <Box display={"flex"} justifyContent={"center"}>
          <Box
            maxWidth={"900px"}
            bgcolor={"#f8f1ec"}
            border={"5px solid #df7c6d"}
            borderRadius={"40px"}
            textAlign={"center"}
            padding={"5rem 6rem 4rem 6rem"}
            position={"relative"}
            sx={{
              "@media (max-width: 768px)": {
                padding: "3rem 1rem",
              },
            }}
          >
            <img
              style={{
                maxWidth: "105px",
                position: "absolute",
                top: 0,
                left: 0,
                marginLeft: "38%",
                marginTop: "-63px",
              }}
              src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/logo-3d.png"
              alt="logo"
              loading="lazy"
            />
            <Typography
              fontSize={"80px"}
              lineHeight={"3rem"}
              margin={"1.25rem 0"}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontWeight={500}
              textTransform={"lowercase"}
              sx={{
                "@media (max-width: 768px)": {
                  fontSize: "36px",
                },
              }}
            >
              IN ALTERKNIT WE TRUST
            </Typography>
            <Typography
              fontSize={"19px"}
              maxWidth={620}
              mt={5}
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              color={"#575656"}
              sx={{
                "@media (max-width: 768px)": {
                  fontSize: "14px",
                },
              }}
            >
              We understand the trust in placing a treasured garment in our
              hands. We never judge how it happened or what it cost. Brand,
              fiber or age we do not discriminate. Everything gets the same
              top-shelf care and attention to detail. We want what you want!
              -Your clothes back where they belong in the front of your closet
              and at the ready. So take some time to read more about our story,
              check out our portfolio and follow us on Instagram to see the work
              we have done and the work we are doing! And if there is anything
              you want to ask we are here via phone, email or chat.
            </Typography>
          </Box>
        </Box>
      </section>
    </Box>
  );
}
