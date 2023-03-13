import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Cards.css'

export default function Topics() {

  const [topics, setTopics] = useState([])
  const [error] = useState([])


  useEffect(() => {
    fetch('http://localhost:4000/topics')
      .then(response => response.json())
      .then(res => setTopics(res))
      .catch(error)

  }, [])
  return (
    <div className="cards">
      {topics.map(
        (topic) => {
          return (<div>
            <Card className="card" sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {topic.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                {topic.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small"
                // onClick={() => {
                //   window.location = `/section/topics`}}
                >
                  Show Détails</Button>
              </CardActions>
            </Card>
          </div>)
        }

      )}
    </div>
  )
}