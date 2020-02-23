import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Field from './components/FieldItem';
import Shot from './components/Shot';
import ShotUpdate from './components/ShotUpdate'
import Play from './components/Play'
function App(props) {

   const [fieldA, setA] = useState("");
   const [fieldB, setB] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      
      let a = `${fieldA}`;
      let b = `${fieldB}`;
      const c = +(a.toString() + b.toString());
      console.log(c);
          seaMap[c].shot = true;
          shipCount = seaMap.filter(item => item.shot && item.ship);
          console.log(shipCount);
          alert(shipCount.length);
  }
   
  
    let seaMap = (Array(100).fill(
       {ship: false, shot: false}))
   ;
    seaMap.splice(22, 1, { ship: true, shot: false });
    seaMap.splice(50, 1, { ship: true, shot: false });
    seaMap.splice(51, 1, { ship: true, shot: false });
    console.log(seaMap);

          let shipCount = [];
    
  return (
    <div className="App">
    
    
          <h1 className="font-weight-bold">SEA BATTLE</h1>
          <h1>X={fieldA} Y={fieldB}</h1>

          <h1>{shipCount.length}</h1>
          

          <form onSubmit={handleSubmit}>
      <label>
        Input X :
        <input
          type="number"
          value={fieldA}
          onChange={e => setA(e.target.value)}
          min="0" max="9"
          className="form-group"
        />
      </label>
      <label>
        Input Y :
        <input
          type="number"
          value={fieldB}
          onChange={e => setB(e.target.value)}
          min="0" max="9"
        />
      </label>
      <input type="submit" value="Submit"  className="btn btn-light"/>
    </form>
    
  
          <div className="container">
          <Field />
          <Shot />
 
          <ShotUpdate />

        </div> 
        <Router>
        <div className="container">
        <br/>
        <Route path="/" exact component={Field} />
        <Route path="/play" exact component={Play} />
        </div>
        </Router>
  
    </div>
  );
}

export default App;
