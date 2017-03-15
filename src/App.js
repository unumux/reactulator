import React from "react";
import { Router, Route, hashHistory } from 'react-router';
// import Perf from 'react-addons-perf';

// functions that get used in graph and expenses can live here

import Main from './Main';
import Results from './Results';
import Expenses from './Expenses';
import Graph from './Graph';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                age: 0, // how old are you
                annualSalary: 0, // what is your annual salary
                monthlyIncome: 0, // what is your monthly income after taxes
                additionalIncome: 0, // estimated monthly income if disabled
                currentCoveragePercent: 0, // current disability coverage percentage of annual salary
                // incomeWithDisability: 0, // current coverage plus additional income
                // currentCoverage: 0, // calculated from annual salary and current coverage percentage
                mortgage: 0,
                transportation: 0,
                food: 0,
                utilities: 0,
                creditCards: 0,
                childElderCare: 0,
                education: 0,
                otherExpenses: 0,
                // totalExpenses: 0, // total monthly expenses
                // unprotectedExpenses: 0, // totalexpenses minus incomeWithDisability
                // protectedExpenses: 0, // expenses minus incomeWithDisability
                // withUnumCoverage: 0, // with unum coverage, you get an additional..
                // calculatedPremium: 0 // this coverage should cost you around...
            }
        };
        // binding here improves performance by binding only once, as opposed to every time the function called
        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        const {name, value} = e.target;
        const newNumbers = Object.assign({}, this.state.values, {[name]: parseInt(value)});
        this.setState({ values: newNumbers });
    }

    render() {
        let {
            annualSalary,
            additionalIncome,
            currentCoveragePercent,
            unprotectedExpenses,
            mortgage,
            transportation,
            food,
            utilities,
            creditCards,
            childElderCare,
            education,
            otherExpenses
        } = this.state.values;

        let totalExpenses = mortgage + transportation + food + utilities + creditCards + childElderCare + education + otherExpenses;

        // let currentCoverage = (annualSalary * currentCoveragePercent.toFixed(2)) / 12;
        let currentCoverage = (annualSalary * currentCoveragePercent.toFixed(2)) / 12;

        let incomeWithDisability = currentCoverage + additionalIncome;

        // calculated variables go here
        return (
            <div>
                <Router history={ hashHistory }>
                <Route path="/" component={() => (
                    <Main onBlur={this.updateState}/>
                )}/>
                <Route path="/expenses" component={() => (
                    <Expenses onBlur={this.updateState}/>
                )}/>
                <Route path="/results" component={() => (
                    <Results unprotected={ 10 } additionalCoverage={ 20 } calculatedPremium={ 11 }/>
                )}/>
                </Router>
                <Graph monthlyIncome={ this.state.values.monthlyIncome } additionalIncome={ additionalIncome } currentCoverage={ currentCoverage } unumCoverage={ 0 } totalExpenses={ totalExpenses }/>
            </div>
        )
    }
}