import { Box, Button, TextField } from "@mui/material";

import { auth } from "../firebase";
import routes from "../routes/routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log(email + "" + password);
      navigate(routes.ALTERKNIT_HEADER);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <Box mt={5}>
      <TextField
        label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSubmit}>Login</Button>
    </Box>
  );
}
