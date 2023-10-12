import { Box, Button, Stack, Typography, styled } from "@mui/material";

import Colors from "../../../CommonComponent/Colors";
import CustomDialog from "../../../Popup/Popup";
import ShipCard from "./ShipCard";
import bgmore from "../../../assets/bg_syr_more_info.svg";
import moreDetails from "./moreDetails";
import { useState } from "react";

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
  textTransform: "lowercase",
  ":hover": {
    backgroundColor: Colors.LINK,
  },
});

interface moreprops {
  nextStep: (value: any) => void;
  prevStep: () => void;
  moreDetails: moreDetails;
  setMoreDetails: (data: moreDetails) => void;
}

export default function MoreDetailsPage({
  nextStep,
  prevStep,
  moreDetails,
  setMoreDetails,
}: moreprops) {
  // const [previousClean, setPreviousClean] = useState("");
  // const [latestClean, setLatestClean] = useState("");
  const [error, setError] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOptionClick = (
    optionType: "previous_service" | "latest_service",
    option: string
  ) => {
    setMoreDetails({ ...moreDetails, [optionType]: option });
  };

  const handleNextButtonClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = {
      previous: moreDetails.previous_service,
      recent: moreDetails.latest_service,
    };
    console.log("data", values);

    if (!moreDetails.previous_service) {
      setError(
        "INFORMATION REQUIRED:-\n Has this garment been previously repaired by a dry cleaner or another individual?"
      );
      setIsDrawerOpen(true);
    } else if (!moreDetails.latest_service) {
      setError(
        "INFORMATION REQUIRED:-\n Has this grament been recently cleaned?"
      );
      setIsDrawerOpen(true);
    } else {
      nextStep("repair");
    }
  };

  const handleCloseModal = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Stack
        gap={22}
        sx={{
          backgroundImage: `url(${bgmore})`,
          backgroundSize: "104%",
          backgroundPosition: "center",
        }}
      >
        <Stack
          paddingY={6}
          maxWidth={1300}
          margin="0 auto"
          justifyContent="center"
          direction="column"
          spacing={3}
          alignItems="center"
        >
          <Typography
            fontWeight={500}
            fontSize="5rem"
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            textTransform={"lowercase"}
            textAlign="center"
            pb={3}
          >
            just a few more details...
          </Typography>
          <Typography
            fontWeight={500}
            fontSize="3rem"
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            textAlign="center"
            lineHeight={1}
            maxWidth={900}
            textTransform={"lowercase"}
          >
            8. has this garment been previously repaired by a dry cleaner or
            another individual?
          </Typography>
          <Stack
            direction="row"
            spacing={6}
            alignItems="center"
            justifyContent="center"
            pt={3}
            pb={3}
          >
            <StyleButtonNew
              value="yes"
              defaultChecked={moreDetails.previous_service === "yes"}
              onClick={() => handleOptionClick("previous_service", "yes")}
              style={{
                backgroundColor:
                  moreDetails.previous_service === "yes" ? Colors.LINK : "",
                transform:
                  moreDetails.previous_service === "yes" ? `scale(1.05)` : "",
              }}
            >
              Yes
            </StyleButtonNew>
            <StyleButtonNew
              value="no"
              style={{
                backgroundColor:
                  moreDetails.previous_service === "no" ? Colors.LINK : "",
                transform:
                  moreDetails.previous_service === "no" ? `scale(1.05)` : "",
              }}
              defaultChecked={moreDetails.previous_service === "no"}
              onClick={() => handleOptionClick("previous_service", "no")}
            >
              NO
            </StyleButtonNew>
          </Stack>
        </Stack>
        <Stack
          pb={5}
          pt={10}
          maxWidth={1300}
          margin="0 auto"
          justifyContent="center"
          direction="column"
          spacing={3}
          alignItems="center"
        >
          <Box>
            <Typography
              fontWeight={500}
              fontSize="3rem"
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              textAlign="center"
              textTransform={"lowercase"}
            >
              9. has this garment been recently cleaned?
            </Typography>
            <Typography
              textAlign="center"
              maxWidth={750}
              fontSize="16px"
              lineHeight={1.2}
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              fontWeight={500}
            >
              Cleaning will only make holes bigger and incur higher repair cost.
              Please let us examine your garment first. If the garment has
              already been cleaned before you found us, don't worry.
            </Typography>
          </Box>
          <Stack
            direction="row"
            spacing={6}
            alignItems="center"
            justifyContent="center"
            pt={3}
            pb={6}
          >
            <StyleButtonNew
              value="yes"
              defaultChecked={moreDetails.latest_service === "yes"}
              onClick={() => handleOptionClick("latest_service", "yes")}
              style={{
                backgroundColor:
                  moreDetails.latest_service === "yes" ? Colors.LINK : "",
                transform:
                  moreDetails.latest_service === "yes" ? `scale(1.05)` : "",
              }}
            >
              Yes
            </StyleButtonNew>
            <StyleButtonNew
              value="no"
              defaultChecked={moreDetails.latest_service === "no"}
              onClick={() => handleOptionClick("latest_service", "no")}
              style={{
                backgroundColor:
                  moreDetails.latest_service === "no" ? Colors.LINK : "",
                transform:
                  moreDetails.latest_service === "no" ? `scale(1.05)` : "",
              }}
            >
              NO
            </StyleButtonNew>
          </Stack>
          <ShipCard onChange={prevStep} onClick={handleNextButtonClick} />
        </Stack>
      </Stack>
      <CustomDialog
        isOpen={isDrawerOpen}
        message={error}
        onClose={handleCloseModal}
      />
    </>
  );
}
