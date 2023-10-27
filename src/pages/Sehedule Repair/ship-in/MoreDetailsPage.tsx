import {
  Box,
  Button,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

import Colors from "../../../CommonComponent/Colors";
import ShipCard from "./ShipCard";
import bgmore from "../../../assets/bg_syr_more_info.svg";
import moreDetails from "./moreDetails";

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
  const handleOptionClick = (
    optionType: "previous_service" | "latest_service",
    option: string
  ) => {
    setMoreDetails({ ...moreDetails, [optionType]: option });
  };
  const isXsScreen = useMediaQuery("(max-width:600px)");

  const handleNextButtonClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = {
      previous: moreDetails.previous_service,
      recent: moreDetails.latest_service,
    };

    if (!moreDetails.previous_service) {
      alert(
        "INFORMATION REQUIRED:-\n Has this garment been previously repaired by a dry cleaner or another individual?"
      );
    } else if (!moreDetails.latest_service) {
      alert("INFORMATION REQUIRED:-\n Has this grament been recently cleaned?");
    } else {
      nextStep("repair");
    }
  };

  const StyleButtonNew = styled(Button)({
    color: Colors.BLACK,
    backgroundColor: Colors.HOME_BACKGROUND,
    fontWeight: 500,
    fontSize: "2.5rem",
    fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
    padding: isXsScreen ? "15px" : "30px",
    width: isXsScreen ? "90%" : "270px",
    height: isXsScreen ? "90px" : "200px",
    borderRadius: "30px",
    textTransform: "lowercase",
    ":hover": {
      backgroundColor: Colors.LINK,
    },
  });
  return (
    <>
      <Stack
        gap={isXsScreen ? "3rem" : 22}
        sx={{
          backgroundImage: isXsScreen ? undefined : `url(${bgmore})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Stack
          paddingY={isXsScreen ? undefined : 6}
          maxWidth={1300}
          margin="0 auto"
          justifyContent="center"
          direction="column"
          spacing={3}
          alignItems="center"
        >
          <Typography
            pt={isXsScreen ? "2rem" : undefined}
            fontWeight={500}
            fontSize={isXsScreen ? "48px" : "5rem"}
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            textTransform={"lowercase"}
            textAlign="center"
            lineHeight={isXsScreen ? 1 : 1.5}
            pb={3}
          >
            just a few more details...
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={isXsScreen ? "36px" : "3rem"}
            padding={isXsScreen ? "10px" : undefined}
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
            width={isXsScreen ? "90%" : undefined}
            direction={isXsScreen ? "column" : "row"}
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
          pt={isXsScreen ? undefined : 10}
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
              fontSize={isXsScreen ? "44px" : "3rem"}
              padding={isXsScreen ? "10px" : undefined}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              textAlign="center"
              textTransform={"lowercase"}
              lineHeight={isXsScreen ? 1 : 1.5}
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
              padding={isXsScreen ? "10px" : undefined}
            >
              Cleaning will only make holes bigger and incur higher repair cost.
              Please let us examine your garment first. If the garment has
              already been cleaned before you found us, don't worry.
            </Typography>
          </Box>
          <Stack
            width={isXsScreen ? "90%" : undefined}
            direction={isXsScreen ? "column" : "row"}
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
    </>
  );
}
