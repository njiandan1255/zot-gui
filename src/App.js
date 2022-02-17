import { useState, useEffect } from 'react'
import HomePage from './components/HomePage.jsx'
import LoginPage from './components/LoginPage.jsx'
import ImageDetails from './components/ImageDetails.jsx'

import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

import './App.css';

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({

}));

function App() {
  const [host, setHost] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [hostFromStorage, setHostFromStorage] = useState(null);
  const [searchKeywords, setSearchKeywords] = useState(null);
  const [data, setData] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const localStorageHost = localStorage.getItem('host');
    if (localStorageHost) {
      setHost(localStorageHost);
      setHostFromStorage(localStorageHost)
    } else {
      setHostFromStorage("")
    }
  }, [])

  return (
    <div className="App">
    <Router>
      { hostFromStorage !== null && (
          (hostFromStorage) ? (
              <Routes>
                <Route path="*" element={<Navigate to="/home"/>} />
                <Route path="/home" element={<HomePage data={data} host={host} keywords={searchKeywords} updateData={setData} updateKeywords={setSearchKeywords}/>} />
                <Route path="/image/:name*" element={<ImageDetails host={host}/>} />
              </Routes>
          ) : (
              <Routes>
                <Route path="*" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage host={host} username={username} password={password} updateUsername={setUsername} updatePassword={setPassword} updateHost={setHost} updateData={setData}/>} />
              </Routes>
          )
      )}
    </Router>
    </div>
  );
}

export default App;
