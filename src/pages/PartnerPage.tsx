import float from "../assets/logo-flat.png";
import image1 from "../assets/bg-top (1).svg";
import { Box, Button, Card, CardContent, Stack, TextField, Typography, styled } from "@mui/material";
import image2 from "../assets/bg-bottom.svg";
import image3 from "../assets/logo-3d.png";
import image4 from "../assets/banner.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CustomTextField = styled(TextField)({
  ".css-1qknc5a-MuiInputBase-root-MuiInput-root": {
    fontSize: "1.6rem",
    width: "600px",
    padding: "6px 0px",
  },
  ".css-1vf0mvf-MuiFormHelperText-root": {
    color: "#d32f2f",
  },
  ".css-1x51dt5-MuiInputBase-input-MuiInput-input::-webkit-input-placeholder": {
    color: "#0a0a0a",
    opacity: "1.42",
  }
});


const getPersonalDetails = {
  firstname: "",
  company: "",
  email: "",
  phone: "",
};

export default function PartnerPage() {

  const [personalDetails, setPersonalDetails] = useState(getPersonalDetails);
  const [firstnameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [companyError, setCompanyError] = useState("");

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
    if (/^\d{10}$/.test(name)) {
      setPhoneError("");
      return true;
    } else {
      setPhoneError("Phone number must have 10 digits");
      return false;
    }
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

    try {
      const response = await fetch('/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(personalDetails)
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }

    let result = await fetch(
      'http://localhost:3001/items', {
      method: "post",
      body: JSON.stringify({ name: personalDetails.firstname, email: personalDetails.email, phone: personalDetails.phone, company: personalDetails.company }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // setPersonalDetails({ firstname: "", email: "", phone: "", company: '' })
    result = await result.json();
    console.warn(result);
    if (result) {
      setPersonalDetails(getPersonalDetails)
    }

    // Initialize error variables
    let firstNameError = "";
    let lastNameError = "";
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
    // Check if all errors are empty (i.e., inputs are valid)
    if (
      !firstNameError &&
      !companyError &&
      !emailError &&
      !phoneError

    ) {
      const data = {
        firstname: residentDetails.personalDetails.firstname,
        email: residentDetails.personalDetails.email,
        phone: residentDetails.personalDetails.phone,
        company: residentDetails.personalDetails.company,
      };

      console.log(data);
    }
  };

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
        }} width={"100%"} maxWidth={"1230px"}>
          <Typography marginTop={"-179px"} marginLeft={"313px"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={"5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>WHAT WE CAN DO<Typography style={{
            marginLeft: "33px",
            marginTop: "-75px",
            wordSpacing: "-65px",

          }} fontFamily={`"Jaceline", sans-serif`} fontSize={"22rem"}>for you!</Typography></Typography>
        </Box>
        <Box sx={{
          position: "relative",
          zIndex: "2",
          marginTop: "-73px",
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
              <Typography color={"#000000"} fontWeight={"500"} fontSize={"16px"}  fontFamily={`"ProximaNovaMedium", sans-serif`}>We specialize in invisible repair. The garment is returned<Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>to your customer restored and ready to wear.</Typography></Typography>
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
              <Typography color={"#000000"} fontWeight={"500"} fontSize={"16px"}  fontFamily={`"ProximaNovaMedium", sans-serif`}>Take the stress away from your team and your customer,<Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>we handle everything from logistics to customer service.</Typography></Typography>
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
              <Typography color={"#000000"} fontWeight={"500"} fontSize={"16px"}  fontFamily={`"ProximaNovaMedium", sans-serif`}>We make sure your customer is blown away by the result<Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>and comes back to you for their next purchase.</Typography></Typography>
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
              <Typography color={"#000000"} fontWeight={"500"} fontSize={"16px"}  fontFamily={`"ProximaNovaMedium", sans-serif`}>Gain a new source of income while expanding<Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>your service offering.</Typography></Typography>
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
              <Typography color={"#000000"} fontWeight={"500"} fontSize={"16px"}  fontFamily={`"ProximaNovaMedium", sans-serif`}>As your business grows, we'll work with you to meet<Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>your needs.</Typography></Typography>
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
              <Typography color={"#000000"} fontWeight={"500"} fontSize={"16px"}  fontFamily={`"ProximaNovaMedium", sans-serif`}>We're proud to give garments a second chance while<Typography color={"black"} fontWeight={"500"} fontSize={"15px"}>maintaining sustainability in our practices.</Typography></Typography>
            </CardContent>
          </Card>
        </Box>
        <img width={"100%"} src={image2} alt="bottom" style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          marginBottom: "40px",
        }} />
      </section>
      <section>
        <Typography marginBottom={"-105px"} marginTop={"-170px"} display={"flex"} justifyContent={"center"} alignItems={"center"} color={"black"} fontWeight={"400"} fontSize={"5.2rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`}>PARTNER WITH THE<Typography fontSize={"20rem"} fontFamily={`"Jaceline", sans-serif`} marginLeft={"18px"}>best</Typography>
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
              <Typography color={"#6b7177"} fontWeight={"500"} fontSize={"16px"}  fontFamily={`"ProximaNovaMedium", sans-serif`}>If you're currently running a repair program or looking to get started offering repairs and alterations, we're here to help provide you with a custom solution to get your customers into their favorite garments. Each garment that comes to us is returned both visually and structurally to its original condition. You close the loop and we close the holes.</Typography>
            </CardContent>
          </Card>
        </Box>
      </section>
      <section>
        <Box padding={"2rem 0"}>
          <Typography textAlign={"center"} color={"black"} fontWeight={"600"} fontSize={"6rem"} fontFamily={`"IndustrialGothicBannerStd", sans-serif`} textTransform={"lowercase"}>BECOME A PARTNER</Typography>
          <Typography fontFamily={`"ProximaNovaMedium", sans-serif`} lineHeight={"1.5"} color={"black"} fontWeight={"500"} maxWidth={"590px"} textAlign={"center"} fontSize={"24px"} margin={"0 auto"}>We're excited to talk to you. To connect with us, please submit an inquiry below and a member of our team will get back to you shortly.</Typography>
        </Box>
        <form onSubmit={handleSubmit} style={{
          marginTop: "50px",
        }}>
          <Stack display={"flex"} justifyContent={"center"} spacing={12} marginBottom={"40px"} direction={"row"}>
            <Box>
              <TextField sx={{
                width: "600px",
                "& input::placeholder": {
                   opacity: "1.42",
                },
              }}
                inputProps={{style: {fontSize: 24, padding:"6px 0px", color: "#0a0a0a", paddingBottom: "13px"}}} // font size of input text
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
            <Box>
              <TextField sx={{
                width: "600px",
                "& input::placeholder": {
                  opacity: "1.42",
               },
              }}
                inputProps={{style: {fontSize: 24, padding:"6px 0px", color: "#0a0a0a", paddingBottom: "13px"}}} // font size of input text
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
          <Stack display={"flex"} justifyContent={"center"} spacing={12} marginBottom={"40px"} direction={"row"}>
            <Box>
              <TextField sx={{
                width: "600px",
                "& input::placeholder": {
                  opacity: "1.42",
               },
              }}
                inputProps={{style: {fontSize: 24, padding:"6px 0px", color: "#0a0a0a", paddingBottom: "13px"}}} // font size of input text
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
            <Box>
              <TextField sx={{
                width: "600px",
                "& input::placeholder": {
                  opacity: "1.42",
               },
              }}
                inputProps={{style: {fontSize: 24, padding:"6px 0px", color: "#0a0a0a", paddingBottom: "13px"}}} // font size of input text
                required
                id="standard-required"
                placeholder="Phone Number"
                variant="standard"
                type="number"
                error={personalDetails.phone ? !!phoneError : false}
                helperText={phoneError}
                name="phone"
                value={personalDetails.phone}
                onChange={handleInputChange}
              />
            </Box>
          </Stack>
          <Box paddingTop={"15px"} display={"flex"} justifyContent={"center"} margin={"2rem 0"} >
            <Button sx={{
              backgroundColor: "#df7c6d",
              borderRadius: "6px",
              color: "#fff",
              padding: "1.2rem 3rem",
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
          <Typography paddingTop={"15px"} paddingBottom={"100px"} textAlign={"center"} color={"#000000"} fontWeight={"500"} fontSize={"15px"}>If you run into problems accessing the portal or need<Typography color={"#000000"} fontWeight={"500"} fontSize={"15px"}>additional assistance, please reach out to <Link style={{
            textDecoration: "none",
            color: "#df7c6d",

          }} to={""}>partners@alterknit.co</Link></Typography></Typography>
        </form>
      </section>
    </Box>
  )
}