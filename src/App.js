import HomePage from './components/HomePage.jsx'
import LoginPage from './components/LoginPage.jsx'
import ImageDetails from './components/ImageDetails.jsx'

import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const useStyles = makeStyles((theme) => ({}) );

function App() {
  const classes = useStyles();

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        // TODO: pass URL param here -->  /image/:name
        <Route path="/image/:name" element={<ImageDetails/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
