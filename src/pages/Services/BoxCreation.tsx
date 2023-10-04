import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Tape from "../../assets/tape.png";
import Yarn from "../../assets/yarn.png";
import weight from "../../assets/weight.png";
import dress from "../../assets/damage.png";

export default function BoxCreation() {
  return (
    <>
      <Box>
        <Box margin={"0px 150px"} paddingTop={"125px"}>
          <Typography
            lineHeight={"0.5"}
            color={"black"}
            fontWeight={500}
            fontSize={"80px"}
            textTransform={"lowercase"}
            fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
          >
            FACTORS WE CONSIDER
            <Typography
              color={"black"}
              fontWeight={500}
              fontSize={"80px"}
              textTransform={"lowercase"}
              fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
              marginBottom={"20px"}
            >
              {" "}
              WHEN EVALUATING
            </Typography>
          </Typography>
        </Box>
        <Stack margin={"0px 95px"} direction={"row"} paddingBottom={"65px"}>
          <Box margin={"30px 60px"} width={"100%"} maxWidth={"590px"}>
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
                lineHeight={"0.5"}
                margin={"10px 40px"}
                color={"black"}
                fontWeight={500}
                fontSize={"48px"}
                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                textTransform={"lowercase"}
              >
                SIZE AND EXTENT OF{" "}
                <Typography
                  color={"black"}
                  fontWeight={500}
                  fontSize={"48px"}
                  fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                  textTransform={"lowercase"}
                >
                  DAMAGE
                </Typography>
              </Typography>
            </Card>
          </Box>
          <Box margin={"30px 0px"}  width={"100%"} maxWidth={"590px"}>
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
                lineHeight={"0.5"}
                margin={"10px 40px"}
                color={"black"}
                fontWeight={500}
                fontSize={"48px"}
                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                textTransform={"lowercase"}
              >
                DIFFICULTY HARVESTING YARN{" "}
                <Typography
                  color={"black"}
                  fontWeight={500}
                  fontSize={"48px"}
                  fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                  textTransform={"lowercase"}
                >
                  OR THREAD
                </Typography>
              </Typography>
            </Card>
          </Box>
        </Stack>
        <Stack margin={"0px 95px"} direction={"row"}>
          <Box margin={"30px 60px"}  width={"100%"} maxWidth={"590px"}>
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
                lineHeight={"0.5"}
                margin={"10px 40px"}
                color={"black"}
                fontWeight={500}
                fontSize={"48px"}
                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                textTransform={"lowercase"}
              >
                LOCATION OF{" "}
                <Typography
                  color={"black"}
                  fontWeight={500}
                  fontSize={"48px"}
                  fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                  textTransform={"lowercase"}
                >
                  DAMAGE
                </Typography>
              </Typography>
            </Card>
          </Box>
          <Box margin={"30px 0px"}  width={"100%"} maxWidth={"590px"}>
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
                lineHeight={"0.5"}
                margin={"10px 40px"}
                color={"black"}
                fontWeight={500}
                fontSize={"48px"}
                textTransform={"lowercase"}
                fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
              >
                THICKNESS AND WEIGHT OF
                <Typography
                  color={"black"}
                  fontWeight={500}
                  fontSize={"48px"}
                  textTransform={"lowercase"}
                  fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                  marginLeft={"4px"}
                  marginBottom={"11px"}
                >
                  FABRIC
                </Typography>
              </Typography>
            </Card>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
