import React from 'react';
import ReactDOM from 'react-dom';
import { Bar } from 'react-chartjs';
// var Bar = require('react-chartjs');
// var Bar = require('react-chartjs').Bar;

export default class Graph extends React.Component {
    constructor(props) {
        super(props);
        // this.data = this.props.data;
    }

    render() {
        return (
            <Bar data={ this.props.chartData } width="500" height="500"/>
        )
    }
};