import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import FormAddress from "./FormAddress";
import { useState } from "react";



export default function FormFile() {

  const initialValues = { firstName: "", lastname: "", email: "", phone: ""}

  const [name, setName] = useState(initialValues);

  const handleChange = () => {
    setName(initialValues);
  }



    return (
        <Box display={"flex"} justifyContent={"space-around"}>
        <Box>
            <Stack margin={"30px"} direction="row"
                   display="flex"
                   spacing={3}>
                     <Box>
                   <Typography marginBottom={"12px"} fontSize={"16px"} color="black" fontWeight={"bold"}>FIRST NAME</Typography>
                <TextField  sx={{
              ".MuiOutlinedInput-input": {
              width: "300px"
              },
            }} id="outlined-basic" value={initialValues.firstName} onChange={handleChange}  variant="outlined" placeholder="Enter your Name" /> 
            </Box>
            <Box>
              <Typography marginBottom={"12px"} fontSize={"16px"} color="black" fontWeight={"bold"}>LAST NAME</Typography>
            
        <TextField  sx={{
              ".MuiOutlinedInput-input": {
                width: "300px"
              },
            }} id="outlined-basic" value={initialValues.lastname} variant="outlined" placeholder="Enter your Name" /> 
            </Box>
            </Stack>
            <Stack margin={"30px"} direction="row"
                   display="flex"
                   spacing={3}>
                     <Box>
                   <Typography marginBottom={"12px"} fontSize={"16px"} color="black" fontWeight={"bold"}>EMAIL ID</Typography>
                  
                <TextField  sx={{
              ".MuiOutlinedInput-input": {
              width: "300px"
              },
            }} id="outlined-basic" value={initialValues.email} variant="outlined" placeholder="Enter your Email ID" /> 
            </Box>
            <Box>
              <Typography marginBottom={"12px"} fontSize={"16px"} color="black" fontWeight={"bold"}>PHONE NUMBER</Typography>
        <TextField  sx={{
              ".MuiOutlinedInput-input": {
                width: "300px"
              },
            }} id="outlined-basic" value={initialValues.phone} type="number" variant="outlined" placeholder="Enter your Phone No" /> 
            </Box>
            </Stack>
             <Box margin={"30px"}>
              <Typography margin={"0px 8px"} marginBottom={"12px"} fontSize={"16px"} color="black" fontWeight={"bold"}>WHAT DO YOU HAVE IN MIND</Typography>
            
        <TextField   sx={{
           
              ".MuiOutlinedInput-input": {
                width: "650px",
                marginBottom: "130px"
              },
            }} id="outlined-basic" variant="outlined" placeholder="Please enter query..." /> 
            </Box>
            <Box margin={"0px 290px"}>
            <Button sx={{
                padding: "7px 50px"
            }} variant="contained">Submit</Button>
            </Box>
        </Box> 
        <FormAddress />
           </Box>
    )
}