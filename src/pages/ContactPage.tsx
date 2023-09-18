import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

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

  const handleSubmit = (e: any) => {
    e.preventDefault();

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

    setPersonalDetails({
      ...personalDetails,
    });

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

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box>
        <Typography
          marginTop={"20px"}
          borderBottom={"1px solid black"}
          textAlign={"center"}
          fontWeight={"bold"}
          fontSize={"32px"}
          color={"black"}
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
              fontWeight={"bold"}
            >
              NAME
            </Typography>
            <TextField
              sx={{
                ".MuiOutlinedInput-input": {
                  width: "650px",
                },
                ".css-1wc848c-MuiFormHelperText-root": {
                  color: "red",
                },
                ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                  border: "1px solid lightgray",
                  height: "50px",
                  fontSize: "14px",
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
            />
          </Box>
        </Stack>
        <Stack margin={"30px"} spacing={3}>
          <Box>
            <Typography
              marginLeft={"5px"}
              marginBottom={"12px"}
              fontSize={"16px"}
              color="black"
              fontWeight={"bold"}
            >
              EMAIL ID
            </Typography>

            <TextField
              sx={{
                ".MuiOutlinedInput-input": {
                  width: "650px",
                },
                ".css-1wc848c-MuiFormHelperText-root ": {
                  color: "red",
                },
                ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                  border: "1px solid lightgray",
                  height: "50px",
                  fontSize: "14px",
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
            />
          </Box>
          <Box>
            <Typography
              marginLeft={"5px"}
              marginBottom={"12px"}
              fontSize={"16px"}
              color="black"
              fontWeight={"bold"}
            >
              PHONE NUMBER
            </Typography>
            <TextField
              sx={{
                ".MuiOutlinedInput-input": {
                  width: "650px",
                },
                ".css-1wc848c-MuiFormHelperText-root": {
                  color: "red",
                },
                ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                  border: "1px solid lightgray",
                  height: "50px",
                  fontSize: "14px",
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
            />
          </Box>
        </Stack>
        <Box margin={"30px"}>
          <Typography
            margin={"0px 8px"}
            marginBottom={"12px"}
            fontSize={"16px"}
            color="black"
            fontWeight={"bold"}
          >
            WHAT DO YOU HAVE IN MIND
          </Typography>

          <TextField
            sx={{
              ".MuiOutlinedInput-input": {
                width: "650px",
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
          />
        </Box>
        <Box textAlign={"center"}>
          <Button
            sx={{
              boxShadow: `0px 2px 5px black`,
              padding: "7px 60px",
              background: "black",
              ":hover": {
                background: "black",
              },
            }}
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
