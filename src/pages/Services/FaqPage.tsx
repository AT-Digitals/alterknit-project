import { Box, Typography, styled } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Top from "../../assets/services_faqs_bg_top.svg";
import Bottom from "../../assets/services_faqs_bg_bottom.svg";

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
    title: "Can I Bring My Items To Your Shop In Queens, New York?",
    paragraph:
      "  We know you would like to visit but due to the high intensity nature of the service we provide, we do not accept walk-ins.",
  },
  {
    title: "How Do You Match The Yarn So It Looks Invisible?",
    paragraph:
      "First we invisibly 'harvest' the yarn from the garment itself. We also have an extensive in-house fiber library.",
  },
];

const Notes1 = [
  {
    title: "Can You Get Stains Out?",
    paragraph: "Yes we can.",
  },
  {
    title: "I Have A Torn Neckline — Can You Reattach It?",
    paragraph: "Yes, this is a very common repair.",
  },
];

const Notes2 = [
  {
    title: "Do You Shorten Sweaters?",
    paragraph:
      "Yes, we shorten all body lengths as well as sleeve length while maintaining the original hem detail.",
  },
  {
    title: "What Brands Do You Repair?",
    paragraph: "If you love it we fix it! All brands are welcome.",
  },
];

const Notes3 = [
  {
    title: "Can You Get Stains Out?",
    paragraph: "Yes we can.",
  },
  {
    title: "Can I Get A Repair Estimate Before I Submit My Order?",
    paragraph:
      "You can email us, or text, or chatbot pictures for us to see if your items are a good candidate for the services we provide. We cannot give any estimates or ballparks before we see your particular item in our studio. Please don't tell us it's just a small hole, we know it may appear to be just small or only one hole but what you see and what we see maybe two different things.Remember all invisible repairs are done by hand and are time intensive. Our promise is to provide a complete restoration so we need to give it an in-house exam.",
  },
];
const Notes4 = [
  {
    title: "Your Pictures Look Amazing, Are They Real?",
    paragraph:
      " We get that question a lot and we are proud to say YES! What you see is what you get, we provide top shelf repairs the old fashioned way stitch by stitch.",
  },
  {
    title: "Do You Receive Orders From Outside Of The United States?",
    paragraph:
      "Yes. We use USPS with tracking to deliver your order back to you. You can also include a pre paid return shipping label in with your order.",
  },
];

const Notes5 = [
  {
    title: "How Long Will The Repairs Take?",
    paragraph:
      "Once you approve the repair quote and provide payment you can expect to wait approximately 4 weeks for your repair to be completed. However the length of time depends on the complexity of the work.",
  },
  {
    title: "What If I Decide I Do Not Want To Proceed With The Repair?",
    paragraph:
      "If after receiving your quote you decline service we return your items to you. You are responsible for all applicable delivery fees.",
  },
];

export default function FaqPage() {
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

  const [openNote4Index, setOpenNote4Index] = useState(null);

  const handleAddIconClick4 = (index: any) => {
    if (openNote4Index === index) {
      setOpenNote4Index(null);
    } else {
      setOpenNote4Index(index);
    }
  };

  const [openNote5Index, setOpenNote5Index] = useState(null);

  const handleAddIconClick5 = (index: any) => {
    if (openNote5Index === index) {
      setOpenNote5Index(null);
    } else {
      setOpenNote5Index(index);
    }
  };

  return (
    <>
      <img src={Top} alt="top-file" />
      <Box bgcolor={"#f8f1eb"}>
        <Typography
          textAlign={"center"}
          color={"black"}
          fontWeight={"500"}
          fontSize={"5rem"}
          fontFamily={"IndustrialGothicBannerStd, sans-serif"}
          textTransform={"lowercase"}
        >
          FAQ'S
        </Typography>
        <Box margin={"0 auto"} padding={"0 10rem"}>
          <Box mt={4} display={"flex"} flexDirection={"column"} gap={"3rem"}>
            {Notes.map((notes, index) => (
              <Box
                bgcolor={"#f8f1ec"}
                borderRadius={"24px"}
                p={" 1rem 0rem"}
                alignItems={"center"}
                key={index}
              >
                <StyledBox
                  display={"flex"}
                  justifyContent={"space-between"}
                  onClick={() => handleAddIconClick(index)}
                  alignItems={"center"}
                  borderBottom={"2px solid black"}
                  paddingBottom={"25px"}
                >
                  <Typography
                    fontFamily={`"Proxima Nova", sans-serif`}
                    fontSize={"32px"}
                    color={"black"}
                    fontWeight={"600"}
                    textTransform={"capitalize"}
                  >
                    {notes.title}
                  </Typography>
                  {openNoteIndex === index ? (
                    <RemoveCircleIcon
                      style={{
                        fontSize: "62px",
                      }}
                    />
                  ) : (
                    <AddCircleIcon
                      style={{
                        fontSize: "62px",
                      }}
                    />
                  )}
                </StyledBox>
                {openNoteIndex === index && (
                  <Typography
                    fontFamily={`"Proxima Nova", sans-serif`}
                    fontSize={"21px"}
                    color={"#575656"}
                    paddingTop={"15px"}
                    paddingRight={"8rem"}
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
                p={" 1rem 0rem"}
                alignItems={"center"}
                key={index}
              >
                <StyledBox
                  display={"flex"}
                  justifyContent={"space-between"}
                  onClick={() => handleAddIconClick1(index)}
                  alignItems={"center"}
                  borderBottom={"2px solid black"}
                  paddingBottom={"25px"}
                >
                  <Typography
                    fontFamily={`"Proxima Nova", sans-serif`}
                    fontSize={"32px"}
                    color={"black"}
                    fontWeight={"600"}
                    textTransform={"capitalize"}
                  >
                    {notes.title}
                  </Typography>
                  {openNoteIndex === index ? (
                    <RemoveCircleIcon
                      style={{
                        fontSize: "62px",
                      }}
                    />
                  ) : (
                    <AddCircleIcon
                      style={{
                        fontSize: "62px",
                      }}
                    />
                  )}
                </StyledBox>
                {openNote1Index === index && (
                  <Typography
                    fontFamily={`"Proxima Nova", sans-serif`}
                    fontSize={"21px"}
                    color={"#575656"}
                    paddingTop={"15px"}
                    paddingRight={"8rem"}
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
                p={" 1rem 0rem"}
                alignItems={"center"}
                key={index}
              >
                <StyledBox
                  display={"flex"}
                  justifyContent={"space-between"}
                  onClick={() => handleAddIconClick2(index)}
                  alignItems={"center"}
                  borderBottom={"2px solid black"}
                  paddingBottom={"25px"}
                >
                  <Typography
                    fontFamily={`"Proxima Nova", sans-serif`}
                    fontSize={"32px"}
                    color={"black"}
                    fontWeight={"600"}
                    textTransform={"capitalize"}
                  >
                    {notes.title}
                  </Typography>
                  {openNoteIndex === index ? (
                    <RemoveCircleIcon
                      style={{
                        fontSize: "62px",
                      }}
                    />
                  ) : (
                    <AddCircleIcon
                      style={{
                        fontSize: "62px",
                      }}
                    />
                  )}
                </StyledBox>
                {openNote2Index === index && (
                  <Typography
                    fontFamily={`"Proxima Nova", sans-serif`}
                    fontSize={"21px"}
                    color={"#575656"}
                    paddingTop={"15px"}
                    paddingRight={"8rem"}
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
                p={" 1rem 0rem"}
                alignItems={"center"}
                key={index}
              >
                <StyledBox
                  display={"flex"}
                  justifyContent={"space-between"}
                  onClick={() => handleAddIconClick3(index)}
                  alignItems={"center"}
                  borderBottom={"2px solid black"}
                  paddingBottom={"25px"}
                >
                  <Typography
                    fontFamily={`"Proxima Nova", sans-serif`}
                    fontSize={"32px"}
                    color={"black"}
                    fontWeight={"600"}
                    textTransform={"capitalize"}
                  >
                    {notes.title}
                  </Typography>
                  {openNoteIndex === index ? (
                    <RemoveCircleIcon
                      style={{
                        fontSize: "62px",
                      }}
                    />
                  ) : (
                    <AddCircleIcon
                      style={{
                        fontSize: "62px",
                      }}
                    />
                  )}
                </StyledBox>
                {openNote3Index === index && (
                  <Typography
                    fontFamily={`"Proxima Nova", sans-serif`}
                    fontSize={"21px"}
                    color={"#575656"}
                    paddingTop={"15px"}
                    paddingRight={"8rem"}
                  >
                    {notes.paragraph}
                  </Typography>
                )}
              </Box>
            ))}
            {Notes4.map((notes, index) => (
              <Box
                bgcolor={"#f8f1ec"}
                borderRadius={"24px"}
                p={" 1rem 0rem"}
                alignItems={"center"}
                key={index}
              >
                <StyledBox
                  display={"flex"}
                  justifyContent={"space-between"}
                  onClick={() => handleAddIconClick4(index)}
                  alignItems={"center"}
                  borderBottom={"2px solid black"}
                  paddingBottom={"25px"}
                >
                  <Typography
                    fontFamily={`"Proxima Nova", sans-serif`}
                    fontSize={"32px"}
                    color={"black"}
                    fontWeight={"600"}
                    textTransform={"capitalize"}
                  >
                    {notes.title}
                  </Typography>
                  {openNoteIndex === index ? (
                    <RemoveCircleIcon
                      style={{
                        fontSize: "62px",
                      }}
                    />
                  ) : (
                    <AddCircleIcon
                      style={{
                        fontSize: "62px",
                      }}
                    />
                  )}
                </StyledBox>
                {openNote4Index === index && (
                  <Typography
                    fontFamily={`"Proxima Nova", sans-serif`}
                    fontSize={"21px"}
                    color={"#575656"}
                    paddingTop={"15px"}
                    paddingRight={"8rem"}
                  >
                    {notes.paragraph}
                  </Typography>
                )}
              </Box>
            ))}
            {Notes5.map((notes, index) => (
              <Box
                bgcolor={"#f8f1ec"}
                borderRadius={"24px"}
                p={" 1rem 0rem"}
                alignItems={"center"}
                key={index}
              >
                <StyledBox
                  display={"flex"}
                  justifyContent={"space-between"}
                  onClick={() => handleAddIconClick5(index)}
                  alignItems={"center"}
                  borderBottom={"2px solid black"}
                  paddingBottom={"25px"}
                >
                  <Typography
                    fontFamily={`"Proxima Nova", sans-serif`}
                    fontSize={"32px"}
                    color={"black"}
                    fontWeight={"600"}
                    textTransform={"capitalize"}
                  >
                    {notes.title}
                  </Typography>
                  {openNoteIndex === index ? (
                    <RemoveCircleIcon
                      style={{
                        fontSize: "62px",
                      }}
                    />
                  ) : (
                    <AddCircleIcon
                      style={{
                        fontSize: "62px",
                      }}
                    />
                  )}
                </StyledBox>
                {openNote5Index === index && (
                  <Typography
                    fontFamily={`"Proxima Nova", sans-serif`}
                    fontSize={"21px"}
                    color={"#575656"}
                    paddingTop={"15px"}
                    paddingRight={"8rem"}
                  >
                    {notes.paragraph}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <img src={Bottom} alt="bottom file" />
    </>
  );
}
