import { Box, Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"

export default function Signup() {
  const [payload, setPayload] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contact: 0,
  })

  const handleOnChange = (e) => {
      const {name, value} = e.target
    setPayload(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
            const response = await axios.post('http://localhost:4000/api/v1/register', payload)
            console.log("response:", response.data);
      } catch (error) {
            console.log(error)
      }
  }

  return (
    <>
      <Box
        onSubmit={e => handleSubmit(e)}
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "40ch" } }}
        noValidate={false}
        autoComplete="off"
      >
       <div>
          {" "}
          <TextField required name='firstName' label="First Name" value={payload.firstName} onChange={handleOnChange}/>
        </div>
       <div>
          {" "}
          <TextField required name='lastName' label="Last Name" value={payload.lastName} onChange={handleOnChange}/>
        </div>
        <div>
          <TextField required name='email' label="Email" value={payload.email} onChange={handleOnChange}/>
        </div>
        <div>
          {" "}
          <TextField required name='password' label="Password" value={payload.password} onChange={handleOnChange}/>
        </div>
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </>
  )
}
