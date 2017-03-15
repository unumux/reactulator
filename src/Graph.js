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
                    backgroundColor: ["#2bb6d9", "#81b245", "#f2c849"]
                },
                {
                    label: ["Current Coverage"],
                    data: [
                        0, 10, 0
                    ],
                    backgroundColor: ["transparent", "#9cca62", "transparent"]
                },
                {
                    label: ["Unprotected Expenses"],
                    data: [
                        0, 0, 30
                    ],
                    backgroundColor: ["transparent", "transparent", "#f8a346"]
                },
                {
                    label: ["Unum Coverage"],
                    data: [
                        0, 30, 0
                    ],
                    backgroundColor: ["transparent", "#004276", "transparent"]
                }]
            };

            const chartOptions = {
                scales: {
                    yAxes: [{
                        stacked: true,
                    }]
                }
            };


        return (
            <Bar data={ chartData } options={ chartOptions } width={500} height={500}/>
        )
    }
};