import { Box, Typography, styled, useMediaQuery } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
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
    title: "SWEATER REPAIR",
    paragraph:
      "Through a process known as REKNITTING, our repair team uses yarn from the original garment to REKNIT the damaged area matching the pattern and style. The work is done by hand and most times under a magnifying glass to make sure that it's done just right.",
  },
  {
    title: "SUIT REPAIR",
    paragraph:
      "For damage on suits our repair team uses a method known as reweaving matching the color and pattern to provide a seamless repair.",
  },
];

const Notes1 = [
  {
    title: "GENERAL GARMENT REPAIR",
    paragraph:
      "All is not lost. Even if your garment requires a different solution other than reknitting or reweaving we specialise in finding solutions for your damage garments. Give us a call or send us a picture and we can see if there is anything we can do to salvage it.",
  },
  {
    title: "KNIT RESTYLING",
    paragraph:
      "Have an ill-fitting knit? Sleeves too long? Love the sweater but hate the turtleneck? We can alter sleeves, remove a turtleneck, shorten etc. all by hand. It'll look like you bought it that way.",
  },
];

const Notes2 = [
  {
    title: "DE-PILL",
    paragraph:
      "Does your favorite sweater seem unwearable due to accumulated pilling? Send us your sweater and our professionals will take care of all that fuzz.",
  },
  {
    title: "HAND WASHING SERVICE",
    paragraph:
      "Yes, we offer hand washing. We will carefully hand wash, dry, fold and return your garments ready to wear.",
  },
];

const Notes3 = [
  {
    title: "ALTERATION",
    paragraph:
      "We provide alterations from the simple to the complex. We can put an original hem on your favorite jeans, replace a zipper or the lining of a coat to more major adjustments.",
  },
  {
    title: "GARMENT CLEANING",
    paragraph:
      "Garment cleaning is the best way to maintain your wardrobe. Remember to select cleaning when placing your order.",
  },
];

export default function HelpPage() {
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

  const [openNote2Index, setOpenNote2Index] = useState(null);

  const handleAddIconClick2 = (index: any) => {
    if (openNote2Index === index) {
      setOpenNote2Index(null);
    } else {
      setOpenNote2Index(index);
    }
  };

  const [openNote3Index, setOpenNote3Index] = useState(null);

  const handleAddIconClick3 = (index: any) => {
    if (openNote3Index === index) {
      setOpenNote3Index(null);
    } else {
      setOpenNote3Index(index);
    }
  };
  const isXsScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box bgcolor={"#f8f1eb"} paddingX={"20px"} paddingTop={{ xs: 5, sm: 15 }} paddingBottom={{ xs: 10, sm: 15 }}>
      <Typography
        textAlign={"center"}
        color={"black"}
        fontWeight={500}
        lineHeight={1}
        fontSize={"80px"}
        fontFamily={"IndustrialGothicBannerStd, sans-serif"}
        textTransform={"lowercase"}
        mt={2}
        mb={8}
      >
        HOW WE CAN HELP
      </Typography>
      <Box margin={"0 auto"} width={"100%"} maxWidth={"1300px"}>
        <Box mt={4} display={"flex"} flexDirection={"column"} gap={"3rem"}>
          {Notes.map((notes, index) => (
            <Box
              bgcolor={"#f8f1ec"}
              marginTop={"-10px"}
              borderRadius={"24px"}
              alignItems={"center"}
              key={index}
            >
              <StyledBox
                display={"flex"}
                justifyContent={"space-between"}
                onClick={() => handleAddIconClick(index)}
                alignItems={"center"}
                borderBottom={"2px solid black"}
                paddingBottom={"15px"}
              >
                <Typography
                  fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                  fontSize={{ xs: '1.8rem', sm: '2.8rem', md: '2.8rem', lg: '3rem' }}
                  color={"black"}
                  fontWeight={"500"}
                  textTransform={"lowercase"}
                >
                  {notes.title}
                </Typography>
                {openNoteIndex === index ? (
                  <RemoveCircleIcon
                    sx={{
                      fontSize: { xs: '30px', sm: '55px', md: '55px', lg: '62px' }
                    }}
                  />
                ) : (
                  <AddCircleIcon
                  sx={{
                    fontSize: { xs: '30px', sm: '55px', md: '55px', lg: '62px' }
                  }}
                  />
                )}
              </StyledBox>
              {openNoteIndex === index && (
                <Typography
                  fontFamily={`"ProximaNovaMedium", sans-serif`}
                  fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                  color={"#0f0d0d"}
                  paddingTop={"15px"}
                >
                  {notes.paragraph}
                </Typography>
              )}
            </Box>
          ))}
          {Notes1.map((notes, index) => (
            <Box
              bgcolor={"#f8f1ec"}
              borderRadius={"24px"}
              marginTop={"-10px"}
              alignItems={"center"}
              key={index}
            >
              <StyledBox
                display={"flex"}
                justifyContent={"space-between"}
                onClick={() => handleAddIconClick1(index)}
                alignItems={"center"}
                borderBottom={"2px solid black"}
                paddingBottom={"15px"}
              >
                <Typography
                  fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                  fontSize={{ xs: '1.8rem', sm: '2.8rem', md: '2.8rem', lg: '3rem' }}
                  color={"black"}
                  fontWeight={"500"}
                  textTransform={"lowercase"}
                >
                  {notes.title}
                </Typography>
                {openNote1Index === index ? (
                  <RemoveCircleIcon
                  sx={{
                    fontSize: { xs: '30px', sm: '55px', md: '55px', lg: '62px' }
                  }}
                  />
                ) : (
                  <AddCircleIcon
                  sx={{
                    fontSize: { xs: '30px', sm: '55px', md: '55px', lg: '62px' }
                  }}
                  />
                )}
              </StyledBox>
              {openNote1Index === index && (
                <Typography
                  fontFamily={`"ProximaNovaMedium", sans-serif`}
                  fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                  color={"#0f0d0d"}
                  paddingTop={"15px"}
                >
                  {notes.paragraph}
                </Typography>
              )}
            </Box>
          ))}
          {Notes2.map((notes, index) => (
            <Box
              bgcolor={"#f8f1ec"}
              borderRadius={"24px"}
              marginTop={"-10px"}
              alignItems={"center"}
              key={index}
            >
              <StyledBox
                display={"flex"}
                justifyContent={"space-between"}
                onClick={() => handleAddIconClick2(index)}
                alignItems={"center"}
                borderBottom={"2px solid black"}
                paddingBottom={"15px"}
              >
                <Typography
                  fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                  fontSize={{ xs: '1.8rem', sm: '2.8rem', md: '2.8rem', lg: '3rem' }}
                  color={"black"}
                  fontWeight={"500"}
                  textTransform={"lowercase"}
                >
                  {notes.title}
                </Typography>
                {openNote2Index === index ? (
                  <RemoveCircleIcon
                  sx={{
                    fontSize: { xs: '30px', sm: '55px', md: '55px', lg: '62px' }
                  }}
                  />
                ) : (
                  <AddCircleIcon
                  sx={{
                    fontSize: { xs: '30px', sm: '55px', md: '55px', lg: '62px' }
                  }}
                  />
                )}
              </StyledBox>
              {openNote2Index === index && (
                <Typography
                  fontFamily={`"ProximaNovaMedium", sans-serif`}
                  fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                  color={"#0f0d0d"}
                  paddingTop={"15px"}
                >
                  {notes.paragraph}
                </Typography>
              )}
            </Box>
          ))}
          {Notes3.map((notes, index) => (
            <Box
              bgcolor={"#f8f1ec"}
              borderRadius={"24px"}
              marginTop={"-10px"}
              alignItems={"center"}
              key={index}
            >
              <StyledBox
                display={"flex"}
                justifyContent={"space-between"}
                onClick={() => handleAddIconClick3(index)}
                alignItems={"center"}
                borderBottom={"2px solid black"}
                paddingBottom={"15px"}
              >
                <Typography
                  fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                  fontSize={{ xs: '1.8rem', sm: '2.8rem', md: '2.8rem', lg: '3rem' }}
                  color={"black"}
                  fontWeight={"500"}
                  textTransform={"lowercase"}
                >
                  {notes.title}
                </Typography>
                {openNote3Index === index ? (
                  <RemoveCircleIcon
                  sx={{
                    fontSize: { xs: '30px', sm: '55px', md: '55px', lg: '62px' }
                  }}
                  />
                ) : (
                  <AddCircleIcon
                  sx={{
                    fontSize: { xs: '30px', sm: '55px', md: '55px', lg: '62px' }
                  }}
                  />
                )}
              </StyledBox>
              {openNote3Index === index && (
                <Typography
                  fontFamily={`"ProximaNovaMedium", sans-serif`}
                  fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                  color={"#0f0d0d"}
                  paddingTop={"15px"}
                >
                  {notes.paragraph}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
