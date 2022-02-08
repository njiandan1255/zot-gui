import { useState, useEffect } from 'react'
import HomePage from './components/HomePage.jsx'
import LoginPage from './components/LoginPage.jsx'
import ImageDetails from './components/ImageDetails.jsx'

import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const useStyles = makeStyles((theme) => ({}) );

function App() {
  const [host, setHost] = useState(null);
  const [searchKeywords, setSearchKeywords] = useState(null);
  const [data, setData] = useState(null);

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage data={data} host={host} keywords={searchKeywords} updateData={setData} updateKeywords={setSearchKeywords}/>} />
        <Route path="/home" element={<HomePage data={data} host={host} keywords={searchKeywords} updateData={setData} updateKeywords={setSearchKeywords}/>} />
        <Route path="/login" element={<LoginPage host={host} updateHost={setHost} updateData={setData}/>} />
        <Route path="/image/:name*" element={<ImageDetails host={host}/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
