import { Box, TextField, Typography, styled } from "@mui/material";

import AppContainer from "../../component/AppContainer";
import CustomButton from "../../CommonComponent/CustomButton";
import { useState } from "react";

const CustomTextField = styled(TextField)`
  && {
    & fieldset {
      border: none !important;
      font-size: 20px;
    }

    input {
      padding: 1.5rem;
      background-color: #f8f1ec;
      border-radius: 30px;
      font-family: Proxima Nova, sans-serif;
      font-size: 16px;
      border: none !important;
    }
  }
`;

interface HoverProps {
  Ishoverd?: boolean;
}

export default function ShipinFields({ Ishoverd }: HoverProps) {
  const [formData, setFormData] = useState({
    color: "",
    howMany: "",
    brand: "",
    HowLong: "",
    brief: "",
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseNextEnter = () => {
    setIsHovered1(true);
  };

  const handleMouseNextLeave = () => {
    setIsHovered1(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      color: formData.color,
      howMany: formData.howMany,
      brand: formData.brand,
      HowLong: formData.HowLong,
      brief: formData.brief,
    };
    console.log(data);
  };

  return (
    <Box>
      <Box
        bgcolor={"#f8f1ec"}
        display={"flex"}
        flexDirection={"column"}
        padding={"4rem 0 0 0"}
      >
        <Box
          maxWidth={1440}
          m={"0 auto"}
          padding={{ xs: "0 1rem", md: "0 10rem" }}
        >
          <Typography
            textAlign={"center"}
            fontSize={{ xs: "40px", md: "70px" }}
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
          >
            WE'VE SEEN IT ALL, BUT WE HAVE TO ASK
          </Typography>
        </Box>
      </Box>
      <img
        src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_stage_header.svg"
        alt="background"
        style={{ width: "100%" }}
      />
      <Box padding={"4rem 0 6rem 0"}>
        <Box width={"100%"} maxWidth={1440} m={"0 auto"}>
          <AppContainer pl={0}>
            <Box maxWidth={1440} padding={{ xs: "0 1rem", md: "0 10rem" }}>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography
                    fontSize={{ xs: "28px", md: "45px" }}
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                  >
                    1. WHAT COLOR IS YOUR GARMENT?*
                  </Typography>
                  <CustomTextField
                    value={formData.color}
                    name="color"
                    onChange={handleChange}
                    fullWidth
                    placeholder="I know I can buy a new one, but I love this green color."
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography
                    fontSize={{ xs: "28px", md: "45px" }}
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                  >
                    2. HOW MANY VISIBLE HOLES ARE THERE?*
                  </Typography>
                  <CustomTextField
                    value={formData.howMany}
                    name="howMany"
                    onChange={handleChange}
                    fullWidth
                    placeholder="I see three holes around the collar of the shirt."
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography
                    fontSize={{ xs: "28px", md: "45px" }}
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                  >
                    3. WHAT BRAND IS YOUR GARMENT?*
                  </Typography>
                  <CustomTextField
                    value={formData.brand}
                    onChange={handleChange}
                    name="brand"
                    fullWidth
                    placeholder="All brands are welcome!"
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography
                    fontSize={{ xs: "28px", md: "45px" }}
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                  >
                    4. HOW LONG HAVE YOU OWNED THIS GARMENT?*
                  </Typography>
                  <CustomTextField
                    name="HowLong"
                    value={formData.HowLong}
                    onChange={handleChange}
                    fullWidth
                    placeholder="Since before the internet..."
                    variant="outlined"
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography
                    textAlign={"center"}
                    fontSize={{ xs: "28px", md: "45px" }}
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                  >
                    5. BRIEF DESCRIPTION OF REPAIR NEEDED AND/OR ANY OTHER
                    IMPORTANT INFORMATION FOR US*
                  </Typography>
                  <CustomTextField
                    value={formData.brief}
                    onChange={handleChange}
                    name="brief"
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="i.e. My grandmother made this for me, I got married in this suit, please fix my baby blanket even though I'm now 38, I bought this second-hand and I found a hole, or I just love it and can't live without it!"
                    variant="outlined"
                    sx={{
                      padding: "1rem",
                      backgroundColor: "#f8f1ec",
                      borderRadius: "30px",
                      fontFamily: "Proxima Nova, sans-serif",
                      fontSize: "30px",
                    }}
                  />
                </Box>
                <Box display={"flex"} gap={"2rem"} justifyContent="center">
                  <CustomButton
                    sx={{ borderRadius: "6px", maxWidth: 150, height: 50 }}
                    color={isHovered ? "white" : "#df7c6d"}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    bgColor={isHovered ? "#df7c6d" : "#f8f1eb"}
                  >
                    Back
                  </CustomButton>
                  <CustomButton
                    sx={{ borderRadius: "6px", maxWidth: 150, height: 50 }}
                    color={isHovered1 ? "white" : "black"}
                    onMouseEnter={handleMouseNextEnter}
                    onMouseLeave={handleMouseNextLeave}
                    bgColor={isHovered1 ? "#df7c6d" : "#f8f1eb"}
                    type="submit"
                  >
                    Next
                  </CustomButton>
                </Box>
              </form>
            </Box>
          </AppContainer>
        </Box>
      </Box>
    </Box>
  );
}