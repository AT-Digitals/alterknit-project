import { Button, Stack, Typography, styled } from "@mui/material";
import Colors from "../../../CommonComponent/Colors";
import CustomButton from "../../../CommonComponent/CustomButton";
import bgmore from "../../../assets/bg_syr_more_info.svg";
import ShipCard from "./ShipCard";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../../routes/routes";
import { useState } from "react";

const StyledButton = styled(CustomButton)({
    fontWeight: 400,
    fontSize: "1.5rem",
    fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
    padding: "30px",
    width: "270px",
    height: "200px",
    borderRadius: "30px",
    backgroundColor: Colors.HOME_BACKGROUND,
    color: Colors.BLACK,
    boxShadow: "none",
    ":hover": {
        backgroundColor: Colors.LINK,
    },
});

const StyledButtom1 = styled(CustomButton)({
    fontSize: "20px",
    borderRadius: "8px",
    padding: "10px 20px",
    textTransform: "none",
    boxShadow: "none",
    width: "30px",
    margin: "10px  auto 0px",
    ":hover": {
        color: Colors.WHITE,
    },
});

const StyleButtonNew = styled(Button)({
    color: Colors.BLACK,
    backgroundColor: Colors.HOME_BACKGROUND,
    fontWeight: 400,
    fontSize: "2.5rem",
    fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
    padding: "30px",
    width: "270px",
    height: "200px",
    borderRadius: "30px",
    ":hover": {
        backgroundColor: Colors.LINK,
    },
});

export default function MoreDetailsPage() {
    const [previousClean, setPreviousClean] = useState("");
    const [latestClean, setLatestClean] = useState("");

    const navigate = useNavigate();

    const routeChange = () => {
        let path = routes.REPAIR_PAGE;
        navigate(path);
    };

    const handleNextButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!previousClean) {
            alert(
                "INFORMATION REQUIRED:-\n Has this garment been previously repaired by a dry cleaner or another individual?"
            );
        } else if (!latestClean) {
            alert("INFORMATION REQUIRED:-\n Has this grament been recently cleaned?");
        } else {
            routeChange();
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
                paddingY={5}
                maxWidth={1300}
                margin="0 auto"
                justifyContent="center"
                direction="column"
                spacing={3}
                alignItems="center"
            >
                <Typography
                    fontWeight={400}
                    fontSize="5rem"
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                    textAlign="center"
                    pb={2}
                >
                    just a few more details...
                </Typography>
                <Typography
                    fontWeight={400}
                    fontSize="3.5rem"
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                    textAlign="center"
                    lineHeight={1}
                    maxWidth={900}
                >
                    8. has this garment been previously repaired by a dry cleaner or
                    another individual?
                </Typography>
                <Stack
                    direction="row"
                    spacing={5}
                    alignItems="center"
                    justifyContent="center"
                    pt={2}
                    pb={2}
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
                <Typography
                    fontWeight={400}
                    fontSize="3.5rem"
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                    textAlign="center"
                    lineHeight={1}
                >
                    9. has this garment been recently cleaned?
                </Typography>
                <Typography textAlign="center" maxWidth={850}>
                    Cleaning will only make holes bigger and incur higher repair cost.
                    Please let us examine your garment first. If the garment has already
                    been cleaned before you found us, don't worry.
                </Typography>
                <Stack
                    direction="row"
                    spacing={5}
                    alignItems="center"
                    justifyContent="center"
                    pt={2}
                    pb={10}
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
                    link={routes.SHIP_IN_FIELDS}
                    onClick={handleNextButtonClick}
                />
            </Stack>
        </Stack>
    );
}
