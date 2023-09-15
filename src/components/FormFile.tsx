import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import CustomTextField from "../CommonComponent/CustomTextField";
import FormAddress from "./FormAddress";

export default function FormFile() {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstnameError, setFirstNameError] = useState("");
  const [lastnameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passage, setPassage] = useState("");
  const [passageError, setPassageError] = useState("");


  const PassageValidation = (name: string) => {
    if (/^[a-zA-Z\s]{1,40}$/.test(name)) {
      setPassageError("");
      return true;
    } else {
      setPassageError("Only allowed characters and space");
      return false;
    }
  };

  useEffect(() => {
    if (passage) {
      PassageValidation(passage);
    }
    // eslint-disable-next-line no-lone-blocks
    {
      setPassage(passage);
    }
  }, [passage]);

  const FirstNameValidation = (name: string) => {
    if (/^[a-zA-Z\s]{1,40}$/.test(name)) {
      setFirstNameError("");
      return true;
    } else {
      setFirstNameError("Only allowed characters and space");
      return false;
    }
  };

  const LastNameValidation = (name: string) => {
    if (/^[a-zA-Z\s]{1,40}$/.test(name)) {
      setLastNameError("");
      return true;
    } else {
      setLastNameError("Only allowed characters and space");
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
    if (phone) {
      PhoneValidation(phone);
    }
    // eslint-disable-next-line no-lone-blocks
    {
      setPhone(phone);
    }
  }, [phone]);

  useEffect(() => {
    if (email) {
      EmailValidation(email);
    }
    // eslint-disable-next-line no-lone-blocks
    {
      setEmail(email);
    }
  }, [email]);

  useEffect(() => {
    if (firstname) {
      FirstNameValidation(firstname);
    }
    if (lastName) {
      LastNameValidation(lastName);
    }
    // eslint-disable-next-line no-lone-blocks
    {
      setFirstName(firstname);
      setLastName(lastName);
    }
  }, [firstname, lastName]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      firstname: firstname,
      lastName: lastName,
      email: email,
      phone: phone,
    };

    console.log(data);
  };

  return (
    <Box display={"flex"} justifyContent={"space-around"}>
      <Box>
        <Stack margin={"30px"} direction="row" display="flex" spacing={3}>
          <Box>
            <Typography
              marginBottom={"12px"}
              fontSize={"16px"}
              color="black"
              fontWeight={"bold"}
            >
              FIRST NAME
            </Typography>
            <CustomTextField
              required={true}
              sx={{
                ".MuiOutlinedInput-input": {
                  width: "300px",
                },
              }}
              id="outlined-basic"
              error={firstname ? !!firstnameError : false}
              helperText={firstnameError}
              value={firstname}
              onChange={setFirstName}
              variant="outlined"
              placeholder="Enter your Name"
            />
          </Box>
          <Box>
            <Typography
              marginBottom={"12px"}
              fontSize={"16px"}
              color="black"
              fontWeight={"bold"}
            >
              LAST NAME
            </Typography>

            <CustomTextField
              sx={{
                ".MuiOutlinedInput-input": {
                  width: "300px",
                },
              }}
              id="outlined-basic"
              value={lastName}
              error={lastName ? !!lastnameError : false}
              helperText={lastnameError}
              onChange={setLastName}
              variant="outlined"
              placeholder="Enter your Name"
            />
          </Box>
        </Stack>
        <Stack margin={"30px"} direction="row" display="flex" spacing={3}>
          <Box>
            <Typography
              marginBottom={"12px"}
              fontSize={"16px"}
              color="black"
              fontWeight={"bold"}
            >
              EMAIL ID
            </Typography>

            <CustomTextField
              sx={{
                ".MuiOutlinedInput-input": {
                  width: "300px",
                },
              }}
              id="outlined-basic"
              error={email ? !!emailError : false}
              helperText={emailError}
              value={email}
              onChange={setEmail}
              variant="outlined"
              placeholder="Enter your Email ID"
            />
          </Box>
          <Box>
            <Typography
              marginBottom={"12px"}
              fontSize={"16px"}
              color="black"
              fontWeight={"bold"}
            >
              PHONE NUMBER
            </Typography>
            <CustomTextField
              sx={{
                ".MuiOutlinedInput-input": {
                  width: "300px",
                },
              }}
              id="outlined-basic"
              type="number"
              error={phone ? !!phoneError : false}
              helperText={phoneError}
              value={phone}
              onChange={setPhone}
              variant="outlined"
              placeholder="Enter your Phone No"
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

          <CustomTextField
            sx={{
              ".MuiOutlinedInput-input": {
                width: "650px",
                marginBottom: "130px",
              },
            }}
            id="outlined-basic"
            value={passage}
            onChange={setPassage}
            error={passage ? !!passageError : false}
            helperText={passageError}
            variant="outlined"
            placeholder="Please enter query..."
          />
        </Box>
        <Box margin={"0px 290px"}>
          <Button
            sx={{
              padding: "7px 50px",
            }}
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <FormAddress />
    </Box>
  );
}

