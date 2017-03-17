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
                mortgage: 100,
                transportation: 100,
                food: 100,
                utilities: 100,
                creditCards: 100,
                childElderCare: 100,
                education: 100,
                otherExpenses: 100,
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
            age,
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

        let ltdRate = 0;
        if(age < 25) {
            ltdRate = 0.8;
        }
        if(age >= 25 && age <= 29) {
            ltdRate = 0.10;
        }
        if(age >= 30 && age <= 34) {
            ltdRate = 0.14;
        }
        if(age >=35 && age <= 39) {
            ltdRate = 0.17;
        }
        if(age >= 40 && age <= 44) {
            ltdRate = 0.35;
        }
        if(age >= 45 && age <= 49) {
            ltdRate = 0.47;
        }
        if(age >= 50 && age <= 54) {
            ltdRate=0.57;
        }
        if(age >= 55 && age <= 59) {
            ltdRate = 0.70;
        }
        if(age >= 60 && age <= 64) {
            ltdRate = 0.67;
        }
        if(age >= 65 && age <= 69) {
            ltdRate = 0.38;
        }
        if(age >= 70) {
            ltdRate = 0.22;
        }


        let totalExpenses = mortgage + transportation + food + utilities + creditCards + childElderCare + education + otherExpenses;

        let currentCoverage = (annualSalary * (currentCoveragePercent / 100)) / 12;

        let incomeWithDisability = currentCoverage + additionalIncome;

        let annualPremium = (annualSalary / 100) * ltdRate;

        let monthlyRate = annualPremium / 12;

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
                <Graph monthlyIncome={ monthlyIncome } additionalIncome={ additionalIncome } currentCoverage={ currentCoverage } unumCoverage={ 10 } totalExpenses={ totalExpenses } unprotectedExpenses={ unprotectedExpenses }/>
            </div>
        )
    }
}