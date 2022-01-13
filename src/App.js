import HomePage from './components/HomePage.jsx'
import LoginPage from './components/LoginPage.jsx'
import ImageDetailsPage from './components/ImageDetailsPage.jsx'

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
        // TODO: pass param here?
        <Route path="/imageDetails" element={<ImageDetailsPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
