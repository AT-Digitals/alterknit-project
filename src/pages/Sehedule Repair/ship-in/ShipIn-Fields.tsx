import { Box, TextField, Typography, styled } from "@mui/material";

import AppContainer from "../../../component/AppContainer";
import React from "react";
import ShipCard from "./ShipCard";
import serviceDetails from "./serviceDetails";
import { useEffect } from "react";

// import routes from "../../../routes/routes";
// import { useNavigate } from "react-router-dom";

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
      font-family: "ProximaNovaSemibold", sans-serif;
      font-weight: 600;
      font-size: 22px;
      border: none !important;
    }
  }
`;

interface HoverProps {
  Ishoverd?: boolean;
  nextStep: () => void;
  prevStep: () => void;
  serviceFormData: serviceDetails;
  setServiceFormData: (service: serviceDetails) => void;
}

export default function ShipinFields({
  Ishoverd,
  nextStep,
  prevStep,
  serviceFormData,
  setServiceFormData,
}: HoverProps) {
  const initialErrors = {
    color: "",
    visible_holes: "",
    brand: "",
    howMany: "",
    brief: "",
  };
  const [errors, setErrors] = React.useState(initialErrors);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setServiceFormData({ ...serviceFormData, [name]: value });
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleNextButtonClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = { ...initialErrors };

    if (!serviceFormData.color) {
      newErrors.color = "INFORMATION REQUIRED: What color is your garment?";
      hasError = true;
    }
    if (!serviceFormData.visible_holes) {
      newErrors.visible_holes =
        "INFORMATION REQUIRED: How many visible holes are there?";
      hasError = true;
    }

    if (!serviceFormData.brand) {
      newErrors.brand = "INFORMATION REQUIRED: What brand is your garment?";
      hasError = true;
    }

    if (!serviceFormData.howMany) {
      newErrors.howMany =
        "INFORMATION REQUIRED: How long you've owned this garment?";
      hasError = true;
    }

    if (!serviceFormData.brief) {
      newErrors.brief = "INFORMATION REQUIRED: Brief description is required";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      nextStep();
    }
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
        paddingTop={"3rem"}
        pb={{ xs: 2, sm: 1 }}

      >
        <Box
          maxWidth={1440}
          m={"0 auto"}
          padding={{ xs: "0 2rem", md: "0 5rem", lg: "0 10rem" }}
        >
          <Typography
            textAlign={"center"}
            fontSize={{ xs: "45px", sm: "80px", md: "80px" }}
            lineHeight={1}
            fontWeight={500}
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            textTransform={"lowercase"}
          >
            WE'VE SEEN IT ALL, BUT WE HAVE TO ASK...
          </Typography>
        </Box>
      </Box>
      <img
        src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_stage_header.svg"
        alt="background"
        style={{ width: "100%" }}
      />
      <Box paddingTop={{ xs: "3rem", sm: "6rem" }} pb="2rem">
        <Box width={"100%"} maxWidth={1440} m={"0 auto"}>
          <AppContainer pl={0} pr={0}>
            <Box
              maxWidth={1440}
              paddingX={{
                xs: 3,
                sm: 3,
                md: 3,
                lg: 0,
              }}
            >
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
                    fontSize={{ xs: "28px", sm: "45px", md: "45px" }}
                    fontWeight={500}
                    textTransform={"lowercase"}
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                    marginBottom={3}
                  >
                    1. WHAT COLOR IS YOUR GARMENT?*
                  </Typography>
                  <CustomTextField
                    value={serviceFormData.color}
                    name="color"
                    onChange={handleChange}
                    fullWidth
                    placeholder="I know I can buy a new one, but I love this green color."
                    sx={{
                      "& input::placeholder": {
                        fontSize: "20px",
                        fontFamily: `"ProximaNovaMedium", sans-serif`,
                        fontWeight: 500,
                      },
                    }}
                    error={!!errors.color}
                    helperText={errors.color}
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography
                    fontSize={{ xs: "28px", sm: "45px", md: "45px" }}
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                    fontWeight={500}
                    textTransform={"lowercase"}
                    marginBottom={3}
                  >
                    2. HOW MANY VISIBLE HOLES ARE THERE?*
                  </Typography>
                  <CustomTextField
                    value={serviceFormData.visible_holes}
                    name="visible_holes"
                    onChange={handleChange}
                    fullWidth
                    placeholder="I see three holes around the collar of the shirt."
                    sx={{
                      "& input::placeholder": {
                        fontSize: "20px",
                        fontFamily: `"ProximaNovaMedium", sans-serif`,
                        fontWeight: 500,
                      },
                    }}
                    error={!!errors.visible_holes}
                    helperText={errors.visible_holes}
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography
                    fontSize={{ xs: "28px", sm: "45px", md: "45px" }}
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                    fontWeight={500}
                    textTransform={"lowercase"}
                    marginBottom={3}
                  >
                    3. WHAT BRAND IS YOUR GARMENT?*
                  </Typography>
                  <CustomTextField
                    value={serviceFormData.brand}
                    onChange={handleChange}
                    name="brand"
                    fullWidth
                    placeholder="All brands are welcome!"
                    sx={{
                      "& input::placeholder": {
                        fontSize: "20px",
                        fontFamily: `"ProximaNovaMedium", sans-serif`,
                        fontWeight: 500,
                      },
                    }}
                    error={!!errors.brand}
                    helperText={errors.brand}
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography
                    fontSize={{ xs: "28px", sm: "45px", md: "45px" }}
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                    fontWeight={500}
                    textAlign={{ xs: "center" }}
                    textTransform={"lowercase"}
                    marginBottom={3}
                  >
                    4. HOW LONG HAVE YOU OWNED THIS GARMENT?*
                  </Typography>
                  <CustomTextField
                    name="howMany"
                    value={serviceFormData.howMany}
                    onChange={handleChange}
                    fullWidth
                    placeholder="Since before the internet..."
                    variant="outlined"
                    sx={{
                      "& input::placeholder": {
                        fontSize: "20px",
                        fontFamily: `"ProximaNovaMedium", sans-serif`,
                        fontWeight: 500,
                      },
                    }}
                    error={!!errors.howMany}
                    helperText={errors.howMany}
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography
                    textAlign={"center"}
                    fontSize={{ xs: "28px", sm: "43px", md: "45px" }}
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
                    value={serviceFormData.brief}
                    onChange={handleChange}
                    name="brief"
                    fullWidth
                    multiline
                    rows={6}
                    placeholder="i.e. My grandmother made this for me, I got married in this suit, please fix my baby blanket even though I'm now 38, I bought this second-hand and I found a hole, or I just love it and can't live without it!"
                    variant="outlined"
                    sx={{
                      "& ::placeholder": {
                        fontSize: "20px",
                        fontFamily: `"ProximaNovaSemibold", sans-serif`,
                        fontWeight: 500,
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        paddingTop: "20px"
                      },
                      "& .MuiOutlinedInput-input": {
                        fontSize: "22px",
                        fontFamily: `"ProximaNovaSemibold", sans-serif`,
                        fontWeight: 500,
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        //paddingTop: "20px"
                      },
                      backgroundColor: "#f8f1ec",
                      borderRadius: "30px",
                      fontFamily: `"ProximaNovaSemibold", sans-serif !important`,
                      fontWeight: 600,
                      fontSize: "22px !important",
                    }}
                    error={!!errors.brief}
                    helperText={errors.brief}
                  />
                </Box>
                <ShipCard onClick={handleNextButtonClick} onChange={prevStep} />
              </form>
            </Box>
          </AppContainer>
        </Box>
      </Box>
    </Box>
  );
}
