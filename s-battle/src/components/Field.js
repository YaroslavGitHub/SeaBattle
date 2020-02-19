import React, { Component } from 'react'

class Field extends Component {
    state = {
        seaMap: [
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: false, shot: false},
            {ship: true, shot: false},
            {ship: false, shot: true},
            {ship: true, shot: false},
            {ship: true, shot: true}
        ]

    };

    render() {
        return (
            <>
            {this.state.seaMap.map(field => (
                <div style={{ color: (field.shot && field.ship)? 'tomato' 
                : (!field.shot && !field.ship)? 'black'
                : (!field.shot && field.ship)? 'black'
                : (field.shot && !field.ship)? 'yellow'
                : 'blue'}}>X {field.ship}</div>
            ))}
                
            </>
        )
    }
}

export default Field
