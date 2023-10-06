import { Box, Card, CardContent, Typography } from "@mui/material";
import ImageTop from "../../assets/services_services_bg_bottom.svg";
import SpeakerImage from "../../assets/speaker.png";
import StudioImage from "../../assets/studio.png";

export default function CardPage() {
    return (
        <>
            <img src={ImageTop} alt="top" />
            <Box paddingTop={"56px"}
                display={"flex"}
                justifyContent={"center"}
                sx={{
                    backgroundColor: "#df7c6d",
                }}
            >
                <Card
                    style={{
                        width: 1140,
                        marginBottom: "60px",
                        border: "1px solid white",
                        borderRadius: "20px",
                    }}
                >
                    <CardContent style={{
                        paddingTop: "25px",
                    }}>
                        <Box
                            margin={"5px 43px"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <Typography
                                marginTop={"45px"}
                                lineHeight={"0.5"}
                                color={"black"}
                                fontWeight={"500"}
                                fontSize={"3rem"}
                                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                                textTransform={"lowercase"}
                            >
                                CAN I GET A{" "}
                                <Typography
                                    color={"black"}
                                    fontWeight={"500"}
                                    fontSize={"3rem"}
                                    fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                                    textTransform={"lowercase"}
                                >
                                    BALLPARK?
                                </Typography>{" "}
                                <Typography
                                    fontStyle={"italic"}
                                    color={"#575656"}
                                    fontWeight={"500"}
                                    fontSize={"20px"}
                                    textTransform={"initial"}
                                >
                                   It's just one hole!
                                </Typography>
                            </Typography>
                            <Typography
                                lineHeight={"1.3"}
                                maxWidth={"676px"}
                                color={"black"}
                                fontWeight={"500"}
                                fontFamily={`"ProximaNovaMedium", sans-serif`}
                                fontSize={"22px"}
                                marginRight={"37px"}
                            >
                                We need to examine your entire item in our work studio because
                                we have been doing this for a very long time and what might
                                appear to you as a small hole could in reality be 17 small
                                holes! So please let us do our job. Your garments' examination
                                is complimentary.
                            </Typography>
                        </Box>
                        <Box display={"flex"} justifyContent={"right"}>
                            <Typography
                                marginBottom={"36px"}
                                marginRight={"48px"}
                                lineHeight={"1.3"}
                                maxWidth={"706px"}
                                color={"black"}
                                fontWeight={"500"}
                                fontFamily={`"ProximaNovaMedium", sans-serif`}
                                fontSize={"22px"}
                            >
                                Our repair service starts at $45.00. Bear in mind that this is
                                the minimum you can expect to pay for a repair. There are
                                factors that go into the pricing that we simply cannot determine
                                without a thorough exam. So we ask you for the opportunity to
                                look at your items. Once we check the entire garment we will
                                call you with pricing for your approval.
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Box
                display={"flex"}
                justifyContent={"center"}
                sx={{
                    backgroundColor: "#df7c6d",
                }}
            >
                <Card
                    style={{
                        width: 1140,
                        border: "1px solid white",
                        borderRadius: "20px",
                        marginBottom: "60px",
                    }}
                >
                    <CardContent>
                        <Box
                            margin={"47px 43px"}
                            marginBottom={"20px"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <Typography
                                lineHeight={"0.5"}
                                color={"black"}
                                fontWeight={"500"}
                                fontSize={"3rem"}
                                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                                textTransform={"lowercase"}
                            >
                                WHERE ARE YOU
                                <Typography
                                    color={"black"}
                                    fontWeight={"500"}
                                    fontSize={"3rem"}
                                    fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                                    textTransform={"lowercase"}
                                >
                                    LOCATED?
                                </Typography>{" "}
                                <Typography
                                    fontStyle={"italic"}
                                    color={"#575656"}
                                    fontWeight={"500"}
                                    fontSize={"20px"}
                                    textTransform={"capitalize"}
                                >
                                    Queens, New York
                                </Typography>
                            </Typography>
                            <Typography
                                marginBottom={"20px"}
                                lineHeight={"1.3"}
                                maxWidth={"714px"}
                                marginTop={"4px"}
                                color={"black"}
                                fontWeight={"500"}
                                fontFamily={`"ProximaNovaMedium", sans-serif`}
                                fontSize={"22px"}
                            >
                                Can I drop by? Our work studio is located in Astoria, Queens,
                                New York. We know you would like to visit but due to the high
                                intensity nature of the service we provide we do not accept
                                walk-ins. All shipped in orders go to a secure package facility
                                to ensure the safety of your items so you can feel confident
                                that your order has been received.
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Box
                display={"flex"}
                justifyContent={"center"}
                sx={{
                    backgroundColor: "#df7c6d",
                }}
            >
                <Card
                    style={{
                        width: 1140,
                        border: "1px solid white",
                        borderRadius: "20px",
                        marginBottom: "20px",
                    }}
                >
                    <CardContent style={{
                        paddingTop: "32px",
                    }}>
                        <Box
                            margin={"30px 43px"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <Typography
                                marginTop={"20px"}
                                lineHeight={"0.5"}
                                color={"black"}
                                fontWeight={"500"}
                                fontSize={"3rem"}
                                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                                textTransform={"lowercase"}
                            >
                                HOW LONG WILL
                                <Typography
                                    color={"black"}
                                    fontWeight={"500"}
                                    fontSize={"3rem"}
                                    fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                                    textTransform={"lowercase"}
                                >
                                    IT TAKE?
                                </Typography>{" "}
                                <Typography
                                    fontStyle={"italic"}
                                    color={"#575656"}
                                    fontWeight={"500"}
                                    fontSize={"20px"}
                                    textTransform={"capitalize"}
                                >
                                    Typically 4-6 Weeks
                                </Typography>
                            </Typography>
                            <Typography
                                fontFamily={`"ProximaNovaMedium", sans-serif`}
                                fontSize={"22px"}
                                marginBottom={"20px"}
                                lineHeight={"1.3"}
                                maxWidth={"676px"}
                                color={"black"}
                                fontWeight={"500"}
                                marginRight={"37px"}
                            >
                                We are working on a 4-6 week turnaround time. However, if you
                                have an upcoming event, vacation, or you can't live without it,
                                please let a team member know when they call you to go over your
                                order. We offer a rush service for an additional fee.
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
               
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    sx={{
                        backgroundColor: "#df7c6d",
                    }}
                >
                    <Box>
                     <img
                    src={SpeakerImage}
                    alt="speaker"
                    style={{
                        maxWidth: "120px",
                       position: "absolute",
                       marginLeft: "-26px",
                    }}
                />
                </Box>
                    <Card
                        style={{
                            width: 1140,
                            border: "1px solid white",
                            borderRadius: "20px",
                            marginBottom: "150px",
                            marginTop: "40px",
                           
                        }}
                    >
                        <CardContent style={{
                            paddingBottom: "5px",
                        }}>
                            <Box margin={"37px 30px"}>
                                <Typography
                                    lineHeight={"0.5"}
                                    color={"black"}
                                    fontWeight={"500"}
                                    fontSize={"3rem"}
                                    fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                                    textTransform={"lowercase"}
                                >
                                    HEADS UP!
                                    <Typography
                                        marginTop={"8px"}
                                        paddingBottom={"15px"}
                                        borderBottom={"1px dashed black"}
                                        color={"black"}
                                        fontWeight={"500"}
                                        fontSize={"2.5rem"}
                                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                                        textTransform={"lowercase"}
                                    >
                                        PRICE OF REPIARS ARE NOT BASED ON THE ORIGINAL COST OF
                                        GARMENT.
                                    </Typography>{" "}
                                </Typography>
                                <Typography
                                    margin={"20px 0px"}
                                    lineHeight={"1.3"}
                                    maxWidth={"975px"}
                                    color={"black"}
                                    fontWeight={"500"}
                                    fontFamily={`"ProximaNovaMedium", sans-serif`}
                                    fontSize={"22px"}
                                >
                                    Repair quotes are based on the time and required solution.
                                    <Typography
                                        color={"black"}
                                        fontWeight={"500"}
                                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                                        fontSize={"22px"}
                                    >
                                        Estimates are for labor only and do not include material
                                        costs, shipping/delivery fees, or additional services. Every
                                        garment has unique damage and requires a personal exam to
                                        determine the best route back to perfect health. AlterKnit
                                        is a service business, and we do not sell fixed products.
                                        All our final pricing is determined through a hands-on
                                        professional assessment at our work studio.
                                    </Typography>
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
            </Box>
            <img src={StudioImage} alt="studio" />
        </>
    );
}
