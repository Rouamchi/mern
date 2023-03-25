import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import './TopicDetails.css'

export default function TopicDetails() {
  // const apiSport = 'http://localhost:4000/topicsSport'
  // const apiNews = 'http://localhost:4000/topicsNews'
  const apiArt = 'http://localhost:4000/topicsArt'

  // const [sections, setSections] = useState([])
  // const [members, setMembers] = useState([])
  // const [topicsSport, setTopicsSport] = useState([])
  // const [topicsNews, setTopicsNews] = useState([])
  const [topicsArt, setTopicsArt] = useState([])

  //const [error] = useState([])

  // useEffect(() => {
  //   fetch(`${api}/sections`)
  //     .then(response => response.json())
  //     .then(res => setSections(res))
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //   console.log("sections", sections)

  // }, [sections])

  // useEffect(() => {
  //   fetch(`${api}/members`)
  //     .then(response => response.json())
  //     .then(res => setMembers(res))
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //   console.log("members", members)

  // }, [members])

  // useEffect(() => {
  //   fetch(`${apiSport}`)
  //     .then(response => response.json())
  //     .then(res => setTopicsSport(res))
  //     .catch((err) => {
  //       console.log(err)
  //     })

  // }, [topicsSport])


  // useEffect(() => {
  //   fetch(`${apiNews}`)
  //     .then(response => response.json())
  //     .then(res => setTopicsNews(res))
  //     .catch((err) => {
  //       console.log(err)
  //     })

  // }, [topicsNews])

  useEffect(() => {
    fetch(`${apiArt}`)
      .then(response => response.json())
      .then(res => setTopicsArt(res))
      .catch((err) => {
        console.log(err)
      })

  }, [topicsArt])
  return (
    <>
      <div className="Home-container">
        <Header />
        <Stack direction="row" spacing={2}>
          <Button variant="contained"
            onClick={() => {
              window.location = '/CreateArticle'
            }}>
            Create Article
          </Button>
        </Stack>
        {/* <div className="cardstopics">
          {topicsSport.map(
            (topicSport) => {
              return (
                <div>
                  <Card className="cardtopics" key={topicSport._id} sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {topicSport.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" >
                        {topicSport.text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                    </CardActions>
                  </Card>
                </div>)
            }
          )}
        </div>

        <div className="cardstopics">
          {topicsNews.map(
            (topicNews) => {
              return (
                <div>
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
                    </CardActions>
                  </Card>
                </div>)
            }
          )}
        </div> */}

        <div className="cardstopics">
          {topicsArt.map(
            (topicArt) => {
              return (
                <div>
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
                    </CardActions>
                  </Card>
                </div>)
            }
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}
