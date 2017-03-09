import React from 'react';
import { Link } from 'react-router';
import App from './App';

const Expenses = ({route}) => {
    // passing props through the router
    const {onBlur, data} = route;
    return (
        <div>
            <h1>Disability Calculator</h1>
            <p>Find out what amount of coverage is right for you.</p>
            <h2>What are your monthly expenses?</h2>
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