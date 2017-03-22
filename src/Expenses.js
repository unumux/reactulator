import React from 'react';
import { Link } from 'react-router';

const Expenses = ({onBlur, values}) => {
    // passing props through the router
    return (
        <div className="expenses">
            <h2>What are your monthly expenses?</h2>
            <form className="form">
                <div className="form__section">
                    <label className="form__label" htmlFor="input06">Rent / Mortgage*</label>
                    <input className="form__input" type="number" name="mortgage" id="input06" onBlur={onBlur} defaultValue={values.mortgage}/>
                </div>
                <div className="form__section">
                    <label className="form__label" htmlFor="input07">Transportation</label>
                    <input className="form__input" type="number" name="transportation" id="input07" onBlur={onBlur} defaultValue={values.transportation}/>
                </div>
                <div className="form__section">
                    <label className="form__label" htmlFor="input08">Food*</label>
                    <input className="form__input" type="number" name="food" id="input08" onBlur={onBlur} defaultValue={values.food}/>
                </div>
                <div className="form__section">
                    <label className="form__label" htmlFor="input09">Utilities</label>
                    <input className="form__input" type="number" name="utilities" id="input09" onBlur={onBlur} defaultValue={values.utilities}/>
                </div>
                <div className="form__section">
                    <label className="form__label" htmlFor="input10">Credit Cards</label>
                    <input className="form__input" type="number" name="creditCards" id="input10" onBlur={onBlur} defaultValue={values.creditCards}/>
                </div>
                <div className="form__section">
                    <label className="form__label" htmlFor="input11">Child / Elder Care*</label>
                    <input className="form__input" type="number" name="childElderCare" id="input11" onBlur={onBlur} defaultValue={values.childElderCare}/>
                </div>
                <div className="form__section">
                    <label className="form__label" htmlFor="input12">Education*</label>
                    <input className="form__input" type="number" name="education" id="input12" onBlur={onBlur} defaultValue={values.education}/>
                </div>
                <div className="form__section">
                    <label className="form__label" htmlFor="input13">Other Major Expenses*</label>
                    <input className="form__input" type="number" name="otherExpenses" id="input13" onBlur={onBlur} defaultValues={values.otherExpenses}/>
                </div>
            </form>
            <div>Total Monthly Expenses:</div>
            <ul role="navigation">
                <li><Link to="/">Previous</Link></li>
                <li><Link to="/results">Next</Link></li>
            </ul>
        </div>
    )
}

export default Expenses;