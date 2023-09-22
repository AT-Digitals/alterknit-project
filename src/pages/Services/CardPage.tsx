import { Box, Card, CardContent, Typography } from "@mui/material";
import ImageTop from "../../assets/services_services_bg_bottom.svg";
import SpeakerImage from '../../assets/speaker.png';
import StudioImage from '../../assets/studio.png';

export default function CardPage() {
    return (
        <>
            <img src={ImageTop} alt="top" />
            <Box display={"flex"} justifyContent={"center"} sx={{
                backgroundColor: "#df7c6d",
            }}>
                <Card style={{
                    width: 1190,
                    marginBottom: "60px",
                    border: "1px solid white",
                    borderRadius: "20px"
                }}>
                    <CardContent>
                        <Box marginTop={"13px"} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
                            <Typography marginTop={"45px"} lineHeight={"0.5"} color={"black"} fontWeight={"400"} fontSize={"3rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>CAN I GET A <Typography color={"black"} fontWeight={"400"} fontSize={"3rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>BALLPARK?</Typography> <Typography fontStyle={"italic"} color={"#575656"} fontWeight={"500"} fontSize={"20px"}>It's just one hole!</Typography></Typography>
                            <Typography lineHeight={"1.3"} maxWidth={"676px"} color={"black"} fontWeight={"500"} fontSize={"20px"} fontFamily={`"Proxima Nova", sans-serif`}>We need to examine your entire item in our work studio because we have been doing this for a very long time and what might appear to you as a small hole could in reality be 17 small holes! So please let us do our job. Your garments' examination is complimentary.</Typography>
                        </Box>
                        <Box display={"flex"} justifyContent={"right"}>
                            <Typography marginBottom={"20px"} marginRight={"71px"} lineHeight={"1.3"} maxWidth={"676px"} marginTop={"30px"} color={"black"} fontWeight={"500"} fontSize={"20px"}>Our repair service starts at $45.00. Bear in mind that this is the minimum you can expect to pay for a repair. There are factors that go into the pricing that we simply cannot determine without a thorough exam. So we ask you for the opportunity to look at your items. Once we check the entire garment we will call you with pricing for your approval.</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Box display={"flex"} justifyContent={"center"} sx={{
                backgroundColor: "#df7c6d",
            }}>
                <Card style={{
                    width: 1190,
                    border: "1px solid white",
                    borderRadius: "20px",
                    marginBottom: "60px",
                }}>
                    <CardContent>
                        <Box marginTop={"30px"} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
                            <Typography lineHeight={"0.5"} color={"black"} fontWeight={"400"} fontSize={"3rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>WHERE ARE YOU<Typography color={"black"} fontWeight={"400"} fontSize={"3rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>LOCATED?</Typography> <Typography fontStyle={"italic"} color={"#575656"} fontWeight={"500"} fontSize={"20px"}>Queens, New York</Typography></Typography>
                            <Typography fontFamily={`"Proxima Nova", sans-serif`} marginBottom={"20px"} lineHeight={"1.3"} maxWidth={"676px"} marginTop={"4px"} color={"black"} fontWeight={"500"} fontSize={"20px"}>Can I drop by? Our work studio is located in Astoria, Queens, New York. We know you would like to visit but due to the high intensity nature of the service we provide we do not accept walk-ins. All shipped in orders go to a secure package facility to ensure the safety of your items so you can feel confident that your order has been received.</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Box display={"flex"} justifyContent={"center"} sx={{
                backgroundColor: "#df7c6d",
            }}>
                <Card style={{
                    width: 1190,
                    border: "1px solid white",
                    borderRadius: "20px",
                    marginBottom: "20px",
                }}>
                    <CardContent>
                        <Box marginTop={"30px"} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
                            <Typography marginTop={"20px"} lineHeight={"0.5"} color={"black"} fontWeight={"400"} fontSize={"3rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>HOW LONG WILL<Typography color={"black"} fontWeight={"400"} fontSize={"3rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>IT TAKE?</Typography> <Typography fontStyle={"italic"} color={"#575656"} fontWeight={"500"} fontSize={"20px"}>Typically 4-6 Weeks</Typography></Typography>
                            <Typography fontFamily={`"Proxima Nova", sans-serif`} marginBottom={"20px"} lineHeight={"1.3"} maxWidth={"676px"} color={"black"} fontWeight={"500"} fontSize={"20px"}>We are working on a 4-6 week turnaround time. However, if you have an upcoming event, vacation, or you can't live without it, please let a team member know when they call you to go over your order. We offer a rush service for an additional fee.</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Box>
                <img src={SpeakerImage} alt="speaker" style={{
                    width: "120px",
                    fontSize: "20px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    position: "absolute",
                    marginLeft: "140px",
                }} />
                <Box display={"flex"} justifyContent={"center"} sx={{
                    backgroundColor: "#df7c6d",
                }}>
                    <Card style={{
                        width: 1190,
                        border: "1px solid white",
                        borderRadius: "20px",
                        marginBottom: "150px",
                        marginTop: "40px",
                    }}>

                        <CardContent>
                            <Box margin={"35px 30px"}>
                                <Typography lineHeight={"0.5"} color={"black"} fontWeight={"400"} fontSize={"3rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>HEADS UP!<Typography marginTop={"8px"} paddingBottom={"15px"} borderBottom={"1px dashed black"} color={"black"} fontWeight={"400"} fontSize={"2.5rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>PRICE OF REPIARS ARE NOT BASED ON THE ORIGINAL COST OF GARMENT.</Typography> </Typography>
                                <Typography fontFamily={`"Proxima Nova", sans-serif`} margin={"20px 0px"} lineHeight={"1.3"} maxWidth={"975px"} color={"black"} fontWeight={"500"} fontSize={"20px"}>Repair quotes are based on the time and required solution.<Typography color={"black"} fontWeight={"500"} fontSize={"20px"}>Estimates are for labor only and do not include material costs, shipping/delivery fees, or additional services. Every garment has unique damage and requires a personal exam to determine the best route back to perfect health. AlterKnit is a service business, and we do not sell fixed products. All our final pricing is determined through a hands-on professional assessment at our work studio.</Typography></Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <img src={StudioImage} alt="studio" />
        </>
    )
}