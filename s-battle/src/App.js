import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shot from './components/Shot';
import NewGame from './components/NewGame';
import ShotUpdate from './components/ShotUpdate';
import ShotHistory from './components/ShotHistory';

function App( props ) {
   return (
      <div className="App">


         <div className="container">

            <Shot />
            
            <ShotHistory />
            <br></br>
            <NewGame />
            <ShotUpdate />

         </div>
         <Router>
            <div className="container">
               <br/>
            </div>
         </Router>

      </div>
   );
}

export default App;
