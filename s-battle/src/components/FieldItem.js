import React, { Component } from 'react'

class FieldItem extends Component {
    constructor() {
        super();
        this.state = {
            ship: true, 
            shot: false 
        }
    }
    render() {
        const { ship, shot } = this.state;
        return (
            <div>
                <h2>{ship}</h2>
            </div>
        )
    }
}

export default FieldItem
