import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import WelcomePage from '../pages/welcomePage/WelcomePage'
import Home from '../pages/home/Home'


function WebRoutes() {
  return (
    <Router>
          <Routes>
            <Route path='/' element={<WelcomePage/>}/>
            <Route path='/calculator' element={<Home/>}/>
            {/* <Route path='*' element={<NotFound/>}/> */}
          </Routes>
    </Router>
  )
}

export default WebRoutes