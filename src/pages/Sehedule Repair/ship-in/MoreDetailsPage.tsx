import { Box, Button, Stack, Typography, styled } from "@mui/material";
import Colors from "../../../CommonComponent/Colors";
import bgmore from "../../../assets/bg_syr_more_info.svg";
import ShipCard from "./ShipCard";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes/routes";
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
}

export default function MoreDetailsPage({ nextStep, prevStep }: moreprops) {
    const [previousClean, setPreviousClean] = useState("");
    const [latestClean, setLatestClean] = useState("");

    const navigate = useNavigate();

    const routeChange = () => {
        let path = routes.REPAIR_PAGE;
        navigate(path);
    };

    const handleNextButtonClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let result = await fetch(
            'https://alterknit-backend.onrender.com/more-details', {
            method: "post",
            body: JSON.stringify({
                previous: previousClean,
                latest: latestClean,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const values = {
            previous: previousClean,
            recent: latestClean,
        }
        console.log("data", values);

        if (!previousClean) {
            alert(
                "INFORMATION REQUIRED:-\n Has this garment been previously repaired by a dry cleaner or another individual?"
            );
        } else if (!latestClean) {
            alert("INFORMATION REQUIRED:-\n Has this grament been recently cleaned?");
        } else {
            nextStep("repair");
        }
    };

    return (
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
                        defaultChecked={previousClean === "yes"}
                        onClick={() => setPreviousClean("yes")}
                        style={{
                            backgroundColor: previousClean === "yes"
                                ? Colors.LINK
                                : "",
                            transform: previousClean === "yes" ? `scale(1.05)` : ""
                        }}
                    >
                        Yes
                    </StyleButtonNew>
                    <StyleButtonNew
                        value="no"
                        style={{
                            backgroundColor: previousClean === "no"
                                ? Colors.LINK
                                : "",
                            transform: previousClean === "no" ? `scale(1.05)` : ""
                        }}
                        defaultChecked={previousClean === "no"}
                        onClick={() => setPreviousClean("no")}
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
                    <Typography textAlign="center" maxWidth={750} fontSize="16px">
                        Cleaning will only make holes bigger and incur higher repair cost.
                        Please let us examine your garment first. If the garment has already
                        been cleaned before you found us, don't worry.
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
                        defaultChecked={latestClean === "yes"}
                        onClick={() => setLatestClean("yes")}
                        style={{
                            backgroundColor: latestClean === "yes"
                                ? Colors.LINK
                                : "",
                            transform: latestClean === "yes" ? `scale(1.05)` : ""
                        }}
                    >
                        Yes
                    </StyleButtonNew>
                    <StyleButtonNew
                        value="no"
                        defaultChecked={latestClean === "no"}
                        onClick={() => setLatestClean("no")}
                        style={{
                            backgroundColor: latestClean === "no"
                                ? Colors.LINK
                                : "",
                            transform: latestClean === "no" ? `scale(1.05)` : ""
                        }}
                    >
                        NO
                    </StyleButtonNew>
                </Stack>
                <ShipCard
                    onChange={prevStep}
                    onClick={handleNextButtonClick}
                />
            </Stack>
        </Stack>
    );
}
