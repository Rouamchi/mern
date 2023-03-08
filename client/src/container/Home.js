// import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
// import useFetch from 'use-http'

function Home() {

  return (
    <>
      <div className="Home-container">
        <Header />
        <Cards />
        {/* <div>
          {sections.map(
            (section) => 
              <div>{section.name}</div>)
            
          }
        </div> */}
        <Footer />
      </div>

    </>
  );
}

export default Home;