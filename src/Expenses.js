import React from 'react';
import { Link } from 'react-router';
import Graph from './Graph';

// let data = {
//         labels: ["Monthly Income when healthy", "Monthly Income with disability", "Expenses"],
//         datasets: [{
//             label: 'LTD Calculator',
//             data: [100, 30, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//             ],
//             borderWidth: 1
//         }]
//     }

export default class Expenses extends React.Component {
    render() {
        return (
            <div>
                <h1>Disability Calculator</h1>
                <p>Find out what amount of coverage is right for you.</p>
                <h2>What are your monthly expenses?</h2>
                <input className="input"/><button className="button">Clicky</button>
                <Graph chartData={this.props.chartData}/>
                <ul role="navigation">
                    <li><Link to="/">Previous</Link></li>
                    <li><Link to="/results">Next</Link></li>
                </ul>
            </div>
        );
    }
}