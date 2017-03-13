import React from 'react';
import { Link } from 'react-router';
// import App from './App';

// first page of calculator

const Main = ({onBlur, values, onChange}) => {

    return (
        <div>
            <h1>Disability Calculator</h1>
            <p>Find out what amount of coverage is right for you</p>
            <h2>To start, we need some information from you</h2>
            <div>
                <label htmlFor="input01">How old are you?*</label>
                <input type="number" name="age" id="input01" onBlur={onBlur} onChange={onChange}/>
                <p>{values.age}</p>
            </div>
            <div>
                <label htmlFor="input02">What is your annual salary?*</label>
                <input type="number" name="annualSalary" id="input02" onBlur={onBlur} onChange={onChange}/>
                <p>{values.annualSalary}</p>
            </div>
            <div>
                <label htmlFor="input03">What is your montly income after taxes?*</label>
                <input type="number" name="monthlyIncome" id="input03" onBlur={onBlur}/>
                <p>{values.monthlyIncome}</p>
            </div>
            <div>
                <label htmlFor="input04">Estimated monthly income if disabled?*</label>
                <input type="number" name="additionalIncome" id="input04" onBlur={onBlur}/>
                <p>{values.additionalIncome}</p>
            </div>
            <div>
                <label htmlFor="input05">Current disability coverage?*</label>
                <input type="number" name="currentCoverage" id="input05" onBlur={onBlur}/>
                <p>{values.currentCoverage}</p>
            </div>
            <ul role="navigation">
                <p>Step 1 of 3</p> <li><Link to="/expenses">Next</Link></li>
            </ul>
            {/*<label htmlFor="input-01">Words: </label>*/}
            {/*<input onChange={this.changeState.bind(this)}id="input-01"/>*/}
            {/*<button>Update</button>*/}
            {/*<p>{this.state.words}</p>*/}
        </div>
    )
}

export default Main;