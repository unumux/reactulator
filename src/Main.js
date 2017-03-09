import React from 'react';
import { Link } from 'react-router';

// first page of calculator

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            words: "some words"
        }
    }

    changeState() {
        this.setState({words: document.querySelector('input').value});
    }

    render() {
        return (
            <div>
                <h1>Disability Calculator</h1>
                <p>Find out what amount of coverage is right for you</p>
                <h2>To start, we need some information from you</h2>
                <ul role="navigation">
                    <li><Link to="/expenses">Next</Link></li>
                </ul>
                <label htmlFor="input-01">Words: </label>
                <input onChange={this.changeState.bind(this)}id="input-01"/>
                <button>Update</button>
                <p>{this.state.words}</p>
            </div>
        );
    }
}