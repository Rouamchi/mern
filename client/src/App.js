import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './container/Home';
import Registration from './container/Registration';
import Login from './container/Login';
import TopicsSport from './container/TopicsSport';
import TopicsNews from './container/TopicsNews';
import TopicsArt from './container/TopicsArt';
import TopicsDetails from './container/TopicsDetails';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/topics/Sport' element={<TopicsSport/>}></Route>
          <Route path='/topics/News' element={<TopicsNews/>}></Route>
          <Route path='/topics/Art' element={<TopicsArt/>}></Route>
          <Route path='/topics/Sport/TopicsDetails' element={<TopicsDetails/>}></Route>
          <Route path='/topics/News/TopicsDetails' element={<TopicsDetails/>}></Route>
          <Route path='/topics/Art/TopicsDetails' element={<TopicsDetails/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;