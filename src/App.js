import React from "react";
import { Router, Route, hashHistory } from 'react-router';

import Main from './Main';
import Results from './Results';
import Expenses from './Expenses';
import Graph from './Graph';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                value01: 100,
                value02: 20,
                value03: 50
            }
            // variableData:80,
            // chartData: {
            //     labels: ["Monthly Income when healthy", "Monthly Income with disability", "Expenses"],
            //     datasets: [{
            //         data: [100, 80, 20],
            //         fillColor: ["#2bb6d9", "#8dbf48", "#f2c849"]
            //     }]
            // },
            // options: {
            //     scales: {
            //         // yAxes: [{
            //         //     stacked: true
            //         // }],
            //         // xAxes: [{
            //         //     stacked: true
            //         // }]
            //     }
        };
        // binding here improves performance by binding only once, as opposed to every time the function called
        this.inputUpdate = this.inputUpdate.bind(this);
        this.inputDisplay = this.inputDisplay.bind(this);
    }

    inputUpdate(e) {
        const {name, value} = e.target;
        // creating a new object with the input data 
        const newData = Object.assign({}, this.state.data, { [name]: value});
        // assigning that new object to the state
        this.setState({ data: newData });


        // this.setState({ chartData: {
        //         labels: ["Monthly Income when healthy", "Monthly Income with disability", "Expenses"],
        //         datasets: [{
        //             data: [100, value, 20],
        //             fillColor: ["#2bb6d9", "#8dbf48", "#f2c849"]
        //         }]
        //     }})
    }

    inputDisplay(e) {
        console.log("it works!");
    }

    render() {
        return (
            <div>
                <Router history={ hashHistory }>
                <Route path="/" component={ Main }/>
                <Route path="/expenses" component={ Expenses } data={this.state.data} onBlur={this.inputDisplay}/>
                <Route path="/results" component={ Results }/>
                </Router>
                <Graph data={ this.state.data }/>
            </div>
        )
    }
}