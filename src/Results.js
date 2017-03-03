import React from 'react';
import { Link } from 'react-router';

export default class Results extends React.Component {
    render() {
        return (
            <div>
                <h1>Disability Calculator</h1>
                <p>Find out what amount of coverage is right for you.</p>
                <h2>Results</h2>
                <ul role="navigation">
                    <li><Link to="/expenses">Previous</Link></li>
                </ul>
            </div>
        );
    }
}