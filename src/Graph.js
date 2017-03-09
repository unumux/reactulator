import React from 'react';
import { Bar } from 'react-chartjs';
import App from './App';

export default class Graph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const chartData = {
                labels: ["Monthly Income when healthy", "Monthly Income with disability", "Expenses"],
                datasets: [{
                    data: [this.props.data.value01, this.props.data.value02, this.props.data.value03],
                    fillColor: ["#2bb6d9", "#8dbf48", "#f2c849"]
                }]
            };
        return (
            <Bar data={ chartData } width="500" height="500"/>
        )
    }
};