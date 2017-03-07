import React from 'react';
// import ReactDOM from 'react-dom';
import { Bar } from 'react-chartjs';
// import './Expenses';

export default class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Monthly Income when healthy", "Monthly Income with disability", "Expenses"],
                datasets: [{
                    data: [100, 80, 20],
                    fillColor: ["#2bb6d9", "#8dbf48", "#f2c849"]
                }]
            },
            options: {
                scales: {
                    // yAxes: [{
                    //     stacked: true
                    // }],
                    // xAxes: [{
                    //     stacked: true
                    // }]
                }
            }
        };
    }

    render() {
        return (
            <Bar data={ this.state.chartData } options={ this.state.options } width="500" height="500"/>
        )
    }
};