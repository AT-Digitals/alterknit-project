import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const getPersonalDetails = {
  firstname: "",
  email: "",
  phone: "",
  passage: "",
};

export default function FormFile() {
  const [personalDetails, setPersonalDetails] = useState(getPersonalDetails);
  const [firstnameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(personalDetails),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }


    let result = await fetch(
      'https://alterknit-backend.onrender.com/items', {
      method: "post",
      body: JSON.stringify({
        name: personalDetails.firstname,
        email: personalDetails.email,
        phone: personalDetails.phone,
        message: personalDetails.passage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // setPersonalDetails({ firstname: "", email: "", phone: "", passage: '' })
    result = await result.json();
    console.warn(result);
    if (result) {
      setPersonalDetails(getPersonalDetails);
    }

    // Initialize error variables
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let phoneError = "";
    let passageError = "";

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

    // Set the error state variables
    setFirstNameError(firstNameError);
    setEmailError(emailError);
    setPhoneError(phoneError);

    // Check if all errors are empty (i.e., inputs are valid)
    if (
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !phoneError &&
      !passageError
    ) {
      const data = {
        firstname: residentDetails.personalDetails.firstname,
        email: residentDetails.personalDetails.email,
        phone: residentDetails.personalDetails.phone,
        passage: residentDetails.personalDetails.passage,
      };

      console.log(data);
    }
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setShowDeleteIcon(true);
    }
  };

  const handleImageDelete = () => {
    setSelectedImage(null);
    setShowDeleteIcon(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      width={"100%"}
      height={"970px"}
      style={{
        backgroundColor: "#f8f1eb",
        backgroundImage: `url('	https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_care.png')`,
        backgroundSize: "contain",
      }}
      display={"flex"}
      justifyContent={"center"}
    >
      <form
        style={{
          borderRadius: "50px",
          border: "5px solid #df7c6d",
          backgroundColor: "#f8f1eb",
          marginTop: "60px",
          marginBottom: "30px",
          position: "absolute",
        }}
        onSubmit={handleSubmit}
      >
        <Box marginTop={"50px"}>
          <Typography
            marginTop={"20px"}
            borderBottom={"1px solid black"}
            textAlign={"center"}
            fontWeight={"500"}
            fontSize={"3rem"}
            color={"black"}
            fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
            textTransform={"lowercase"}
            letterSpacing={"2px"}
          >
            Contact us
          </Typography>

          <Stack margin={"30px"} direction="row" display="flex" spacing={3}>
            <Box>
              <Typography
                marginLeft={"5px"}
                marginBottom={"12px"}
                fontSize={"16px"}
                color="black"
                fontWeight={"500"}
                fontFamily={`"ProximaNovaMedium", sans-serif`}
              >
                NAME
              </Typography>
              <TextField
                sx={{
                  ".MuiOutlinedInput-input": {
                    width: "350px",
                  },
                  ".css-1wc848c-MuiFormHelperText-root": {
                    color: "red",
                  },
                  ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                    border: "1px solid lightgray",
                    height: "50px",
                    fontSize: "14px",
                    fontFamily: `"ProximaNovaMedium", sans-serif`,
                  },
                }}
                id="outlined-basic"
                error={personalDetails.firstname ? !!firstnameError : false}
                helperText={firstnameError}
                name="firstname"
                value={personalDetails.firstname}
                onChange={handleInputChange}
                variant="outlined"
                placeholder="Enter Your Name"
                required
              />
            </Box>
            <Box>
              <Button
                sx={{
                  backgroundColor: "#df7c6d",
                  color: "#fff",
                  marginLeft: "90px",
                  fontFamily: `"ProximaNovaMedium", sans-serif`,
                  marginTop: "40px",
                  padding: "12px 40px",
                  letterSpacing: "2px",
                  ":hover": {
                    backgroundColor: "#f58977",
                  },
                }}
                component="label"
                variant="contained"
              >
                Click To Attach A Photo
                <input
                  type="file"
                  hidden
                  accept="image"
                  onChange={handleImageChange}
                />
              </Button>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  style={{
                    width: "120px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />

              )}
              {showDeleteIcon && (
                <DeleteIcon style={{
                  color: "#df7c6d",
                }} onClick={handleImageDelete} />
              )}
            </Box>
          </Stack>

          <Stack margin={"30px"} spacing={3}>
            <Box>
              <Typography
                marginLeft={"5px"}
                marginBottom={"12px"}
                fontSize={"16px"}
                color="black"
                fontWeight={"500"}
                fontFamily={`"ProximaNovaMedium", sans-serif`}
              >
                EMAIL ID
              </Typography>

              <TextField
                sx={{
                  ".MuiOutlinedInput-input": {
                    width: "350px",
                  },
                  ".css-1wc848c-MuiFormHelperText-root ": {
                    color: "red",
                  },
                  ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                    border: "1px solid lightgray",
                    height: "50px",
                    fontSize: "14px",
                    fontFamily: `"ProximaNovaMedium", sans-serif`,
                  },
                }}
                id="outlined-basic"
                error={personalDetails.email ? !!emailError : false}
                helperText={emailError}
                name="email"
                value={personalDetails.email}
                onChange={handleInputChange}
                variant="outlined"
                placeholder="Enter Your Email ID"
                required
              />
            </Box>
            <Box>
              <Typography
                marginLeft={"5px"}
                marginBottom={"12px"}
                fontSize={"16px"}
                color="black"
                fontWeight={"500"}
                fontFamily={`"ProximaNovaMedium", sans-serif`}
              >
                PHONE NUMBER
              </Typography>
              <TextField
                sx={{
                  ".MuiOutlinedInput-input": {
                    width: "350px",
                  },
                  ".css-1wc848c-MuiFormHelperText-root": {
                    color: "red",
                  },
                  ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                    border: "1px solid lightgray",
                    height: "50px",
                    fontSize: "14px",
                    fontFamily: `"ProximaNovaMedium", sans-serif`,
                  },
                }}
                id="outlined-basic"
                type="number"
                error={personalDetails.phone ? !!phoneError : false}
                helperText={phoneError}
                name="phone"
                value={personalDetails.phone}
                onChange={handleInputChange}
                variant="outlined"
                placeholder="Enter Your Phone No"
                required
              />
            </Box>
          </Stack>
          <Box margin={"30px"}>
            <Typography
              margin={"0px 8px"}
              marginBottom={"12px"}
              fontSize={"16px"}
              color="black"
              fontWeight={"500"}
              fontFamily={`"ProximaNovaMedium", sans-serif`}
            >
              WHAT DO YOU HAVE IN MIND
            </Typography>

            <TextField
              sx={{
                ".MuiOutlinedInput-input": {
                  width: "785px",
                  marginBottom: "130px",
                },
                ".css-1wc848c-MuiFormHelperText-root": {
                  color: "red",
                },
                ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                  border: "1px solid lightgray",
                },
              }}
              id="outlined-basic"
              value={personalDetails.passage}
              onChange={handleInputChange}
              name="passage"
              variant="outlined"
              placeholder="Please enter query..."
              required
            />
          </Box>
          <Box textAlign={"center"}>
            <Button
              sx={{
                backgroundColor: "#df7c6d",
                color: "#fff",
                padding: "7px 60px",
                marginBottom: "30px",
                fontFamily: `"ProximaNovaMedium", sans-serif`,
                textTransform: "capitalize",
                fontSize: "18px",
                ":hover": {
                  backgroundColor: "#f58977",
                },
              }}
              variant="contained"
              type="submit"
            // onClick={handleSubmit}
            >
              Send
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
