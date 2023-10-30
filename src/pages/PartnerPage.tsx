import {
  Box,
  Button,
  Card,
  CardContent,
  Modal,
  Stack,
  TextField,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import float from "../assets/logo-flat.png";
import image1 from "../assets/bg-top (1).svg";
import image2 from "../assets/bg-bottom.svg";
import image3 from "../assets/logo-3d.png";
import image4 from "../assets/banner.jpg";
import alterknitImage from '../assets/alterknit.png'

const getPersonalDetails = {
  firstname: "",
  company: "",
  email: "",
  phone: "",
};

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

export default function PartnerPage() {
  const [personalDetails, setPersonalDetails] = useState(getPersonalDetails);
  const [firstnameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const residentDetails = {
    personalDetails: personalDetails,
  };

  const FirstNameValidation = (name: string) => {
    if (/^[a-zA-Z\s]{1,40}$/.test(name)) {
      setFirstNameError("");
      return true;
    } else {
      setFirstNameError("Only allowed characters and space");
      return false;
    }
  };

  const EmailValidation = (name: string) => {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(name)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Please include an '@' in the email");
      return false;
    }
  };

  const PhoneValidation = (name: string) => {
    const cleanedPhoneNumber = name.replace(/\D/g, "");
    if (
      /^\d{10}$|^\d{3}[-.]?\d{3}[-.]?\d{4}$|^\(\d{3}\)\s?\d{3}[-.]?\d{4}$/.test(
        cleanedPhoneNumber
      )
    ) {
      setPhoneError("");
      return true;
    }

    setPhoneError("Invalid phone number");
    return false;
  };

  const CompanyValidation = (name: string) => {
    if (/^[a-zA-Z\s]{1,40}$/.test(name)) {
      setCompanyError("");
      return true;
    } else {
      setCompanyError("Only allowed characters and space");
      return false;
    }
  };

  useEffect(() => {
    if (personalDetails.phone) {
      PhoneValidation(personalDetails.phone);
    }
    setPersonalDetails((personalDetails) => ({
      ...personalDetails,
      personalDetails: personalDetails.phone,
    }));
  }, [personalDetails.phone]);

  useEffect(() => {
    if (personalDetails.email) {
      EmailValidation(personalDetails.email);
    }
    setPersonalDetails((personalDetails) => ({
      ...personalDetails,
      personalDetails: personalDetails.email,
    }));
  }, [personalDetails.email]);

  useEffect(() => {
    if (personalDetails.firstname) {
      FirstNameValidation(personalDetails.firstname);
    }

    setPersonalDetails((personalDetails) => ({
      ...personalDetails,
      personalDetails: personalDetails.firstname,
    }));
  }, [personalDetails.firstname]);

  useEffect(() => {
    if (personalDetails.company) {
      CompanyValidation(personalDetails.company);
    }

    setPersonalDetails((personalDetails) => ({
      ...personalDetails,
      personalDetails: personalDetails.company,
    }));
  }, [personalDetails.company]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // try {
    //   const response = await fetch("/submit-email", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(personalDetails),
    //   });

    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }

    // let result = await fetch("http://localhost:3001/items", {
    //   method: "post",
    //   body: JSON.stringify({
    //     name: personalDetails.firstname,
    //     email: personalDetails.email,
    //     phone: personalDetails.phone,
    //     company: personalDetails.company,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // // setPersonalDetails({ firstname: "", email: "", phone: "", company: '' })
    // result = await result.json();
    // console.warn(result);
    // if (result) {
    //   setPersonalDetails(getPersonalDetails);
    // }

    // Initialize error variables
    let firstNameError = "";
    let emailError = "";
    let phoneError = "";
    let companyError = "";

    // Validate and set errors
    if (!personalDetails.firstname) {
      firstNameError = "Name is required";
    } else if (!FirstNameValidation(personalDetails.firstname)) {
      firstNameError = "Invalid firstname format";
    }

    if (!personalDetails.email) {
      emailError = "Email is required";
    } else if (!EmailValidation(personalDetails.email)) {
      emailError = "Invalid email format";
    }

    if (!personalDetails.phone) {
      phoneError = "Phone number is required";
    } else if (!PhoneValidation(personalDetails.phone)) {
      phoneError = "Invalid phone number format";
    }

    if (!personalDetails.company) {
      companyError = "Invalid company format";
    } else if (!CompanyValidation(personalDetails.company)) {
      companyError = "Invalid company format";
    }

    // Set the error state variables
    setFirstNameError(firstNameError);
    setEmailError(emailError);
    setPhoneError(phoneError);
    setCompanyError(companyError);

    if (!firstNameError && !companyError && !emailError && !phoneError) {
      // If there are no validation errors, proceed with sending the email
      emailjs.sendForm('service_omm1b98', 'template_3apnrrq', e.target, 'F8jME07w_yK-qghF-')
        .then((result) => {
          console.log(result.text);
          console.log("message sent");
          // Clear the form fields or reset the form state as needed
          // For example, if you're using React with state:
          setPersonalDetails({
            firstname: "",
            email: "",
            phone: "",
            company: "", 
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


    // Check if all errors are empty (i.e., inputs are valid)
    if (!firstNameError && !companyError && !emailError && !phoneError) {
      const data = {
        firstname: residentDetails.personalDetails.firstname,
        email: residentDetails.personalDetails.email,
        phone: residentDetails.personalDetails.phone,
        company: residentDetails.personalDetails.company,
      };

      console.log(data);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isXsScreen = useMediaQuery("(max-width:915px)");
  const isYsScreen = useMediaQuery("(max-width:1200px)");

  return (
    <Box
      sx={{
        backgroundColor: "#f8f1eb",
      }}
    >
      <section
        style={{
          position: "relative",
          padding: isXsScreen ? "1rem 0" : "3rem 0",
        }}
      >
        <img
          width={"100%"}
          style={{
            maxWidth: "450px",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "2",
            marginTop: "34px",
          }}
          src={float}
          alt="float"
        />

        <img
          style={{
            position: "absolute",
            width: "100%",
            top: "0",
            left: "0",
            zIndex: "1",
            marginTop: "160px",
          }}
          src={image1}
          alt="bg-top"
        />
        <Stack marginTop={"140px"} justifyContent={"center"} direction="row"
          sx={{
            position: "relative",
            zIndex: "3",
          }}
          maxWidth={"1520px"}
        >
          <Typography
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"black"}
            fontWeight={"500"}
            lineHeight={1}
            fontSize={isXsScreen ? "30px" : "80px"}
            fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
            textTransform={"lowercase"}
          >
            WHAT WE CAN DO
            <Typography
              style={{
                marginLeft: "33px",
                marginTop: "-50px",
                wordSpacing:  isXsScreen ? "-30px" : "-55px",
              }}
              fontFamily={`"Jaceline", sans-serif`}
              fontSize={isYsScreen ? "150px" : "320px"}
              lineHeight={"0.5"}
            >
              for you!
            </Typography>
          </Typography>
        </Stack>
        <Box
          sx={{
            position: "relative",
            zIndex: "2",
            marginTop: "74px",
            marginLeft: "-4px",
            padding: "20px",
          }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"25px"}
        >
          <Card
            style={{
              backgroundColor: "#fff",
              textAlign: "center",
              border: "4px dashed black",
              width: "100%",
              maxWidth: "790px",
              borderRadius: "23px",
            }}
          >
            <CardContent>

              <Typography paddingTop={isXsScreen ? "10px" : "30px"} lineHeight={"1.2"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={isXsScreen ? "2.5rem" : "5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>PREMIUM SOLUTIONS</Typography>
              <Typography paddingBottom={isXsScreen ? "11px" : "21px"} color={"#000000"} fontWeight={"400"} fontSize={isXsScreen ? "12px" : "16px"} fontFamily={`"ProximaNovaMedium", sans-serif`}>We specialize in invisible repair. The garment is returned<Typography color={"black"} fontWeight={"500"} fontSize={isXsScreen ? "12px" : "16px"} lineHeight={"1"} fontFamily={`"ProximaNovaMedium", sans-serif`}>to your customer restored and ready to wear.</Typography></Typography>
            </CardContent>
          </Card>
          <Card
            style={{
              backgroundColor: "#fff",
              textAlign: "center",
              border: "4px dashed black",
              width: "100%",
              maxWidth: "790px",
              borderRadius: "23px",
            }}
          >
            <CardContent>
              <Typography paddingTop={isXsScreen ? "10px" : "30px"} lineHeight={"1.2"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={isXsScreen ? "2.5rem" : "5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>SERVICE SIMPLIFIED</Typography>
              <Typography paddingBottom={isXsScreen ? "11px" : "21px"} color={"#000000"} fontWeight={"400"} fontSize={isXsScreen ? "12px" : "16px"} fontFamily={`"ProximaNovaMedium", sans-serif`}>Take the stress away from your team and your customer,<Typography color={"black"} fontWeight={"400"} fontSize={isXsScreen ? "12px" : "16px"} marginRight={"22px"} lineHeight={"1"} fontFamily={`"ProximaNovaMedium", sans-serif`}>we handle everything from logistics to customer service.</Typography></Typography>
            </CardContent>
          </Card>
          <Card
            style={{
              backgroundColor: "#fff",
              textAlign: "center",
              border: "4px dashed black",
              width: "100%",
              maxWidth: "790px",
              borderRadius: "23px",
            }}
          >
            <CardContent>

              <Typography paddingTop={isXsScreen ? "10px" : "30px"} lineHeight={"1.2"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={isXsScreen ? "2.5rem" : "5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>CUSTOMER RETENTION</Typography>
              <Typography paddingBottom={isXsScreen ? "11px" : "21px"} color={"#000000"} fontWeight={"400"} fontSize={isXsScreen ? "12px" : "16px"} fontFamily={`"ProximaNovaMedium", sans-serif`}>We make sure your customer is blown away by the result<Typography color={"black"} fontWeight={"400"} fontSize={isXsScreen ? "12px" : "16px"} lineHeight={"1"} fontFamily={`"ProximaNovaMedium", sans-serif`}>and comes back to you for their next purchase.</Typography></Typography>

            </CardContent>
          </Card>
          <Card
            style={{
              backgroundColor: "#fff",
              textAlign: "center",
              border: "4px dashed black",
              width: "100%",
              maxWidth: "790px",
              borderRadius: "23px",
            }}
          >
            <CardContent>

              <Typography paddingTop={isXsScreen ? "10px" : "30px"} lineHeight={"1.2"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={isXsScreen ? "2.5rem" : "5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>ADDITIONAL REVENUE</Typography>
              <Typography paddingBottom={isXsScreen ? "11px" : "21px"} color={"#000000"} fontWeight={"400"} fontSize={isXsScreen ? "12px" : "16px"} fontFamily={`"ProximaNovaMedium", sans-serif`}>Gain a new source of income while expanding<Typography color={"black"} fontWeight={"400"} fontSize={isXsScreen ? "12px" : "16px"} lineHeight={"1"} fontFamily={`"ProximaNovaMedium", sans-serif`}>your service offering.</Typography></Typography>

            </CardContent>
          </Card>
          <Card
            style={{
              backgroundColor: "#fff",
              textAlign: "center",
              border: "4px dashed black",
              width: "100%",
              maxWidth: "790px",
              borderRadius: "23px",
            }}
          >
            <CardContent>

              <Typography paddingTop={isXsScreen ? "10px" : "30px"} lineHeight={"1.2"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={isXsScreen ? "2.5rem" : "5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>FULLY SCALABLE</Typography>
              <Typography paddingBottom={isXsScreen ? "11px" : "21px"} color={"#000000"} lineHeight={"1"} marginRight={"22px"} fontWeight={"400"} fontSize={isXsScreen ? "12px" : "16px"} fontFamily={`"ProximaNovaMedium", sans-serif`}>As your business grows, we'll work with you to meet<Typography color={"black"} fontWeight={"400"} fontSize={isXsScreen ? "12px" : "16px"} lineHeight={"1"} fontFamily={`"ProximaNovaMedium", sans-serif`}>your needs.</Typography></Typography>

            </CardContent>
          </Card>
          <Card
            style={{
              backgroundColor: "#fff",
              textAlign: "center",
              border: "4px dashed black",
              width: "100%",
              maxWidth: "790px",
              borderRadius: "23px",
            }}
          >
            <CardContent>
              <Typography paddingTop={isXsScreen ? "10px" : "30px"} lineHeight={"1.3"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={isXsScreen ? "2.5rem" : "5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>SUSTAINABLE BY DEFAULT</Typography>
              <Typography paddingBottom={isXsScreen ? "11px" : "21px"} color={"#000000"} fontWeight={"400"} fontSize={isXsScreen ? "12px" : "16px"} marginRight={"28px"} fontFamily={`"ProximaNovaMedium", sans-serif`} lineHeight={"1"}>We're proud to give garments a second chance while<Typography color={"black"} fontWeight={"400"} fontSize={isXsScreen ? "12px" : "16px"} lineHeight={"1"} fontFamily={`"ProximaNovaMedium", sans-serif`}>maintaining sustainability in our practices.</Typography></Typography>

            </CardContent>
          </Card>
        </Box>
        <img
          width={"100%"}
          src={image2}
          alt="bottom"
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            marginBottom: "40px",
          }}
        />
      </section>
      <section>
        <Stack marginBottom={"30px"} justifyContent={"center"} alignItems={"center"} direction="row">
        <Typography
          color={"black"}
          fontWeight={"400"}
          fontSize={isXsScreen ? "32px" : "80px"}
          lineHeight={"0.9"}
          padding={"0px 2px"}
          fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
        >
          PARTNER WITH THE
         
        </Typography>
        <Typography
             fontSize={isXsScreen ? "120px" : "220px"}
            fontFamily={`"Jaceline", sans-serif`}
            marginLeft={"18px"}
            lineHeight={0.5}
          >
            best
          </Typography>
          <img
            src={image3}
            alt="logo"
            style={{
              maxWidth: "124px",
              width: isXsScreen ? "90%" : "270px",
            }}
          />
        </Stack>
        <img src={image4} width={"100%"} alt="banner" />
        <Box
          marginBottom={isXsScreen ? "20px" : "90px"}
          marginTop={"-190px"}
          display={"flex"}
          justifyContent={"center"}
          padding={"20px"}
        >
          <Card
            style={{
              width: "100%",
              maxWidth: "695px",
              textAlign: "center",
              backgroundColor: "#df7c6d",
              borderRadius: "21px",
              padding: "22px 22px"
            }}>
              <CardContent style={{
              backgroundColor :"#fff",
              border: "3px dashed black",
              borderRadius: "21px",
              padding: "43px 68px",
              }}>
            <Typography color={"#6b7177"} lineHeight={"1.5"} fontWeight={"500"} fontSize={"16px"} fontFamily={`"ProximaNovaMedium", sans-serif`}>If you're currently running a repair program or looking to get started offering repairs and alterations, we're here to help provide you with a custom solution to get your customers into their favorite garments. Each garment that comes to us is returned both visually and structurally to its original condition. You close the loop and we close the holes.</Typography>
            </CardContent>
          </Card>
        </Box>
      </section>
      <section>
        <Box padding={isXsScreen ? "0rem 0" : "2rem 0"}>
          <Typography textAlign={"center"} lineHeight={1} color={"black"} fontWeight={"500"} fontSize={isXsScreen ? "50px" : "100px"} letterSpacing={"3"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`} textTransform={"lowercase"}>BECOME A PARTNER</Typography>
          <Typography fontFamily={`"ProximaNovaMedium", sans-serif`} lineHeight={"1.5"} padding={"15px"} fontWeight={"400"} maxWidth={"590px"} textAlign={"center"} fontSize={isXsScreen ? "19px" : "24px"} margin={"0 auto"}>We're excited to talk to you. To connect with us, please submit an inquiry below and a member of our team will get back to you shortly.</Typography>
        </Box>
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: isXsScreen ? "5px" : "50px",
            padding: "20px",
          }}
        >
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
      
          <Typography color={"black"} fontSize={"20px"} id="modal-modal-description" sx={{ mt: 2 }}>
           Email Sent Successfully!
          </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} padding={"9px 0px"}>
            <Button sx={{
              height: "30px",
              backgroundColor: "black",
              color: "white",
              marginTop: "10px",
              ":hover": {
                backgroundColor: "rgb(223, 124, 109)",
              },
            }} onClick={closeModal}>OK</Button>
          </Box>
        </Box>
      </Modal>
          <Stack
            display={"flex"}
            justifyContent={"space-evenly"}
            spacing={3}
            marginBottom={"40px"}
            direction= {{ xs: 'column', sm:'row' }}
          >
            <Box width={"100%"} maxWidth={"600px"}>
              <TextField sx={{
                width: "100%",
                maxWidth: "600px",
                "& input::placeholder": {
                  opacity: "1.42",
                },
                ".MuiFormHelperText-root": {
                  color: "#d32f2f",
                }
              }}
                inputProps={{ style: { fontSize: 24, padding: "6px 0px", color: "#0a0a0a", paddingBottom: "13px" } }} // font size of input text
                required
                id="standard-required"
                placeholder="First & LastName"
                variant="standard"
                error={personalDetails.firstname ? !!firstnameError : false}
                helperText={firstnameError}
                name="firstname"
                value={personalDetails.firstname}
                onChange={handleInputChange}
              />
            </Box>
            <Box width={"100%"} maxWidth={"600px"}>
              <TextField sx={{
              width: "100%",
              maxWidth: "600px",
                "& input::placeholder": {
                  opacity: "1.42",
                },
                ".MuiFormHelperText-root": {
                  color: "#d32f2f",
                }
              }}
                inputProps={{ style: { fontSize: 24, padding: "6px 0px", color: "#0a0a0a", paddingBottom: "13px" } }} // font size of input text
                required
                id="standard-required"
                placeholder="Company"
                variant="standard"
                error={personalDetails.company ? !!companyError : false}
                helperText={companyError}
                value={personalDetails.company}
                onChange={handleInputChange}
                name="company"
              />
            </Box>
          </Stack>
          <Stack
            display={"flex"}
            justifyContent={"space-evenly"}
            spacing={3}
            marginBottom={"40px"}
            direction= {{ xs: 'column', sm:'row' }}
          >
            <Box width={"100%"} maxWidth={"600px"}>
              <TextField sx={{
               width: "100%",
               maxWidth: "600px",
                "& input::placeholder": {
                  opacity: "1.42",
                },
                ".MuiFormHelperText-root": {
                  color: "#d32f2f",
                }
              }}
                inputProps={{ style: { fontSize: 24, padding: "6px 0px", color: "#0a0a0a", paddingBottom: "13px" } }} // font size of input text
                required
                id="standard-required"
                placeholder="E-mail Address"
                variant="standard"
                error={personalDetails.email ? !!emailError : false}
                helperText={emailError}
                name="email"
                value={personalDetails.email}
                onChange={handleInputChange}
              />
            </Box>
            <Box width={"100%"} maxWidth={"600px"}>
              <TextField sx={{
             width: "100%",
             maxWidth: "600px",
                "& input::placeholder": {
                  opacity: "1.42",
                },
                ".MuiFormHelperText-root": {
                  color: "#d32f2f",
                }
              }}
                inputProps={{ style: { fontSize: 24, padding: "6px 0px", color: "#0a0a0a", paddingBottom: "13px" } }} // font size of input text
                required
                id="standard-required"
                placeholder="Phone Number"
                variant="standard"
                error={personalDetails.phone ? !!phoneError : false}
                helperText={phoneError}
                name="phone"
                value={personalDetails.phone}
                onChange={handleInputChange}
              />
            </Box>
          </Stack>
          <Box padding={"10px 10px"} display={"flex"} justifyContent={"center"} margin={"2rem 0"} >
            <Button sx={{
              backgroundColor: "#df7c6d",
              borderRadius: "6px",
              color: "#fff",
              padding: "1.0rem 2.8rem",
              textAlign: "center",
              fontSize: "22px",
              width: "100%",
              maxWidth: "640px",
              textTransform: "capitalize",
              fontFamily: `"ProximaNovaMedium", sans-serif`,
              ":hover": {
                backgroundColor: "#f58977",
              }
            }} type="submit">Submit</Button>
          </Box>
          <Typography paddingTop={isXsScreen ? "0px" : "15px"} paddingBottom={isXsScreen ? "10px" : "100px"} textAlign={"center"} color={"#000000"} fontWeight={"500"} fontSize={"15px"}>If you run into problems accessing the portal or need<Typography color={"#000000"} fontWeight={"500"} fontSize={"15px"}>additional assistance, please reach out to <Link style={{
            textDecoration: "none",
            color: "#df7c6d",

          }} to={""}>partners@alterknit.co</Link></Typography></Typography>

        </form>
      </section>
    </Box>
  );
}
