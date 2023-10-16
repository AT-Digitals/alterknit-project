import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import alterknitImage from "../assets/alterknit.png";
import emailjs from "@emailjs/browser";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #fff",
  boxShadow: 24,
  p: 4,
};

const getPersonalDetails = {
  firstname: "",
  email: "",
  phone: "",
  passage: "",
  selectedImage: "",
};

export default function FormFile() {
  const [personalDetails, setPersonalDetails] = useState(getPersonalDetails);
  const [firstnameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
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
    if (/^1\d{10}$/.test(cleanedPhoneNumber)) {
      setPhoneError("");
      return true;
    }

    // Check for Indian phone numbers (country code +91)
    if (/^91\d{10}$/.test(cleanedPhoneNumber)) {
      setPhoneError("");
      return true;
    }

    // For any other input, show an error
    setPhoneError("Invalid phone number");
    return false;
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

  const form = useRef(null);

  const handleSubmit = async (e: any) => {
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

    // Set the error state variables
    setFirstNameError(firstNameError);
    setEmailError(emailError);
    setPhoneError(phoneError);

    if (!firstNameError && !emailError && !phoneError) {
      // If there are no validation errors, proceed with sending the email
      emailjs.sendForm('service_nkotnk7', 'template_aywsnlj', e.target, '0gKbZgIdRii6odnyc')
        .then((result) => {
          console.log(result.text);
          console.log("message sent");
          // Clear the form fields or reset the form state as needed
          // For example, if you're using React with state:
          setPersonalDetails({
            firstname: "",
            email: "",
            phone: "",
            passage: "",
            selectedImage: "", // Assuming it's a file input
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

    setSelectedImage(null);
    setShowDeleteIcon(false);

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
        selectedImage: residentDetails.personalDetails.selectedImage,
        Attachments : [
          {
            name : "smtp.png",
            path : residentDetails.personalDetails.selectedImage
          }]
      };

      console.log(data);
    }
  };

  const handleImageChange = (event: any) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setSelectedImage(selectedImage);
      setShowDeleteIcon(true);
      setPersonalDetails({
        ...personalDetails,
        selectedImage: selectedImage,
      });
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
        ref={form}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <Modal
          open={isModalOpen}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box display={"flex"} justifyContent={"center"}>
              <img src={alterknitImage} alt="logo" width="30%" height="15%" />
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
            <Box display={"flex"} justifyContent={"center"} padding={"9px 0px"}>
              <Button
                style={{
                  height: "30px",
                  backgroundColor: "black",
                  color: "white",
                  marginTop: "10px",
                }}
                onClick={closeModal}
              >
                OK
              </Button>
            </Box>
          </Box>
        </Modal>
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
                  ".css-bn26lx-MuiFormHelperText-root": {
                    color: "#d32f2f",
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
            <Stack direction={"row"} spacing={2}>
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
                    name="selectedImage"
                    accept="image"
                    onChange={handleImageChange}
                  />
                </Button>
              </Box>
              <Box paddingTop={"9px"} display={"flex"} alignItems={"center"}>
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
                  <DeleteIcon
                    style={{
                      color: "#df7c6d",
                    }}
                    onClick={handleImageDelete}
                  />
                )}
              </Box>
            </Stack>
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
                  ".css-bn26lx-MuiFormHelperText-root": {
                    color: "#d32f2f",
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
                  ".css-bn26lx-MuiFormHelperText-root": {
                    color: "#d32f2f",
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
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
