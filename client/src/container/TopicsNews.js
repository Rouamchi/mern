import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import './Topics.css'

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TopicsNews() {

  const api = 'http://localhost:4000'

  const [sections, setSections] = useState([])
  const [members, setMembers] = useState([])
  const [topicsNews, setTopicsNews] = useState([])
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
    fetch(`${api}/topicsNews`)
      .then(response => response.json())
      .then(res => setTopicsNews(res))
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <>
      <div className="Home-container">
        <Header />
        <Stack direction="row" spacing={2}>
          <Button variant="contained"
            onClick={() => {
              window.location = '/CreateArticle'
            }}>
            Create A News Article
          </Button>
        </Stack>
        <div className="cardstopics">
          {topicsNews.map(
            (topicNews) => {
              return (
                <div>
                  {/* <Card className="titleTopic">
                    <Typography className="member">
                      <h4> Section : " News "</h4>
                    </Typography>
                  </Card> */}
                  <Card className="cardtopics" key={topicNews._id} sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {topicNews.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" >
                        {topicNews.text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button key={topicNews._id} size="small"
                        onClick={() => {
                          window.location = '/topics/News/TopicsDetails'
                        }}
                      >Show Détails</Button>
                    </CardActions>
                  </Card>
                  <div className="member">
                    By: {topicNews.member.fullname}
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