import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
var $ = require('jquery');

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 100,
      name: "Addie",
      age: 20,
      bio: "I like puppies"
    };
  }

  render() {


    var { name, age, bio, pic } = this.props;
    var { height } = this.state;

    return (
      <div className="profile-box">
        <h1>{name}</h1>
        <h2>Age: {age}</h2>
        <p>Bio: {bio}</p>
        <button onClick={this.zoomPicOut.bind(this)}>-</button>
        <img src={pic} height={height} alt=""/>
        <button onClick={this.zoomPicIn.bind(this)}>+</button>
      </div>
    );
  }

  zoomPicIn() {
    this.setState({height: this.state.height + 50});
  }

  zoomPicOut() {
    this.setState({height: this.state.height - 50});
  }
}

// ReactDOM.render(<Profile name="Addie Padula" age={20} bio="I like puppies" pic="http://fillmurray.com/100/100"/>, document.querySelector('#app'));



class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <section className="calc">
        <h1 className="calc__heading--sr">Long Term Disability Calculator</h1>
        <div className="calc__body">
          <div className="calc__panel-container">

            <div className="calc__panel--1">
              <div className="calc__panel-content">
                <h2 className="calc__heading">To start, we need some information from you</h2>
                <div className="calc__questions">
                  <label className="calc__label" htmlFor="input-01">How old are you?*</label>
                  <input className="calc__input" id="input-01"/>
                  <label className="calc__label" htmlFor="input-02">What is your annual salary?*</label>
                  <small>This would be your primary source of income.</small>
                  <input className="calc__input" id="input-02"/>
                  <label className="calc__label" htmlFor="input-03">What is your monthly income after taxes?*</label>
                  <small>Monthly income when healthy each month after taxes.</small>
                  <input className="calc__input" id="input-03"/>
                  <label className="calc__label" htmlFor="input-04">Estimated monthly income if disabled?*</label>
                  <small>Monthly income if disabled after taxes.</small>
                  <input className="calc__input" id="input-04"/>
                  <label className="calc__label" htmlFor="input-05">Current disablity coverage?*</label>
                  <small>Total amount from any policies you may have.</small>
                  <input className="calc__input" id="input-05"/>
                </div>
                <div className="calc__pagination"> 
                  <p>Step 1 of 3</p>
                </div>
              </div>
            </div>

            <div className="calc__panel--2">
              <div className="calc__panel-content">
                <h2 className="calc__heading">What are your monthly expenses?</h2>
                <div className="calc__questions">
                  <label className="calc__label" htmlFor="input-06">Rent / Mortgage</label>
                  <input className="calc__input" id="input-06"/>
                  <label className="calc__label" htmlFor="input-07">Transportation</label>
                  <input className="calc__input" id="input-07"/>
                  <label className="calc__label" htmlFor="input-08">Food</label>
                  <input className="calc__input" id="input-08"/>
                  <label className="calc__label" htmlFor="input-09">Utilities</label>
                  <inupt className="calc__input" id="input-09"/>
                  <label className="calc__label" htmlFor="input-10">Credit Cards</label>
                  <input className="calc__input" id="input-10"/>
                  <label className="calc__label" htmlFor="input-11">Child / Elder Care</label>
                  <input className="calc__input" id="input-11"/>
                  <label className="calc__label" htmlFor="input-12">Education</label>
                  <input className="calc__input" id="input-12"/>
                  <label className="calc__label" htmlFor="input-13">Other Major Expenses</label>
                  <input className="calc__input" id="input-14"/>
                </div>
                <div className="calc__stuff">
                  <p><b><span>Total Monthly Expenses:</span> <span>Some React stuff here</span></b></p>
                </div>
                <div className="calc__pagination">
                  <p>Step 2 of 3</p>
                </div>
              </div>
            </div>

            <div className="calc__panel--3">
              <div className="calc__panel-content">
                <h2 className="calc__heading">Results</h2>
                <div className="calc__results">
                  <div className="calc__result">
                    <p>Currently without Unum coverage</p>
                    <p>React number</p>
                    <p>of your monthly expenses are left unprotected.</p>
                  </div>
                  <div className="calc__result">
                    <p>With Unum coverage you get an additional</p>
                    <p>+ React number</p>
                    <p>This coverage should cost you around:</p>
                    <p>React number*</p>
                  </div>
                  <button className="calc__button--signup">SIGN UP</button>
                  <button className="calc__button--pdf">DOWNLOAD PDF</button>
                  <small>*Calculated premium is for illustration purposes only and is based on the age and choices selected. Your actual cost will be based on your salary as reported by your employer. Eligibility for, entitlement to, and amount of actual benefits will be determined according to the terms of the policy.</small>
                </div>
                <div className="calc__pagination">
                  <p>Step 3 of 3</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="calc__footer">
          <div className="calc__actions">
            <button className="calc__action" id="back" onClick={this.nextPrevious.bind(this)}>Previous</button>
            <button className="calc__action" id="next" onClick={this.nextPrevious.bind(this)}>Next</button>
          </div>
        </div>
      </section>

                



    );
  }

  hide() {
    // hides extra content when you select "no"
  }

  show() {
    // shows extra content when you select "yes"
  }

  updateGraph() {
    // updates graph with values from calculator
  }

  setPanel() {
    $(this).val();
  }

  nextPrevious(x) {
    let current = 1;
    let previous = 2;
    // goes to next or previous "page" of calculator
    previous = current;

    if(x === "next"){ current = previous + 1; }
    if(x === "back"){ current = previous - 1; }

    if(current === 1) {
      $('#back', '#next').hide();
      $('#next').fadeTo(700, 1);
      $('.calc__panel--1').fadeTo(700, 1);
      $('.calc__panel--2').hide();
      // reset function here
    }

    if(current === 2) {
      $('#back', '#next').hide();
      $('#back', '#next').fadeTo(700, 1);
      $('.calc__panel--2').fadeTo(700, 1);
      $('.calc__panel--1, .calc__panel--3').hide();
      // reset function here
    }

    if(current === 3) {
      $('#back', '#next').hide();
      $('#back', '#next').fadeTo(700, 1);
      $('.calc__panel--3').fadeTo(700, 1);
      $('.calc__panel--1, .calc__panel--2').hide();
      // reset function here
    }

    // setPanel();

  }

  addExpenses() {
    // adds together your monthly expenses
  }

  calcUnprotectedExpenses() {
    // calculates how much of your monthly expenses is currently unprotected
  }

  calcUnumCoverage() {
    // calculates amount of coverage you are eligible for from Unum
  }
  
  calcRate() {
    // calculates montly rate of that coverage
  }

  reset() {
    // resets tabindex and focus on each new page of calculator
  }

}

ReactDOM.render(<Calculator/>, document.querySelector('#app'));


export default Calculator;