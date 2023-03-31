import React, {useEffect, useState } from "react";
import Axios from 'axios'
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import './CreateArticle.css'

function CreateArticle() {

  const [sections, setSections] = useState([])
  const [members, setMembers] = useState([])

  const api = 'http://localhost:4000'

  useEffect(() => {
    fetch(`${api}/sections`)
      .then(response => response.json())
      .then(res => setSections(res))
      .catch((err) => {
        console.log(err)
      })
    console.log("sections", sections)

  }, [sections])

  useEffect(() => {
    fetch(`${api}/members`)
      .then(response => response.json())
      .then(res => setMembers(res))
      .catch((err) => {
        console.log(err)
      })
    console.log("members", members)

  }, [members])

  const urlSport = "http://localhost:4000/topicsSport"
  const [data, setData] = useState({
    title: "",
    text: "",
    section: "",
    member: ""
  });


  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function click(e) {
    e.preventDefault();
    Axios.post(urlSport, {
      title: data.title,
      text: data.text,
      section: data.section.name,
      member: data.member.fullname,
    })
      .then(res => {
        console.log(res.data)
        window.location = '/home'
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <>
      <div className="Home-container registrationbackground">
        <Header />
        <div className="registration-title">Forum Read and Express</div>
        <div className="inputs">
          <div className="textfield"><TextField id="section" label="Section" value={data.section.name} onChange={(e) => { handle(e) }} /></div>
          <div className="textfield"><TextField id="member" label="Member" value={data.member.fullname} onChange={(e) => { handle(e) }} /></div>
          <div className="textfield"><TextField id="title" label="Title" value={data.title} onChange={(e) => { handle(e) }} /></div>
          <div className="textfield"><TextField id="text" label="Text" value={data.text} onChange={(e) => { handle(e) }} /></div>
          <div className="send">
            <Stack direction="row" spacing={2}>
              <Button onClick={(e) => click(e)} variant="contained" endIcon={<SendIcon />}>
                Create
              </Button>
            </Stack>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default CreateArticle;