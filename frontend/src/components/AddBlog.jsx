import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'


const labelStyle = {mb:1,
                    mt:2,
                    fontSize: '24px',
                    fontWeight: 'bold'
}


const AddBlog = () => {

  const [inputs, setInputs] = useState({
    title: " ",
    description: " ",
    imageURL: " "
  });

  const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
      }));
  }

  const sendRequest = async () => {
    const res = await axios.post("http://localhost:8000/api/blogs/add",{
      title: inputs.title,
      description: inputs.description,
      image: inputs.imageURL,
      user: localStorage.getItem('userId')
    })
    .catch(err => console.log(err))
    const data = await res.data;
    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
    sendRequest().then((data) => console.log(data) )
  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
          border={1} 
          borderColor= "gray" 
          borderRadius={10}
          boxShadow= "10px 10px 20px #ccc"
          padding={3}
          margin={'auto'}
          display = "flex"
          flexDirection={'column'}
          width = {"80%"}
          mt= {10}
          >
            <Typography 
              fontWeight={'blod'}
              padding = {3}
              color= {'gray'}
              variant = {"h3"}
              textAlign = 'center'
            > Post Your Blog
            </Typography>

            <InputLabel
                sx={labelStyle}
            >Title</InputLabel>
            <TextField name='title' onChange={handleChange} value={inputs.title} margin='normal' variant='outlined'/>
            <InputLabel
            sx={labelStyle}>Description</InputLabel>
            <TextField name='description' onChange={handleChange} value={inputs.description} margin='normal' variant='outlined'/>
            <InputLabel
            sx={labelStyle}>ImageURL</InputLabel>
            <TextField name='imageURL' onChange={handleChange} value={inputs.imageURL} margin='normal' variant='outlined'/>
            <Button sx={{mt:2, borderRadius: 4,varient:'contained', border: '1px solid #ccc'}} type='submit'>Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog