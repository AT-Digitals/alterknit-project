import { Box, TextField, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";

import AppContainer from "../../../component/AppContainer";
import ShipCard from "./ShipCard";
import routes from "../../../routes/routes";
import { useNavigate } from "react-router-dom";

const CustomTextField = styled(TextField)`
  && {
    & fieldset {
      border: none !important;
      font-size: 20px;
    }

    input {
      padding: 2rem;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const routeChange = () => {
    let path = routes.MORE_DETAILS;
    navigate(path);
  };

  const handleNextButtonClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.color) {
      alert("INFORMATION REQUIRED:-\n what color is your garment?");
    } else if (!formData.howMany) {
      alert("INFORMATION REQUIRED:-\n How many visible holes are there");
    } else if (!formData.brand) {
      alert("INFORMATION REQUIRED:-\n What brand is your garment");
    } else if (!formData.HowLong) {
      alert("INFORMATION REQUIRED:-\n How long have you owned this garment?");
    } else if (!formData.brief) {
      alert(
        "INFORMATION REQUIRED:-\n Brief description of repair needed and/or any other important imformaton for us"
      );
    } else {
      routeChange();
    }

    let result = await fetch("https://alterknit-backend.onrender.com/service-details", {
      method: "post",
      body: JSON.stringify({
        color: formData.color,
        visibleHoles: formData.howMany,
        brand: formData.brand,
        howLong: formData.HowLong,
        brief: formData.brief,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = {
      color: formData.color,
      HowMany: formData.howMany,
      brand: formData.brand,
      HowLong: formData.HowLong,
      brief: formData.brief,
    };
    console.log(data);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Box
        bgcolor={"#f8f1ec"}
        display={"flex"}
        flexDirection={"column"}
        padding={"3rem 0 0 0"}
      >
        <Box
          maxWidth={1440}
          m={"0 auto"}
          padding={{ xs: "0 1rem", md: "0 10rem" }}
        >
          <Typography
            textAlign={"center"}
            fontSize={{ xs: "40px", md: "80px" }}
            fontWeight={500}
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            textTransform={"lowercase"}
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
      <Box padding={"6rem 0 2rem 0"}>
        <Box width={"100%"} maxWidth={1440} m={"0 auto"}>
          <AppContainer pl={0}>
            <Box maxWidth={1440} padding={{ xs: "0 1rem" }}>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4rem",
                }}
              >
                {" "}
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography
                    fontSize={{ xs: "28px", md: "45px" }}
                    fontWeight={500}
                    textTransform={"lowercase"}
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                    marginBottom={3}
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
                    fontWeight={500}
                    textTransform={"lowercase"}
                    marginBottom={3}
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
                    fontWeight={500}
                    textTransform={"lowercase"}
                    marginBottom={3}
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
                    fontWeight={500}
                    textTransform={"lowercase"}
                    marginBottom={3}
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
                    fontWeight={500}
                    textTransform={"lowercase"}
                    lineHeight={1}
                    marginBottom={4}
                  >
                    5. BRIEF DESCRIPTION OF REPAIR NEEDED AND/OR ANY <br />{" "}
                    OTHER IMPORTANT INFORMATION FOR US*
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
                <ShipCard
                  link={routes.SHIPIN}
                  onClick={handleNextButtonClick}
                />
              </form>
            </Box>
          </AppContainer>
        </Box>
      </Box>
    </Box>
  );
}
