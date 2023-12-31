import { Box, Card, CardContent, Stack, Typography, useMediaQuery } from "@mui/material";
import Tape from "../../assets/tape.png";
import Yarn from "../../assets/yarn.png";
import weight from "../../assets/weight.png";
import dress from "../../assets/damage.png";

export default function BoxCreation() {
  const isXsScreen = useMediaQuery("(max-width:1300px)");
  return (
    <>
      <Box sx={{
        backgroundColor: "#fff",
        marginBottom: "80px",
      }}>
        <Stack paddingBottom={isXsScreen ? "20px" : "50px"} maxWidth={isXsScreen ? "none" : "800px"} direction={"row"} justifyContent={"center"} width={"100%"} margin={isXsScreen ? "0px 0px" : "0px 0px"} paddingTop={{ xs: '90px', sm: '90px', md: '90px', lg: '90px' }}>
          <Typography
            lineHeight={"1"}
            color={"black"}
            fontWeight={500}
            fontSize={{ xs: '45px', sm: '75px', md: '75px', lg: '80px' }}
            textTransform={"lowercase"}
            fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
            padding={isXsScreen ? "0px 10px" : "0px 0px"}
            marginBottom={{ xs: '30px', sm: '40px', md: '40px', lg: '0px' }}
            textAlign={{xs: "center", sm: "center", md: "center", lg: "left"}}
          >
            FACTORS WE CONSIDER
            <Typography
              color={"black"}
              fontWeight={500}
              fontSize={{ xs: '45px', sm: '75px', md: '75px', lg: '80px' }}
              lineHeight={"1"}
              textTransform={"lowercase"}
              fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
              marginBottom={"20px"}
              padding={isXsScreen ? "0px 2px" : "0px 0px"}
              textAlign={{xs: "center", sm: "center", md: "center", lg: "left"}}
            >
              {" "}
              WHEN EVALUATING
            </Typography>
          </Typography>
        </Stack>
        <Box display={"flex"} flexDirection={"column"} gap={"4rem"}>
        <Stack spacing={8} alignItems={"center"} margin={isXsScreen ? "0px 2rem" : "0"} justifyContent={"center"} direction= {{ xs: 'column', sm: 'column', md:'column', lg: 'row' }} paddingBottom={isXsScreen ? "0px" : "0px"}>
          <Stack style={{
            // margin: isXsScreen ? "0 auto" : "0"
          }}   textAlign={{xs: "center", sm: "center", md: "center", lg: "left"}} width={"100%"} maxWidth={"590px"}>
            <Card
              sx={{
                border: "1px solid black",
                backgroundColor: "#f8f1eb",
                borderRadius: "42px",
              }}
            >
              <CardContent
                sx={{
                  borderBottom: "1px dashed black",
                  margin: "30px 40px",
                  
                }}
              >
                <img
                  src={Tape}
                  style={{
                    margin: "10px -12px",
                    paddingBottom: "15px"
                  }}
                  width={"110px"}
                  alt="tape"
                />
              </CardContent>
              <Typography
                margin={"20px 40px"}
                color={"#7d7d7d"}
                fontWeight={"bold"}
                fontSize={"18px"}
              >
                01
              </Typography>
              <Typography
                paddingBottom={"10px"}
                lineHeight={"1"}
                margin={"10px 40px"}
                color={"black"}
                fontWeight={500}
                fontSize={isXsScreen ? "35px" : "48px"}
                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                textTransform={"lowercase"}
              >
                SIZE AND EXTENT OF{" "}
                <Typography
                  color={"black"}
                  fontWeight={500}
                  lineHeight={"1"}
                  fontSize={isXsScreen ? "35px" : "48px"}
                  fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                  textTransform={"lowercase"}
                >
                  DAMAGE
                </Typography>
              </Typography>
            </Card>
          </Stack>
          <Stack style={{
            // margin: isXsScreen ? "60px auto" : "0px 60px"
          }} textAlign={{xs: "center", sm: "center", md: "center", lg: "left"}} width={"100%"} maxWidth={"590px"}>
            <Card
              sx={{
                border: "1px solid black",
                backgroundColor: "#f8f1eb",
                borderRadius: "42px",
              }}
            >
              <CardContent
                sx={{
                  borderBottom: "1px dashed black",
                  margin: "30px 40px",
                }}
              >
                <img
                  src={Yarn}
                  style={{
                    margin: "10px -12px",
                    paddingBottom: "15px"
                  }}
                  width={"95px"}
                  alt="yarn"
                />
              </CardContent>
              <Typography
                margin={"20px 42px"}
                color={"#7d7d7d"}
                fontWeight={"bold"}
                fontSize={"18px"}
              >
                02
              </Typography>
              <Typography
                paddingBottom={"15px"}
                lineHeight={"1"}
                margin={"10px 40px"}
                color={"black"}
                fontWeight={500}
                fontSize={isXsScreen ? "35px" : "48px"}
                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                textTransform={"lowercase"}
              >
                DIFFICULTY HARVESTING YARN{" "}
                <Typography
                  color={"black"}
                  fontWeight={500}
                  lineHeight={"1"}
                  fontSize={isXsScreen ? "35px" : "48px"}
                  fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                  textTransform={"lowercase"}
                >
                  OR THREAD
                </Typography>
              </Typography>
            </Card>
          </Stack>
        </Stack>
        <Stack spacing={8} alignItems={"center"} margin={isXsScreen ? "0px 2rem" : "0"} justifyContent={"center"} direction= {{ xs: 'column', sm: 'column', md:'column', lg: 'row' }}>
          <Stack style={{
            // margin: isXsScreen ? "0 auto" : "0"
          }} textAlign={{xs: "center", sm: "center", md: "center", lg: "left"}} width={"100%"} maxWidth={"590px"}>
            <Card
              sx={{
                border: "1px solid black",
                backgroundColor: "#f8f1eb",
                borderRadius: "42px",
              }}
            >
              <CardContent
                sx={{
                  borderBottom: "1px dashed black",
                  margin: "30px 40px",
                }}
              >
                <img
                  src={dress}
                  style={{
                    margin: "10px -12px",
                    paddingBottom: "15px"
                  }}
                  width={"110px"}
                  alt="tape"
                />
              </CardContent>
              <Typography
                margin={"20px 40px"}
                color={"#7d7d7d"}
                fontWeight={"bold"}
                fontSize={"18px"}
              >
                03
              </Typography>
              <Typography
                paddingBottom={"15px"}
                lineHeight={"1"}
                margin={"10px 40px"}
                color={"black"}
                fontWeight={500}
                fontSize={isXsScreen ? "35px" : "48px"}
                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                textTransform={"lowercase"}
              >
                LOCATION OF{" "}
                <Typography
                  color={"black"}
                  fontWeight={500}
                  fontSize={isXsScreen ? "35px" : "48px"}
                  lineHeight={"1"}
                  fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                  textTransform={"lowercase"}
                >
                  DAMAGE
                </Typography>
              </Typography>
            </Card>
          </Stack>
          <Stack style={{
            // margin: isXsScreen ? "60px auto" : "0px 60px"
          }} textAlign={{xs: "center", sm: "center", md: "center", lg: "left"}} width={"100%"} maxWidth={"590px"}>
            <Card
              sx={{
                border: "1px solid black",
                backgroundColor: "#f8f1eb",
                borderRadius: "42px",
              }}
            >
              <CardContent
                sx={{
                  borderBottom: "1px dashed black",
                  margin: "30px 40px",
                }}
              >
                <img
                  src={weight}
                  style={{
                    margin: "15px -12px",
                    paddingBottom: "15px"
                  }}
                  width={"95px"}
                  alt="yarn"
                />
              </CardContent>
              <Typography
                margin={"20px 42px"}
                color={"#7d7d7d"}
                fontWeight={"bold"}
                fontSize={"18px"}
              >
                04
              </Typography>
              <Typography
                paddingBottom={"4px"}
                lineHeight={"1"}
                margin={"10px 40px"}
                color={"black"}
                fontWeight={500}
                fontSize={isXsScreen ? "35px" : "48px"}
                textTransform={"lowercase"}
                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
              >
                THICKNESS AND WEIGHT OF
                <Typography
                  color={"black"}
                  fontWeight={500}
                  lineHeight={"1"}
                  fontSize={isXsScreen ? "35px" : "48px"}
                  textTransform={"lowercase"}
                  fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                  marginLeft={"4px"}
                  marginBottom={"11px"}
                >
                  FABRIC
                </Typography>
              </Typography>
            </Card>
          </Stack>
        </Stack>
        </Box>
      </Box>
    </>
  );
}
