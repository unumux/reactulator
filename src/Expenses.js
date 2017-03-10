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
                <input type="text" name="number06" id="input06" onBlur={onBlur}/>
                <div>{values.number06}</div>
            </div>
            <div>
                <label htmlFor="input07">Transportation</label>
                <input type="text" name="number07" id="input07" onBlur={onBlur}/>
                <div>{values.number07}</div>
            </div>
            <div>
                <label htmlFor="input08">Food*</label>
                <input type="text" name="number08" id="input08" onBlur={onBlur}/>
                <div>{values.number08}</div>
            </div>
            <div>
                <label htmlFor="input09">Utilities</label>
                <input type="text" name="number09" id="input09" onBlur={onBlur}/>
                <div>{values.number09}</div>
            </div>
            <div>
                <label htmlFor="input10">Credit Cards</label>
                <input type="text" name="number10" id="input10" onBlur={onBlur}/>
                <div>{values.number10}</div>
            </div>
            <div>
                <label htmlFor="input11">Child / Elder Care*</label>
                <input type="text" name="number11" id="input11" onBlur={onBlur}/>
                <div>{values.number11}</div>
            </div>
            <div>
                <label htmlFor="input12">Education*</label>
                <input type="text" name="number12" id="input12" onBlur={onBlur}/>
                <div>{values.number12}</div>
            </div>
            <div>
                <label htmlFor="input13">Other Major Expenses*</label>
                <input type="text" name="number13" id="input13" onBlur={onBlur}/>
                <div>{values.number13}</div>
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