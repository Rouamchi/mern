import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom'
import TopicDetails from "./TopicsDetails";
import './Topics.css'

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TopicsArt() {

  const api = 'http://localhost:4000'

  const [sections, setSections] = useState([])
  const [members, setMembers] = useState([])
  const [topicsArt, setTopicsArt] = useState([])
  //const [error] = useState([])

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

  useEffect(() => {
    fetch(`${api}/topicsArt`)
      .then(response => response.json())
      .then(res => setTopicsArt(res))
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <>
      <div className="Home-container">
        <Header />
        <div className="createArticle" >
          <NavLink className="create-article" onClick={() => {
            window.location = '/CreateArticle'
          }}>Create A Art Article
          </NavLink>
        </div>
        <div className="cardstopics">
          {topicsArt.map(
            (topicArt) => {
              return (
                <div>
                  {/* <Card className="titleTopic">
                    <Typography className="member">
                      <h4> Section : " Art "</h4>
                    </Typography>
                  </Card> */}
                  <Card className="cardtopics" key={topicArt._id} sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {topicArt.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" >
                        {topicArt.text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button key={topicArt._id} size="small"
                        onClick={() => {
                          window.location = `/topics/Art/TopicsDetails/${topicArt._id}`
                        }}
                      >Show Détails</Button>
                    </CardActions>
                  </Card>
                  <div className="member">
                    By: {topicArt.member.fullname}
                  </div>

                </div>
              )
            }
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}