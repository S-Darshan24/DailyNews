import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = (props) => {
  const pageSize = 15;
  const [progress, setprogress] = useState(0)
 
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/technology" element={<News setprogress={setprogress} key="technology" pageSize={pageSize} country="us" category="technology" />} />
          <Route exact path="/business" element={<News setprogress={setprogress} key="business" pageSize={pageSize} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News setprogress={setprogress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
          <Route exact path="/general" element={<News setprogress={setprogress} key="general" pageSize={pageSize} country="us" category="general" />} />
          <Route exact path="/health" element={<News setprogress={setprogress} key="health" pageSize={pageSize} country="us" category="health" />} />
          <Route exact path="/science" element={<News setprogress={setprogress} key="science" pageSize={pageSize} country="us" category="science" />} />
          <Route exact path="/sports" element={<News setprogress={setprogress} key="sports" pageSize={pageSize} country="us" category="sports" />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;