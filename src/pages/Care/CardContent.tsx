import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import styled from "@emotion/styled";

const CardContainer = styled.div`
  perspective: 1000px;
  width: 300px;
  position: relative;
`;

const InnerCard = styled.div`
  position: relative;
  width: 300px;
  height: 460px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props: { isFlipped: any }) =>
    props.isFlipped ? "rotateY(0deg)" : " rotateY(180deg)"};
`;

const CardFace = styled.div`
  width: 100%;
  height: 100%; /* Set the height to 100% to match the back face */
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
`;

const BackFace = styled(CardFace)`
  transform: rotateY(180deg);
  background-color: #fff;
  align-items: flex-end;
  border-radius: 40px;
`;

const CardImage = styled.img`
  border-radius: 40px;
  border: 8px solid #df7c6d;
  max-width: 100%; /* Ensure the image fits within the container */
  max-height: 100%; /* Ensure the image fits within the container */
  object-fit: cover;
`;

const TotalCards = [
  {
    cardDiscription:
      "...saved from the landfill, back in wardrobes (and counting!)",
    cardImage:
      "https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/card_01.jpg",
    cardsTitle: "30 THOUSAND GARMENTS...",
  },
  {
    cardDiscription: "...afraid of a bad repair (we don`t do those).",
    cardImage:
      "https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/card_02.jpg",
    cardsTitle: "62.6% of people are...",
  },
  {
    cardDiscription:
      "...is the amount of experience a member of our team has before touching your garment.",
    cardImage:
      "https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/card_03.jpg",
    cardsTitle: "20 year minimum...",
  },
  {
    cardDiscription: "...are fixed by fingertips on garments made by machines.",
    cardImage:
      "https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/card_04.jpg",
    cardsTitle: "85% OF OUR REPAIRS...",
  },
  {
    cardDiscription:
      "... under our belt to become master restorers. Chunky knit to the finest summer weight, we stitch it all!",
    cardImage:
      "https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/card_05.jpg",
    cardsTitle: "10 MILLION STITCHES",
  },
  {
    cardDiscription:
      "of repair requests are on botched repairs (aren't you glad you found us first?)",
    cardImage:
      "https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/card_06.jpg",
    cardsTitle: "ALMOST 40%",
  },
];

function HoverCard() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index: any) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      {TotalCards.map((cards, index) => (
        <CardContainer
          onMouseEnter={() => handleCardHover(index)}
          onMouseLeave={handleCardLeave}
        >
          <InnerCard isFlipped={hoveredCard === index}>
            <CardFace className="front">
              <Box
                borderRadius={"40px"}
                bgcolor={"#df7c6d"}
                display={"flex"}
                flexDirection={"column"}
              >
                <CardImage src={cards.cardImage} alt="card" loading="lazy" />
                <p style={{ fontSize: "16px", padding: "1rem" }}>
                  {cards.cardDiscription}
                </p>
              </Box>
            </CardFace>
            <BackFace className="back">
              <Box>
                <Typography
                  padding={3}
                  lineHeight={1.1}
                  textAlign={"left"}
                  color={"#df7c6d"}
                  fontSize={"75px"}
                  fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                >
                  {cards.cardsTitle}
                </Typography>
              </Box>
            </BackFace>
          </InnerCard>
        </CardContainer>
      ))}
    </>
  );
}

export default HoverCard;
