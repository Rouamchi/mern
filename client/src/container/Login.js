import React, { useState } from "react";
import Axios from 'axios'
import Header from "../components/Header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Login.css'
// import { redirect } from "react-router-dom";

function Login() {

  const [error, response] = useState([])
  const url = "http://localhost:4000/members/login"
  const [data, setData] = useState({
    username: "",
    password: "",
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
    })

      .then(res => {
        console.log(res.data)
      })
      .then(res => {
        window.location = '/'
      })
      .catch(error)
      console.log(Login)

  }

  return (
    <>
      <div className="Home-container">
        <Header />
        <div className="inputs-login">
          <div className="textfield">
            <TextField id="username" label="Username" value={data.username} onChange={(e) => { handle(e) }} /></div>
          <TextField id="password" label="Password" value={data.password} onChange={(e) => { handle(e) }} />

          <div className="login">
            <Stack direction="row" spacing={2}>
              <Button onClick={(e) => click(e)} variant="contained">
                Login
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;