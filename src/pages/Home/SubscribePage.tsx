import {
  Box,
  Button,
  CardMedia,
  Modal,
  Stack,
  TextField,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";

import Alterknitimage from "../../assets/bug_03.png";
import Bug from "../../assets/bugs.png";
import Colors from "../../CommonComponent/Colors";
import { Link } from "react-router-dom";
import alterknitImage from "../../assets/alterknit.png";
import emailjs from "@emailjs/browser";
import routes from "../../routes/routes";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  border: "1px solid #fff",
  boxShadow: 24,
  p: 4,
};

const StyledButton = styled(Button)({
  position: "absolute",
  left: "52%",
  transform: `translate(${-20}%, ${-42}%)`,
  borderRadius: "50%",
  width: 110,
  height: 110,
  fontSize: "19px",
  fontWeight: 400,
  textTransform: "uppercase",
  lineHeight: 1,
  color: Colors.WHITE,
  border: `6px solid ${Colors.WHITE} !important`,
  backgroundColor: Colors.BLACK,
  ":hover": {
    backgroundColor: Colors.LINK,
  },
});

const getPersonalDetail = {
  subscribe: "",
};

export default function SubscribePage() {
  const [personalDetails, setPersonalDetails] = useState(getPersonalDetail);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscribeError, setSubscribeError] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  const EmailValidation = (name: string) => {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(name)) {
      setSubscribeError("");
      return true;
    } else {
      setSubscribeError("");
      return false;
    }
  };

  useEffect(() => {
    if (personalDetails.subscribe) {
      EmailValidation(personalDetails.subscribe);
    }
    setPersonalDetails((personalDetails) => ({
      ...personalDetails,
      personalDetails: personalDetails.subscribe,
    }));
  }, [personalDetails.subscribe]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let subscribeError = "";

    if (!personalDetails.subscribe) {
      subscribeError = "Email is required";
    } else if (!EmailValidation(personalDetails.subscribe)) {
      subscribeError = "Invalid email format";
    }
    setSubscribeError(subscribeError);

    if (!subscribeError) {
      emailjs
        .sendForm(
          "service_h05cohb",
          "template_36581gc",
          e.target,
          "tzn_ZDm_QTX8jjQu6"
        )
        .then((result) => {
          console.log(result.text);
          console.log("message sent");
          // Clear the form fields or reset the form state as needed
          // For example, if you're using React with state:
          setPersonalDetails({
            subscribe: "",
          });
          setIsModalOpen(true);
        })
        .catch((error) => {
          console.log(error.text);
          // Handle email sending error if needed
        });
    } else {
      // Handle the case where there are validation errors (e.g., show error messages).
    }

    const data = {
      subscribe: personalDetails.subscribe,
    };
    console.log(data);
  };

  const isXsScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box margin={"0px 30px"} display={"flex"} justifyContent={"center"}>
      <Box width={"100%"} marginTop={isXsScreen ? "40px" : "90px"}>
        <Typography
          lineHeight={1}
          textAlign={"center"}
          fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
          color={"black"}
          fontSize={isXsScreen ? "30px" : "48px"}
          fontWeight={500}
          textTransform="lowercase"
        >
          EXTEND THE LIFE OF THE <br /> CLOTHES YOU LOVE
        </Typography>
        <Box
          marginTop={"30px"}
          marginBottom={20}
          display={"flex"}
          justifyContent={"center"}
        >
          <Link to={routes.SCHEDULE_REPAIR}>
            <StyledButton
              sx={{
                fontFamily: `"IndustrialGothicBannerStd", sans-serif !important`,
                fontWeight: 500,
                textTransform: "lowercase",
              }}
            >
              Schedule a repair
            </StyledButton>
          </Link>
          <img
            src={Alterknitimage}
            width={"100%"}
            style={{
              maxWidth: 650,
            }}
            alt="bug1"
          />
        </Box>
        <Stack display={{ xs: "block", sm: "flex" }} direction="row" justifyContent={"space-between"} pb={8} maxWidth={1300} margin="0 auto">
          <Box  display={{ xs: "none", md: "flex" }}>

          <Link to={""}>
            {/* <img src={Bug} alt="bug-left" width={"300px"} /> */}
            <CardMedia
              component="img"
              // height="194"
              image={Bug}
              alt="bug-left"
              sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" } }}

            />
          </Link>
          </Box>
          <Stack direction="column" width={"100%"} spacing={4}>
            <Typography
              marginTop={"100px"}
              color={"black"}
              fontWeight={500}
              fontSize={"32px"}
              textAlign={"center"}
              fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
              lineHeight={1}
              textTransform="lowercase"
            >
              JOIN OUR MAILING LIST & GET 10% OF YOUR FIRST REPAIRED ORDER WITH US*
              <Box display={"flex"} justifyContent={"center"} mt={1}>
                <Typography
                  width={"520px"}
                  borderBottom={"3px dashed black"}
                ></Typography>
              </Box>
            </Typography>
            <form style={{
              display: "flex",
              justifyContent: "center",
            }} onSubmit={handleSubmit}>
              <Modal
                open={isModalOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box display={"flex"} justifyContent={"center"}>
                    <img
                      src={alterknitImage}
                      alt="logo"
                      width="40%"
                      height="15%"
                    />
                  </Box>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Typography
                      fontSize={"20px"}
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    >
                      Email Sent Successfully!
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    padding={"9px 0px"}
                  >
                    <Button
                      sx={{
                        height: "30px",
                        backgroundColor: "black",
                        color: "white",
                        marginTop: "10px",
                        ":hover": {
                          backgroundColor: "rgb(223, 124, 109)",
                        },
                      }}
                      onClick={closeModal}
                    >
                      OK
                    </Button>
                  </Box>
                </Box>
              </Modal>
              <Box display={{ xs: "block", sm: "flex" }} width="100%" maxWidth={500} justifyContent={"center"}>
                <TextField
                  fullWidth
                  sx={{
                    marginBottom: { xs: 3, sm: 0 },
                    ".MuiOutlinedInput-input": {
                      // width: { xs: 300, sm: 470 },
                      height: "40px",
                      border: "1px solid #df7c6d",
                    },
                    ".MuiFormHelperText-root": {
                      color: "#d32f2f",
                    },
                    ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                      fontSize: "20px",
                    },
                  }}
                  onChange={handleInputChange}
                  value={personalDetails.subscribe}
                  error={personalDetails.subscribe ? !!subscribeError : false}
                  helperText={subscribeError}
                  variant="outlined"
                  placeholder="Your Email"
                  name="subscribe"
                  required
                ></TextField>
                <Button
                  fullWidth
                  sx={{
                    // width: { xs: 330, sm: 470 },
                    backgroundColor: "#df7c6d",
                    border: "1px solid #df7c6d",
                    color: "white",
                    padding: "10px 26px",
                    borderRadius: "0",
                    textTransform: "capitalize",
                    fontSize: "20px",
                    height: "75px",
                    ":hover": {
                      backgroundColor: "#f58977",
                    },
                  }}
                  type="submit"
                >
                  Subscribe
                </Button>
              </Box>
            </form>
            <Typography
              fontSize={"14px"}
              textAlign={"center"}
              marginTop={"20px"}
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              fontWeight={500}
              color={Colors.BLACK_TEXT}
            >
              *Code must be applied at check out. Please check your email!
            </Typography>
          </Stack>
          <Box  display={{ xs: "none", md: "flex" }}>
          <Link to={""}>
            {/* <img
              src={Bug}
              alt="bug-right"
              width={"300px"}
              style={{
                transform: "scaleX(-1)",
              }}
            /> */}
            <CardMedia
              component="img"
              // height="194"
              image={Bug}
              alt="bug-right"
              sx={{ transform: "scaleX(-1)", display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" } }}
            />
          </Link>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
