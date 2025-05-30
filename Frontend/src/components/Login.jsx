import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email, password };
    console.log("data:", data)
    try {
      const response = await axios.post("http://localhost:4000/api/register", data);
      // if (response.status === 200) navigate('/home')

      console.log("Register:", response.data);
      
    } catch (error) {
      setError(error.message)
    }
  };
  return (
    <>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "40ch" } }}
        noValidate={true}
        autoComplete="off"
      >
        <div>
          <TextField required id="outlined-required" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          {" "}
          <TextField required id="outlined-required" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        {error}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
}
