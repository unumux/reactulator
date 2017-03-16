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
                annualSalary: 12000, // what is your annual salary
                monthlyIncome: 1000, // what is your monthly income after taxes
                additionalIncome: 100, // estimated monthly income if disabled
                currentCoveragePercent: 50, // current disability coverage percentage of annual salary
                // incomeWithDisability: 0, // current coverage plus additional income
                // currentCoverage: 0, // calculated from annual salary and current coverage percentage
                mortgage: 100,
                transportation: 100,
                food: 100,
                utilities: 100,
                creditCards: 100,
                childElderCare: 100,
                education: 100,
                otherExpenses: 100,
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
            monthlyIncome,
            currentCoveragePercent,
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

        let currentCoverage = (annualSalary * (currentCoveragePercent / 100)) / 12;

        let incomeWithDisability = currentCoverage + additionalIncome;

        let unumCoverage = 0;

        let unprotectedExpenses = Math.max(totalExpenses - incomeWithDisability, 0);

        // calculated variables go here
        return (
            <div>
                <Router history={ hashHistory }>
                <Route path="/" component={() => (
                    <Main onBlur={this.updateState} values={this.state.values}/>
                )}/>
                <Route path="/expenses" component={() => (
                    <Expenses onBlur={this.updateState} values={this.state.values}/>
                )}/>
                <Route path="/results" component={() => (
                    <Results unprotected={ 10 } additionalCoverage={ 20 } calculatedPremium={ 11 }/>
                )}/>
                </Router>
                <Graph monthlyIncome={ monthlyIncome } additionalIncome={ additionalIncome } currentCoverage={ currentCoverage } unumCoverage={ unumCoverage } totalExpenses={ totalExpenses } unprotectedExpenses={ unprotectedExpenses }/>
            </div>
        )
    }
}