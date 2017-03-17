import React from 'react';
import { Link } from 'react-router';

// first page of calculator

const Main = ({onBlur, values, onChange}) => {

    return (
        <div>
            <h1>Disability Calculator</h1>
            <p>Find out what amount of coverage is right for you</p>
            <h2>To start, we need some information from you</h2>
            <div>
                <label htmlFor="input01">How old are you?*</label>
                <input type="number" name="age" id="input01" onBlur={onBlur} defaultValue={values.age}/>
            </div>
            <div>
                <label htmlFor="input02">What is your annual salary?*</label>
                <input type="number" name="annualSalary" id="input02" onBlur={onBlur} defaultValue={values.annualSalary} max="218181.82" onChange={onChange}/>
                <section className="alert" role="alert" data-visible="false">
                    <h1 className="alert__heading">Validation Message</h1>
                    <div className="alert__content">
                        <p className="annual-salary-validate">Your annual salary cannot be more than $218,181.82.</p>
                    </div>
                    <button class="alert__close">Close</button>
                </section>
            </div>
            <div>
                <label htmlFor="input03">What is your montly income after taxes?*</label>
                <input type="number" name="monthlyIncome" id="input03" onBlur={onBlur} defaultValue={values.monthlyIncome} max="18181.82"/>
                <section className="alert--monthly" role="alert" data-visible="false">
                    <h1 className="alert__heading">Validation Message</h1>
                    <div className="alert__content">
                        <p className="annual-salary-validate">Your monthly income cannot be more than $18,181.82.</p>
                    </div>
                    <button class="alert__close">Close</button>
                </section>
            </div>
            <div>
                <label htmlFor="input04">Estimated monthly income if disabled?*</label>
                <input type="number" name="additionalIncome" id="input04" onBlur={onBlur} defaultValue={values.additionalIncome}/>
            </div>
            <div>
                <label htmlFor="input05">Current disability coverage?*</label>
                <input type="number" name="currentCoveragePercent" id="input05" onBlur={onBlur} defaultValue={values.currentCoveragePercent}/>
            </div>
            <ul role="navigation">
                <p>Step 1 of 3</p> <li><Link to="/expenses">Next</Link></li>
            </ul>
        </div>
    )
}

export default Main;