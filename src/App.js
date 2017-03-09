import React from "react";
import { Router, Route, hashHistory } from 'react-router';
// import Perf from 'react-addons-perf';

import Main from './Main';
import Results from './Results';
import Expenses from './Expenses';
import Graph from './Graph';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                value01: 0,
                value02: 0,
                value03: 0
            }
        };
        // binding here improves performance by binding only once, as opposed to every time the function called
        this.inputUpdate = this.inputUpdate.bind(this);
        this.inputDisplay = this.inputDisplay.bind(this);
    }

    inputUpdate(e) {
        // need to reset the input somehow so values dont add up
        this.setState({ name: 0 });
        const {name, value} = e.target;
        console.log(e.target, name, value);

        // creating a new object with the input data, and updates all three bars
        // const newData = Object.assign({}, this.state.data, { [name]: value});

        // updates one key/value pair
        // input02 needs to be the sum of multiple inputs, how do I do that?? 
        const newData = Object.assign({}, this.state.data, {value02: value});

        // assigning that new object to the state
        this.setState({ data: newData });
    }

    inputDisplay(e) {
        console.log("it works!");
    }

    render() {
        return (
            <div>
                <Router history={ hashHistory }>
                <Route path="/" component={ Main }/>
                <Route path="/expenses" component={ Expenses } data={this.state.data} onBlur={this.inputUpdate}/>
                <Route path="/results" component={ Results }/>
                </Router>
                <Graph data={ this.state.data }/>
            </div>
        )
    }
}