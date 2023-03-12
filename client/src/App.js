import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './container/Home';
import Registration from './container/Registration';
import Login from './container/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;