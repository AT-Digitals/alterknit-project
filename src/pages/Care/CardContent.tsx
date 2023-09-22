import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import styled from "@emotion/styled";

const CardContainer = styled.div`
  perspective: 1000px;
  width: 300px;
  height: 200px;
  position: relative;
`;

const InnerCard = styled.div`
  position: relative;
  width: 300px; /* Fixed width for both faces */
  height: 410px; /* Fixed height for both faces */
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props: { isFlipped: any }) =>
    props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const CardFace = styled.div`
  width: 100%;
  height: 100%;
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
  max-width: 100%;
  max-height: 100%;
  border-radius: 40px;
  border: 8px solid #df7c6d;
  height: 100%;
  object-fit: cover;
`;

function HoverCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardHover}
    >
      <InnerCard isFlipped={isFlipped}>
        <CardFace className="front">
          <Box
            borderRadius={"40px"}
            bgcolor={"#df7c6d"}
            display={"flex"}
            flexDirection={"column"}
          >
            <CardImage
              src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/card_01.jpg"
              alt="card"
              loading="lazy"
            />
            <p style={{ fontSize: "16px" }}>
              ...saved from the landfill, back in wardrobes (and counting!)
            </p>
          </Box>
        </CardFace>
        <BackFace className="back">
          <Typography
            padding={3}
            textAlign={"left"}
            color={"df7c6d"}
            fontSize={"75px"}
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
          >
            30 THOUSAND GARMENTS...
          </Typography>
        </BackFace>
      </InnerCard>
    </CardContainer>
  );
}

export default HoverCard;
