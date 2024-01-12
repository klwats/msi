
import { useState } from 'react'
import Home from './Components/Home/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {




  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>

    </Router>


  )
}

export default App;
