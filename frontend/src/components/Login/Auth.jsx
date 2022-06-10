import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Auth = () => {
  const [inputs, setInputs] = useState({
    name : "",
    email: "",
    password: ""
  })

  const handleChange  = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
      }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
  }
   const [isSignup, setIsSignUp] = useState(false);
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <Box  
          maxWidth={400}
          display='flex' 
          flexDirection={'column'} alignItems="center" justifyContent={'center'} boxShadow="10px 10px 20px #ccc" 
            padding={3}
            margin='auto'
            marginTop={5}
            borderRadius = {5}>
              <Typography variant='h3' padding={3} textAlign= 'center'>{ isSignup ? "Signup" : "Login"}</Typography>
            { isSignup &&  <TextField name='name'
                                      onChange={handleChange} 
                                      value={inputs.name} 
                                      margin='normal' 
                                      placeholder='Name'/>}
              <TextField 
              name='email'
              onChange={handleChange} 
              value = {inputs.email}  
              margin='normal' 
              type={'email'} 
              placeholder='Email'/>
              <TextField 
              name='password'
              onChange={handleChange} 
              value={inputs.password} 
              margin='normal' 
              type={'password'} 
              placeholder='password'/>
              <Button 
                  type='submit'
                  variant='contained' 
                  sx={{borderRadius: 3, marginTop: 3 , BackgroundColor:"#1976D2" }} 
                  >Login</Button>
              <Button
               sx={{borderRadius: 3, marginTop: 1 }}
               onClick={() => setIsSignUp(!isSignup)}>Move to { isSignup ? "Login" : "Signup"}</Button>
        </Box>
      </form>

    </div>
  )
}

export default Auth