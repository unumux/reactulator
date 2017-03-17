import React from 'react';
import { Link } from 'react-router';

// results calc functions go here 

const Results = ({unprotectedExpenses, additionalCoverage, monthlyRate}) => {
    return (
        <div>
            <h1>Disability Calculator</h1>
            <p>Find out what amount of coverage is right for you.</p>
            <h2>Results</h2>
            <p>Currently without Unum coverage</p>
            <p>{unprotectedExpenses}</p>
            <p>of your monthly expenses are left unprotected.</p>
            <p>With Unum coverage you get an additional</p>
            <p>{additionalCoverage}</p>
            <p>This coverage should cost you around:</p>
            <p>{monthlyRate} Per Month*</p>
            <p>Calculated premium is for illustration purposes only and is based on the age and choices selected. Your actual cost will be based on your salary as reported by your employer. Eligibility for, entitlement to, and amount of actual benefits will be determined according to the terms of the policy.</p>
            <p>If interested in enrolling, please contact your Agency Coordinator
for an enrollment form.</p>
            <ul role="navigation">
                <li><Link to="/expenses">Previous</Link></li>
            </ul>
        </div>
    );
}

export default Results;