// import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom'
import TopicsSport from "./TopicsSport";
// import TopicsNews from "./TopicsNews";
// import TopicsArt from "./TopicsArt"
import './TopicDetails.css'

export default function TopicDetails({topicSport, topicNews, topicArt}) {

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
            <TopicsSport/>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
