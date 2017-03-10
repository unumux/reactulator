import React from 'react';
import { Link } from 'react-router';
// import App from './App';

// first page of calculator

const Main = ({onBlur, values}) => {

    return (
        <div>
            <h1>Disability Calculator</h1>
            <p>Find out what amount of coverage is right for you</p>
            <h2>To start, we need some information from you</h2>
            <div>
                <label htmlFor="input01">How old are you?*</label>
                <input type="text" name="number01" id="input01" onBlur={onBlur}/>
                <p>{values.number01}</p>
            </div>
            <div>
                <label htmlFor="input02">What is your annual salary?*</label>
                <input type="text" name="number02" id="input02" onBlur={onBlur}/>
                <p>{values.number02}</p>
            </div>
            <div>
                <label htmlFor="input03">What is your montly income after taxes?*</label>
                <input type="text" name="number03" id="input03" onBlur={onBlur}/>
                <p>{values.number03}</p>
            </div>
            <div>
                <label htmlFor="input04">Estimated monthly income if disabled?*</label>
                <input type="text" name="number04" id="input04" onBlur={onBlur}/>
                <p>{values.number04}</p>
            </div>
            <div>
                <label htmlFor="input05">Current disability coverage?*</label>
                <input type="text" name="number05" id="input05" onBlur={onBlur}/>
                <p>{values.number05}</p>
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