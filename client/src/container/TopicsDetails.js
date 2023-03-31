// import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom'
import './TopicDetails.css'

export default function TopicDetails({ title, text }) {

  return (
    <>
      <div className="Home-container">
        <Header />
        <div className="createArticle" >
          <NavLink className="create-article" onClick={() => {
            window.location = '/CreateArticle'
          }}>Create A New Article
          </NavLink>
        </div>
        <div className="cardstopics">
          <div>
            <Card className="cardtopics" sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                  {text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
              </CardActions>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
