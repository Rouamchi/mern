import React, { useState } from "react";
import Axios from 'axios'
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useLocalStorage } from "react-use-storage";
import './Login.css'

function Login() {

  const [islogin, setIslogin, removeIslogin] = useLocalStorage("islogin", false);
  const [memberId, setMemberId, removeMemberId] = useLocalStorage("memberId", '');

  const [message, setMessage] = useState('')
  //const [error] = useState([])
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
        setMessage(res.data.state)
        setIslogin(true)
        setMemberId(res.data._id)
        // window.location = '/home'
        console.log(res.data._id)
      })
      // .then((data) => window.location.href = data.mylink)
      .catch((err) => {
        console.log(err)
      })
    // if (data.state.ok) {
    //    window.location = '/home'
    // }

    // if (data.ok) {
    //   setIslogin(true)
    //   setMemberId(data._id)
    //   console.log(data._id)
    // }

  }

  return (
    <>
      <div className="Home-container loginbackground" >
        <Header />
        <div className="login-title">Forum Read and Express</div>
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
          <div className="message">{message}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Login;

//////////////////////////////////


