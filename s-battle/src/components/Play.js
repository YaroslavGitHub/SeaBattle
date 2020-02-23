import React, { Component } from 'react';
import axios from 'axios';

export default class Player extends Component {
  constructor(props) {
    super(props);

    this.onChangeGamer = this.onChangeGamer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      gamer: ''
    }
  }

  onChangeGamer(e) {
    this.setState({
      gamer: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const game = {
      gamer: this.state.gamer
    }

    console.log(game);

    axios.post('http://localhost:5000/gamers/add', game)
      .then(res => console.log(res.data));

    this.setState({
      gamer: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Game</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Gamer: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.gamer}
                onChange={this.onChangeGamer}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Game" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}