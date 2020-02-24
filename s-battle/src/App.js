import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Shot from './components/Shot';
import ShotUpdate from './components/ShotUpdate'
function App(props) {

   
  return (
    <div className="App">
    
  
          <div className="container">

          <Shot />
          <ShotUpdate />

        </div> 
        <Router>
        <div  className="container">
        <br/>
        </div>
        </Router>
  
    </div>
  );
}

export default App;
