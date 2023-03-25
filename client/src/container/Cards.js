import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Cards.css'

export default function Cards() {

  const [sections, setSections] = useState([])
  // const [error] = useState([])


  useEffect(() => {
    fetch('http://localhost:4000/sections')
      .then(response => response.json())
      .then(res => setSections(res))
      .catch((err) => {
        console.log(err)
      })

  }, [])
  return (
    <div className="cards">
      {sections.map(
        (section) => {
          return (<div>
            <Card className="card" key={section._id} sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {section.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                {section.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small"
                onClick={() => {
                  window.location = `/topics/${section.name}`}}
                  >
                  Show Topics</Button>
              </CardActions>
            </Card>
          </div>)
        }

      )}
    </div>
  )
}
