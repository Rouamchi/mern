// import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
// import useFetch from 'use-http'

function Home() {

  // const { get, post, response, loading, error } = useFetch('http://localhost:4000')
  // const [sections, setSections] = useState([])
  // const [error] = useState([])


  // useEffect(() => {
  //   fetch('http://localhost:4000/sections')
  //   .then(response => response.json())
  //   .then(res => setSections(res))
  //   .catch(error)

  // }, [])
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
      </div>

    </>
  );
}

export default Home;