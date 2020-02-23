import React, { Component } from 'react';
import axios from 'axios';

export default class ShotUpdate extends Component {
  constructor(props) {
    super(props);

    
    this.onChangefieldA = this.onChangefieldA.bind(this);
    this.onChangefieldB = this.onChangefieldB.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        gamer: 'first',
        fieldA: 0,
        fieldB: 0,
        shot: true
      }
  }

  onChangefieldA(e) {
    this.setState({
      fieldA: e.target.value
    })
  }
  onChangefieldB(e) {
    this.setState({
      fieldB: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const shot = {
      gamer: this.state.gamer,
      fieldA: this.state.fieldA,
      fieldB: this.state.fieldB,
      shot: this.state.shot
    }

    console.log(shot);

    axios.post('http://localhost:5000/shots/update/' + this.state.fieldA + this.state.fieldB, shot)
      .then(res => console.log(res.data));

  }

  render() {
    return (

    
        
      <div>
      <form onSubmit={this.onSubmit}>
      <label>
        Input X :
        <input
          type="number"
          value={this.state.fieldA}
          onChange={this.onChangefieldA}
          min="0" max="9"
          className="form-group"
        />
      </label>
      <label>
        Input Y :
        <input
        type="number"
        value={this.state.fieldB}
        onChange={this.onChangefieldB}
        min="0" max="9"
        className="form-group"
        />
      </label>
      <input type="submit" value="Update"  className="btn btn-light"/>
    </form>
    </div>
    )
  }
}