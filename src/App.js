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
            },

            values: {
                age: 0, // how old are you
                annualSalary: 0, // what is your annual salary
                monthlyIncome: 0, // what is your monthly income after taxes
                additionalIncome: 0, // estimated monthly income if disabled
                currentCoveragePercent: 0, // current disability coverage percentage of annual salary
                incomeWithDisability: 0, // current coverage plus additional income
                currentCoverage: 0, // calculated from annual salary and current coverage percentage
                mortgage: 0,
                transportation: 0,
                food: 0,
                utilities: 0,
                creditCards: 0,
                childElderCare: 0,
                education: 0,
                otherExpenses: 0,
                totalExpenses: 0, // total monthly expenses
                unprotectedExpenses: 0, // totalexpenses minus incomeWithDisability
                protectedExpenses: 0, // expenses minus incomeWithDisability
                withUnumCoverage: 0, // with unum coverage, you get an additional..
                calculatedPremium: 0 // this coverage should cost you around...
            }
        };
        // binding here improves performance by binding only once, as opposed to every time the function called
        this.inputUpdate = this.inputUpdate.bind(this);
        this.inputDisplay = this.inputDisplay.bind(this);
        this.displayNumber = this.displayNumber.bind(this);
        this.updateValues = this.updateValues.bind(this);
    }

    updateValues(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
        console.log(value);
        console.log(this.state);
    }

    inputUpdate(e) {
        this.setState({ name: 0 });
        const {name, value} = e.target;
        console.log(e.target, name, value);

        // creating a new object with the input data, and updates all three bars
        const newData = Object.assign({}, this.state.data, {[name]: value});

        // updates one key/value pair
        // input02 needs to be the sum of multiple inputs, how do I do that?? 
        // const newData = Object.assign({}, this.state.data, {value02: value});

        // assigning that new object to the state
        this.setState({ data: newData });
    }

    inputDisplay(e) {
        console.log("it works!");
    }

    displayNumber(e) {
        const {name, value} = e.target;
        const newNumbers = Object.assign({}, this.state.values, {[name]: value});
        this.setState({ values: newNumbers });
    }

    render() {
        return (
            <div>
                <Router history={ hashHistory }>
                <Route path="/" component={() => (
                    <Main values={this.state.values} onBlur={this.displayNumber} onChange={this.updateValues}/>
                )}/>
                <Route path="/expenses" component={() => (
                    <Expenses values={this.state.values} onBlur={this.displayNumber}/>
                )}/>
                <Route path="/results" component={ Results }/>
                </Router>
                <Graph data={ this.state.data }/>
            </div>
        )
    }
}