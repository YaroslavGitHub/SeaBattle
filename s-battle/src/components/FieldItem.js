import React, { Component } from 'react';
import axios from 'axios';

export default class FieldItem extends Component {
    constructor(props) {
      super(props);
        this.state = {
            seaMap: []
            
        } 
    }
    
    
    componentDidMount() {

    
        axios.get('http://localhost:5000/shots/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                seaMap: response.data
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
          console.log(this.seaMap)
      }
      
      render() {
        return (
            <div className="grid-container">
            <>
            {this.state.seaMap.map(shot => (
                <div style={{ color: (shot.shot)? 'red' 
                : (!shot.shot)? 'green'
                : 'blue'}}>X {shot._id}</div>
            ))}
                
            </>
            </div>
        )
    }
}
