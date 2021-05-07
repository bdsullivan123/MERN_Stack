import React, { Component } from 'react'


class PersonCard extends Component {
    constructor(props){
        super(props);
        const { firstName, lastName, age, hairColor } = this.props;
        this.state = {
            age: age
        };
    }

    handleClick = () => {
        let newAge = this.state.age;
        newAge += 1;
        this.setState({ age: newAge });
        console.log("Does it work?");
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        const { age: stateAge } = this.state;
        return (
            <div>
                <h1>{ lastName }, { firstName }</h1>
                <p>Age: { stateAge }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={ this.handleClick }> Birthday Button for { firstName } { lastName }</button>
            </div>
        )
    }
}

export default PersonCard;