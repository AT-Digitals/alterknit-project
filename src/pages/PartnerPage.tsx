import float from "../assets/logo-flat.png";
import image1 from "../assets/bg-top (1).svg";
import { Box, Button, Card, CardContent, Stack, TextField, Typography } from "@mui/material";
import image2 from "../assets/bg-bottom.svg";
import image3 from "../assets/logo-3d.png";
import image4 from "../assets/banner.jpg";
import { Link } from "react-router-dom";

export default function PartnerPage() {
    return (
        <Box sx={{
            backgroundColor: "#f8f1eb",
        }}>
            <section style={{
                position: "relative",
                padding: "12rem 0"
            }}>
                <img width={"100%"} style={{
                    maxWidth: "450px",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    zIndex: "2",
                    marginTop: "34px",
                }} src={float} alt="float" />

                <img style={{
                    position: "absolute",
                    width: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "1",
                    marginTop: "160px",
                }} src={image1} alt="bg-top" />
                <Box sx={{
                    position: "relative",
                    zIndex: "3",
                }} width={"100%"} maxWidth={"1140px"}>
                    <Typography marginTop={"-26px"} marginLeft={"225px"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={"5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>WHAT WE CAN DO<Typography fontSize={"3rem"} style={{
                        fontFamily: "Jaceline",
                    }}>for you!</Typography></Typography>
                </Box>
                <Box sx={{
                    position: "relative",
                    zIndex: "2",
                    marginTop: "103px",
                    marginLeft: "5px",
                }} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"25px"}>
                    <Card style={{
                        backgroundColor: "#fff",
                        textAlign: "center",
                        border: "4px dashed black",
                        width: "100%",
                        maxWidth: "790px",
                        padding: "18px",
                        borderRadius: "23px",
                    }}>
                        <CardContent>
                            <Typography lineHeight={"1.2"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={"5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>PREMIUM SOLUTIONS</Typography>
                            <Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>We specialize in invisible repair. The garment is returned<Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>to your customer restored and ready to wear.</Typography></Typography>
                        </CardContent>
                    </Card>
                    <Card style={{
                        backgroundColor: "#fff",
                        textAlign: "center",
                        border: "4px dashed black",
                        width: "100%",
                        maxWidth: "790px",
                        padding: "18px",
                        borderRadius: "23px",
                    }}>
                        <CardContent>
                            <Typography lineHeight={"1.2"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={"5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>SERVICE SIMPLIFIED</Typography>
                            <Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>Take the stress away from your team and your customer,<Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>we handle everything from logistics to customer service.</Typography></Typography>
                        </CardContent>
                    </Card>
                    <Card style={{
                        backgroundColor: "#fff",
                        textAlign: "center",
                        border: "4px dashed black",
                        width: "100%",
                        maxWidth: "790px",
                        padding: "18px",
                        borderRadius: "23px",
                    }}>
                        <CardContent>
                            <Typography lineHeight={"1.2"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={"5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>CUSTOMER RETENTION</Typography>
                            <Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>We make sure your customer is blown away by the result<Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>and comes back to you for their next purchase.</Typography></Typography>
                        </CardContent>
                    </Card>
                    <Card style={{
                        backgroundColor: "#fff",
                        textAlign: "center",
                        border: "4px dashed black",
                        width: "100%",
                        maxWidth: "790px",
                        padding: "18px",
                        borderRadius: "23px",
                    }}>
                        <CardContent>
                            <Typography lineHeight={"1.2"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={"5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>ADDITIONAL REVENUE</Typography>
                            <Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>Gain a new source of income while expanding<Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>your service offering.</Typography></Typography>
                        </CardContent>
                    </Card>
                    <Card style={{
                        backgroundColor: "#fff",
                        textAlign: "center",
                        border: "4px dashed black",
                        width: "100%",
                        maxWidth: "790px",
                        padding: "18px",
                        borderRadius: "23px",
                    }}>
                        <CardContent>
                            <Typography lineHeight={"1.2"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={"5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>FULLY SCALABLE</Typography>
                            <Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>As your business grows, we'll work with you to meet<Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>your needs.</Typography></Typography>
                        </CardContent>
                    </Card>
                    <Card style={{
                        backgroundColor: "#fff",
                        textAlign: "center",
                        border: "4px dashed black",
                        width: "100%",
                        maxWidth: "790px",
                        padding: "18px",
                        borderRadius: "23px",
                    }}>
                        <CardContent>
                            <Typography lineHeight={"1.2"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={"5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>SUSTAINABLE BY DEFAULT</Typography>
                            <Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>We're proud to give garments a second chance while<Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>maintaining sustainability in our practices.</Typography></Typography>
                        </CardContent>
                    </Card>
                </Box>
                <img width={"100%"} src={image2} alt="image-bottom" style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    marginBottom: "40px",
                }} />
            </section>
            <section>
                <Typography marginBottom={"60px"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={"5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>PARTNER WITH THE<Typography fontSize={"3rem"} style={{
                    fontFamily: "Jaceline",
                }}>best</Typography>
                    <img src={image3} width={"100%"} alt="logo" style={{
                        maxWidth: "124px",
                    }} />
                </Typography>
                <img src={image4} width={"100%"} alt="banner" />
                <Box marginBottom={"30px"} marginTop={"59px"} display={"flex"} justifyContent={"center"}>
                    <Card style={{
                        width: "100%",
                        maxWidth: "687px",
                        textAlign: "center",
                        backgroundColor: "#df7c6d",
                        borderRadius: "21px",
                        marginTop: "-190px",
                        padding: "20px"
                    }}>
                        <CardContent style={{
                            backgroundColor: "#fff",
                            border: "3px dashed black",
                            borderRadius: "21px",
                            padding: "50px 80px"
                        }}>
                            <Typography color={"#6b7177"} fontWeight={"500"} fontSize={"15px"}>If you're currently running a repair program or looking to get started offering repairs and alterations, we're here to help provide you with a custom solution to get your customers into their favorite garments. Each garment that comes to us is returned both visually and structurally to its original condition. You close the loop and we close the holes.</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </section>
            <section>
                <Box padding={"2rem 0"}>
                    <Typography textAlign={"center"} color={"black"} fontWeight={"600"} fontSize={"6rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>BECOME A PARTNER</Typography>
                    <Typography fontFamily={`"Proxima Nova", sans-serif`} lineHeight={"1.5"} color={"black"} fontWeight={"200"} maxWidth={"590px"} textAlign={"center"} fontSize={"23px"} margin={"0 auto"}>We're excited to talk to you. To connect with us, please submit an inquiry below and a member of our team will get back to you shortly.</Typography>
                </Box>
                <form style={{
                    marginTop: "50px",
                }}>
                    <Stack display={"flex"} justifyContent={"center"} spacing={12} marginBottom={"40px"} direction={"row"}>
                        <Box>
                            <TextField sx={{
                                ".css-1qknc5a-MuiInputBase-root-MuiInput-root": {
                                    fontSize: "1.6rem",
                                    width: "600px",
                                    padding: "6px 0px",
                                },
                            }}
                                required
                                id="standard-required"
                                defaultValue="First & LastName"
                                variant="standard"
                            />
                        </Box>
                        <Box>
                            <TextField sx={{
                                ".css-1qknc5a-MuiInputBase-root-MuiInput-root": {
                                    fontSize: "1.6rem",
                                    width: "600px",
                                    padding: "6px 0px",
                                }
                            }}
                                required
                                id="standard-required"
                                defaultValue="Company"
                                variant="standard"
                            />
                        </Box>
                    </Stack>
                    <Stack display={"flex"} justifyContent={"center"} spacing={12} marginBottom={"40px"} direction={"row"}>
                        <Box>
                            <TextField sx={{
                                ".css-1qknc5a-MuiInputBase-root-MuiInput-root": {
                                    fontSize: "1.6rem",
                                    width: "600px",
                                    padding: "6px 0px",
                                },
                            }}
                                required
                                id="standard-required"
                                defaultValue="E-mail Address"
                                variant="standard"
                            />
                        </Box>
                        <Box>
                            <TextField sx={{
                                ".css-1qknc5a-MuiInputBase-root-MuiInput-root": {
                                    fontSize: "1.6rem",
                                    width: "600px",
                                    padding: "6px 0px",
                                }
                            }}
                                required
                                id="standard-required"
                                defaultValue="Phone Number"
                                variant="standard"
                            />
                        </Box>
                    </Stack>
                    <Box paddingTop={"15px"} display={"flex"} justifyContent={"center"} margin={"2rem 0"} >
                        <Button style={{
                            backgroundColor: "#df7c6d",
                            borderRadius: "6px",
                            color: "#fff",
                            padding: "1.2rem 3rem",
                            textAlign: "center",
                            fontSize: "19px",
                            width: "100%",
                            maxWidth: "640px",
                        }}>Submit</Button>
                    </Box>
                    <Typography paddingTop={"15px"} paddingBottom={"100px"} textAlign={"center"} color={"#6b7177"} fontWeight={"500"} fontSize={"15px"}>If you run into problems accessing the portal or need<Typography color={"#6b7177"} fontWeight={"500"} fontSize={"15px"}>additional assistance, please reach out to <Link style={{
                        textDecoration: "none",
                        color: "#df7c6d",

                    }} to={""}>partners@alterknit.co</Link></Typography></Typography>
                </form>
            </section>
        </Box>
    )
}