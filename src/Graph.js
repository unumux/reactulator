import React from 'react';
import { Bar } from 'react-chartjs-2';

export default class Graph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const chartData = {
                labels: ["Monthly Income when healthy", "Monthly Income with disability", "Expenses"],
                datasets: [{
                    data: [40, 50, 60],
                    backgroundColor: ["#2bb6d9", "#8dbf48", "#f2c849"]
                },
                {
                    data: [
                        0, 10, 20
                    ],
                    backgroundColor: ["red", "blue", "green"]
                }],
            };

            const chartOptions = {
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            };


        return (
            <Bar data={ chartData } options={ chartOptions } width={500} height={500}/>
        )
    }
};