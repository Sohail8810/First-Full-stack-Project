import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './Pages/createpost.jsx'
import Feed from './Pages/feed.jsx'
// import { Navigate } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/createpost'element={<CreatePost/>}/> */}
        <Route path='/'element={<CreatePost/>}/>
        <Route path="/feed" element={<Feed/>}/>
        </Routes>
    </Router>
  )
}

export default App
