import React from 'react';
import { Link } from 'react-router';
import App from './App';

/*export default class Expenses extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <h1>Disability Calculator</h1>
                <p>Find out what amount of coverage is right for you.</p>
                <h2>What are your monthly expenses?</h2>
                <input className="input" name="value01"/>
                <input name="value02"/>
                <input name="value03"/>
                <button className="button">Clicky</button>
                <ul role="navigation">
                    <li><Link to="/">Previous</Link></li>
                    <li><Link to="/results">Next</Link></li>
                </ul>
            </div>
        );
    }
}*/

const Expenses = ({route}) => {
    // passing props through the router
    const {onBlur, data} = route;
    return (
        <div>
            <h1>Disability Calculator</h1>
            <p>Find out what amount of coverage is right for you.</p>
            <h2>What are your monthly expenses?</h2>
            <input type="text" name="value01" onBlur={onBlur}/>
            <div>Monthly income: ${data.value01}</div>
            <ul role="navigation">
                <li><Link to="/">Previous</Link></li>
                <li><Link to="/results">Next</Link></li>
            </ul>
        </div>
    )
}

export default Expenses;


/*export default class Expenses extends React.Component {
    constructor(props) {
        super(props);
    }

    doThing(e) {
        this.props.inputDisplay();
    }

    render() {
        return (
            <div>
                <h1>Disability Calculator</h1>
                <p>Find out what amount of coverage is right for you.</p>
                <h2>What are your monthly expenses?</h2>
                <input type="text" name="value01" onBlur={this.props.inputDisplay}/>
                <ul role="navigation">
                    <li><Link to="/">Previous</Link></li>
                    <li><Link to="/results">Next</Link></li>
                </ul>
            </div>
        )
    }
}*/