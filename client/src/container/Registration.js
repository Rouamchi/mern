import React, { useState } from "react";
import Axios from 'axios'
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import './Registration.css'

function Registration() {

  const [gender, setGender] = useState()
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const [message, setMessage] = useState('')

  const [error] = useState([])
  const url = "http://localhost:4000/members"
  const [data, setData] = useState({
    username: "",
    password: "",
    fullname: "",
    birthdate: "",
    email: "",
    gender: ""
  });


  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function click(e) {
    e.preventDefault();
    Axios.post(url, {
      username: data.username,
      password: data.password,
      fullname: data.fullname,
      birthdate: data.birthdate,
      email: data.email,
      gender: data.gender
    })
      .then(res => {
        console.log(res.data)
        setMessage(res.data.msg)
        window.location = '/login'
      })
      .catch(error)
    // if (data.ok) {
    //   window.location = '/login'
    // }
  }
  return (
    <>
      <div className="Home-container registrationbackground">
        <Header />
        <div className="registration-title">Forum Read and Express</div>
        <div className="inputs">
          <div className="textfield"><TextField id="username" label="Username" value={data.username} onChange={(e) => { handle(e) }} /></div>
          <div className="textfield"><TextField id="password" label="Password" value={data.password} onChange={(e) => { handle(e) }} /></div>
          <div className="textfield"><TextField id="fullname" label="Fullname" value={data.fullname} onChange={(e) => { handle(e) }} /></div>
          <div className="textfield"><TextField id="birthdate" label="BirthDate" value={data.birthdate} onChange={(e) => { handle(e) }} /></div>
          <div className="textfield"><TextField id="email" label="Email" value={data.email} onChange={(e) => { handle(e) }} /></div>
          <div className="select">
            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChangeGender}

                // onChange={(e) => { handle(e) }}
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="send">
            <Stack direction="row" spacing={2}>
              <Button onClick={(e) => click(e)} variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Stack>
          </div>
          <div className="message">{message}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Registration;