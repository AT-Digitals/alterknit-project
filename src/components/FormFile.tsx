import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import FormAddress from "./FormAddress";
import { FormEvent, useCallback, useEffect, useState } from "react";
import CustomTextField from "../CommonComponent/CustomTextField";
import axios from "axios";

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
    {
      setPhone(phone);
    }
  }, [phone]);

  useEffect(() => {
    if (email) {
      EmailValidation(email);
    }
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
    {
      setFirstName(firstname);
      setLastName(lastName);
    }
  }, [firstname, lastName]);


  const handleSubmit = (e: any) => {
    e.preventDefault();

    let result = axios.post('http://localhost:3001/items', { firstname, passage, email, phone })
      .then((response: { data: any; }) => {
        console.log('Item added:', response.data);
        setFirstName('');
        setEmail('');
        setPhone('');
        setPassage('');
      })
      .catch((error: any) => {
        console.error('Error adding item:', error);
      });

    // if(result) {
    //   alert("data")
    // }

    // Initialize error variables
    let firstNameError = '';
    let lastNameError = '';
    let emailError = '';
    let phoneError = '';
    let passageError = '';

    // Validate and set errors
    if (!firstname) {
      firstNameError = 'Firstname is required';
    } else if (!FirstNameValidation(firstname)) {
      firstNameError = 'Invalid firstname format';
    }

    if (!lastName) {
      lastNameError = 'Lastname is required';
    } else if (!LastNameValidation(lastName)) {
      lastNameError = 'Invalid lastname format';
    }

    if (!email) {
      emailError = 'Email is required';
    } else if (!EmailValidation(email)) {
      emailError = 'Invalid email format';
    }

    if (!phone) {
      phoneError = 'Phone number is required';
    } else if (!PhoneValidation(phone)) {
      phoneError = 'Invalid phone number format';
    }

    if (!passage) {
      passageError = 'Passage is required';
    } else if (!PassageValidation(passage)) {
      passageError = 'Invalid firstname format';
    }

    // Set the error state variables
    setFirstNameError(firstNameError);
    setLastNameError(lastNameError);
    setEmailError(emailError);
    setPhoneError(phoneError);
    setPassageError(passageError);

    // Check if all errors are empty (i.e., inputs are valid)
    if (!firstNameError && !lastNameError && !emailError && !phoneError && !passageError) {
      const data = {
        firstname: firstname,
        lastName: lastName,
        email: email,
        phone: phone,
        passage: passage,
      };

      console.log(data);
    }
  };



  return (
    <Box display={"flex"} justifyContent={"space-around"}>
      <Box>
        <Stack margin={"30px"} direction="row"
          display="flex"
          spacing={3}>
          <Box>
            <Typography marginBottom={"12px"} fontSize={"16px"} color="black" fontWeight={"bold"}>FIRST NAME</Typography>
            <CustomTextField sx={{
              ".MuiOutlinedInput-input": {
                width: "300px"
              },
              ".css-1wc848c-MuiFormHelperText-root": {
                color: "red"
              }
            }} id="outlined-basic" error={firstname ? !!firstnameError : false}
              helperText={firstnameError} value={firstname} onChange={setFirstName} variant="outlined" placeholder="Enter Your First Name" />
          </Box>
          <Box>
            <Typography marginBottom={"12px"} fontSize={"16px"} color="black" fontWeight={"bold"}>LAST NAME</Typography>

            <CustomTextField sx={{
              ".MuiOutlinedInput-input": {
                width: "300px"
              },
              ".css-1wc848c-MuiFormHelperText-root": {
                color: "red"
              }
            }} id="outlined-basic" value={lastName} error={lastName ? !!lastnameError : false}
              helperText={lastnameError} onChange={setLastName} variant="outlined" placeholder="Enter Your Last Name" />
          </Box>
        </Stack>
        <Stack margin={"30px"} direction="row"
          display="flex"
          spacing={3}>
          <Box>
            <Typography marginBottom={"12px"} fontSize={"16px"} color="black" fontWeight={"bold"}>EMAIL ID</Typography>

            <CustomTextField sx={{
              ".MuiOutlinedInput-input": {
                width: "300px"
              },
              ".css-1wc848c-MuiFormHelperText-root ": {
                color: "red",
              }
            }} id="outlined-basic" error={email ? !!emailError : false}
              helperText={emailError} value={email} onChange={setEmail} variant="outlined" placeholder="Enter Your Email ID" />

          </Box>
          <Box>
            <Typography marginBottom={"12px"} fontSize={"16px"} color="black" fontWeight={"bold"}>PHONE NUMBER</Typography>
            <CustomTextField sx={{
              ".MuiOutlinedInput-input": {
                width: "300px"
              },
              ".css-1wc848c-MuiFormHelperText-root": {
                color: "red"
              }
            }} id="outlined-basic" type="number" error={phone ? !!phoneError : false}
              helperText={phoneError} value={phone} onChange={setPhone} variant="outlined" placeholder="Enter Your Phone No" />
          </Box>
        </Stack>
        <Box margin={"30px"}>
          <Typography margin={"0px 8px"} marginBottom={"12px"} fontSize={"16px"} color="black" fontWeight={"bold"}>WHAT DO YOU HAVE IN MIND</Typography>

          <CustomTextField sx={{

            ".MuiOutlinedInput-input": {
              width: "650px",
              marginBottom: "130px"
            },
            ".css-1wc848c-MuiFormHelperText-root": {
              color: "red"
            }
          }} id="outlined-basic" value={passage} onChange={setPassage} error={passage ? !!passageError : false}
            helperText={passageError} variant="outlined" placeholder="Please enter query..." />
        </Box>
        <Box margin={"0px 290px"}>
          <Button sx={{
            padding: "7px 50px"
          }} variant="contained" onClick={handleSubmit}>Submit</Button>
        </Box>
      </Box>
      <FormAddress />
    </Box>
  )
}