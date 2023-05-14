import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import TopicsSport from "./TopicsSport";
import './TopicsDetails.css'

export default function TopicDetails() {
  const { _id } = useParams();
  const [topicsDetails, setTopicsDetails] = useState({})
  const [topicsSport, setTopicsSport] = useState({})

  useEffect(() => {
    let topicDetails = topicsSport.find(
      (topicDetails) => topicDetails._id === parseInt(_id));
    if (topicDetails) {
      setTopicsDetails(topicsDetails);
    }

  }, [])

  return (
    <>
      <div className="Home-container">
        <Header />

        <div className="cardstopics">
          <TopicsSport />
          {/* {topicsSport.map(
          (topicSport) => {
              return (
                <div>
                  <Card className="cardtopics" key={topicsSport._id} sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1>{topicsSport.title}</h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary" >
                        <p>{topicsSport.text}</p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                    </CardActions>
                  </Card>
                </div>)
            }
          )}   */}
        </div>

        <Footer />
      </div>
    </>
  )
}
