import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import './Topics.css'


export default function TopicsSport() {

  const api = 'http://localhost:4000'

  const [sections, setSections] = useState([])
  const [members, setMembers] = useState([])
  const [topicsSport, setTopicsSport] = useState([])

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
    fetch(`${api}/topicsSport`)
      .then(response => response.json())
      .then(res => setTopicsSport(res))
      .catch((err) => {
        console.log(err)
      })

  }, [])


  return (
    <>
      <div className="Home-container">
        <Header />
        <div className="createArticle">
          <NavLink className="create-article" onClick={() => {
            window.location = '/CreateArticle'
          }}>Create A Sport Article
          </NavLink>
        </div>
        <div className="cardstopics">
          {topicsSport.map(
            (topicSport) => {
              return (
                <div>
                  <Card className="cardtopics" key={topicSport._id} sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {topicSport.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {topicSport.text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button key={topicSport._id} size="small"
                        onClick={() => {
                          window.location = `/topics/Sport`
                        }}
                      >Show Détails</Button>
                    </CardActions>
                  </Card>
                  <div className="member">
                    By: {topicSport.member.fullname}
                  </div>
                </div>)
            }
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}