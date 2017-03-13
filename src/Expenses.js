import React from 'react';
import { Link } from 'react-router';

const Expenses = ({onBlur, values}) => {
    // passing props through the router
    return (
        <div>
            <h1>Disability Calculator</h1>
            <p>Find out what amount of coverage is right for you.</p>
            <h2>What are your monthly expenses?</h2>
            <div>
                <label htmlFor="input06">Rent / Mortgage*</label>
                <input type="number" name="mortgage" id="input06" onBlur={onBlur}/>
                <div>{values.mortgage}</div>
            </div>
            <div>
                <label htmlFor="input07">Transportation</label>
                <input type="number" name="transportation" id="input07" onBlur={onBlur}/>
                <div>{values.transportation}</div>
            </div>
            <div>
                <label htmlFor="input08">Food*</label>
                <input type="number" name="food" id="input08" onBlur={onBlur}/>
                <div>{values.food}</div>
            </div>
            <div>
                <label htmlFor="input09">Utilities</label>
                <input type="number" name="utilities" id="input09" onBlur={onBlur}/>
                <div>{values.utilities}</div>
            </div>
            <div>
                <label htmlFor="input10">Credit Cards</label>
                <input type="number" name="creditCards" id="input10" onBlur={onBlur}/>
                <div>{values.creditCards}</div>
            </div>
            <div>
                <label htmlFor="input11">Child / Elder Care*</label>
                <input type="number" name="childElderCare" id="input11" onBlur={onBlur}/>
                <div>{values.childElderCare}</div>
            </div>
            <div>
                <label htmlFor="input12">Education*</label>
                <input type="number" name="education" id="input12" onBlur={onBlur}/>
                <div>{values.education}</div>
            </div>
            <div>
                <label htmlFor="input13">Other Major Expenses*</label>
                <input type="number" name="otherExpenses" id="input13" onBlur={onBlur}/>
                <div>{values.otherExpenses}</div>
            </div>
            <div>Total Monthly Expenses:</div>
            <input type="text" name="value01" onBlur={onBlur}/>
            <input type="text" name="value02" onBlur={onBlur}/>   
            <input type="text" name="value03" onBlur={onBlur}/>
            <ul role="navigation">
                <li><Link to="/">Previous</Link></li>
                <li><Link to="/results">Next</Link></li>
            </ul>
        </div>
    )
}

export default Expenses;