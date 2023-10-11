import { Button, Grid, Stack, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";

import Colors from "../../../CommonComponent/Colors";
import CustomDialog from "../../../Popup/Popup";
import ShipCard from "./ShipCard";

const StyleButtonNew = styled(Button)({
  color: Colors.BLACK,
  backgroundColor: Colors.HOME_BACKGROUND,
  fontWeight: 500,
  fontSize: "2.5rem",
  fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
  padding: "30px",
  width: "270px",
  height: "200px",
  borderRadius: "30px",
  lineHeight: 1,
  textTransform: "lowercase",
  ":hover": {
    backgroundColor: Colors.LINK,
  },
});

interface shipinprops {
  nextStep: () => void;
  prevStep: () => void;
  selectedButtons: string[];
  setSelectedButtons: (text: string[]) => void;
}

export default function ShipInPage({
  nextStep,
  prevStep,
  selectedButtons,
  setSelectedButtons,
}: shipinprops) {
  // const [selectedButtons, setSelectedButtons] = useState(serviceDetails.services.name);

  const handleButtonClick = (buttonIndex: string) => {
    if (selectedButtons.includes(buttonIndex)) {
      setSelectedButtons(
        selectedButtons.filter((index) => index !== buttonIndex)
      );
    } else {
      setSelectedButtons([...selectedButtons, buttonIndex]);
    }
  };

  const [error, setError] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNextButtonClick = async (e: any) => {
    e.preventDefault();

    const selectedList = {
      value: selectedButtons,
    };
    console.log("sfsg", selectedList);

    // const stringifiedArray = JSON.stringify(selectedButtons);

    // let result = await fetch("https://alterknit-backend.onrender.com/service-item", {
    //   method: "post",
    //   body: stringifiedArray,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    if (selectedButtons.length > 0) {
      nextStep();
    } else {
      setError("Please select a service first");
      setIsDrawerOpen(true);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCloseModal = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Stack
      pt={7}
      maxWidth={1300}
      margin="0 auto"
      justifyContent="center"
      direction="column"
      pb={4}
    >
      <Typography
        fontWeight={500}
        fontSize="80px"
        fontFamily={"IndustrialGothicBannerStd, sans-serif"}
        textAlign="center"
        textTransform={"lowercase"}
        lineHeight={1.2}
      >
        let's start with your first item!
      </Typography>
      <Typography
        textAlign="center"
        maxWidth={670}
        margin="0 auto"
        fontFamily={`"ProximaNovaMedium", sans-serif`}
        fontWeight={500}
        sx={{
          padding: "15px 20px",
          border: `5px solid ${Colors.LINK}`,
          borderRadius: "20px",
          backgroundColor: Colors.HOME_BACKGROUND,
        }}
      >
        You will be able to add as many items as you like and to select multiple
        services per item.
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        pt={10}
        fontFamily={`"ProximaNovaMedium", sans-serif`}
        fontWeight={500}
      >
        Please choose at least one service
      </Typography>
      <Grid container rowGap={5} paddingX={3} pb={5} pt={2}>
        <Grid item xs={3}>
          <StyleButtonNew
            onClick={() => handleButtonClick("reweaving for knits")}
            style={{
              backgroundColor: selectedButtons.includes("reweaving for knits")
                ? Colors.LINK
                : "",
              transform: selectedButtons.includes("reweaving for knits")
                ? `scale(1.05)`
                : "",
            }}
          >
            reknitting for knits
          </StyleButtonNew>
        </Grid>
        <Grid item xs={3}>
          <StyleButtonNew
            onClick={() => handleButtonClick("reweaving for suits")}
            style={{
              backgroundColor: selectedButtons.includes("reweaving for suits")
                ? Colors.LINK
                : "",
              transform: selectedButtons.includes("reweaving for suits")
                ? `scale(1.05)`
                : "",
            }}
          >
            reweaving for suits
          </StyleButtonNew>
        </Grid>
        <Grid item xs={3}>
          <StyleButtonNew
            onClick={() => handleButtonClick("knit alteration")}
            style={{
              backgroundColor: selectedButtons.includes("knit alteration")
                ? Colors.LINK
                : "",
              transform: selectedButtons.includes("knit alteration")
                ? `scale(1.05)`
                : "",
            }}
          >
            knit alteration
          </StyleButtonNew>
        </Grid>
        <Grid item xs={3}>
          <StyleButtonNew
            onClick={() => handleButtonClick("other fabric repair")}
            style={{
              backgroundColor: selectedButtons.includes("other fabric repair")
                ? Colors.LINK
                : "",
              transform: selectedButtons.includes("other fabric repair")
                ? `scale(1.05)`
                : "",
            }}
          >
            other fabric repair
          </StyleButtonNew>
        </Grid>
        <Grid item xs={3}>
          <StyleButtonNew
            onClick={() => handleButtonClick("cleaning")}
            style={{
              backgroundColor: selectedButtons.includes("cleaning")
                ? Colors.LINK
                : "",
              transform: selectedButtons.includes("cleaning")
                ? `scale(1.05)`
                : "",
            }}
          >
            cleaning
          </StyleButtonNew>
        </Grid>
        <Grid item xs={3}>
          <StyleButtonNew
            onClick={() => handleButtonClick("restyling")}
            style={{
              backgroundColor: selectedButtons.includes("restyling")
                ? Colors.LINK
                : "",
              transform: selectedButtons.includes("restyling")
                ? `scale(1.05)`
                : "",
            }}
          >
            restyling
          </StyleButtonNew>
        </Grid>
        <Grid item xs={3}>
          <StyleButtonNew
            onClick={() => handleButtonClick("de-pilling")}
            style={{
              backgroundColor: selectedButtons.includes("de-pilling")
                ? Colors.LINK
                : "",
              transform: selectedButtons.includes("de-pilling")
                ? `scale(1.05)`
                : "",
            }}
          >
            de-pilling
          </StyleButtonNew>
        </Grid>
        <Grid item xs={3}>
          <StyleButtonNew
            onClick={() => handleButtonClick("custom knit work")}
            style={{
              backgroundColor: selectedButtons.includes("custom knit work")
                ? Colors.LINK
                : "",
              transform: selectedButtons.includes("custom knit work")
                ? `scale(1.05)`
                : "",
            }}
          >
            custom knit work
          </StyleButtonNew>
        </Grid>
      </Grid>
      <ShipCard onClick={handleNextButtonClick} onChange={prevStep} />
      <CustomDialog
        isOpen={isDrawerOpen}
        onClose={handleCloseModal}
        message={error}
      />
    </Stack>
  );
}
