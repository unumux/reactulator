import React from 'react';
import { Bar } from 'react-chartjs-2';

const chartData = {
    labels: ["Monthly Income when healthy", "Monthly Income with disability", "Expenses"],
    datasets: [{
        backgroundColor: ["#2bb6d9", "#8dbf48", "#f2c849"]
    },
    {
        backgroundColor: ["#0b96b9", "#6d9f28", "#E48E43"]
    },
    {
        backgroundColor: ["transparent", "#4d7f08", "transparent"]
    }]
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

const Graph = ({monthlyIncome, additionalIncome, currentCoverage, unumCoverage, totalExpenses}) => {
    const layer1 = [];
    const layer2 = [];
    const layer3 = [];

    // PUT LOGIC HERE

    chartData.datasets[0].data = layer1;
    chartData.datasets[1].data = layer2;
    chartData.datasets[2].data = layer3;

    return (
        <Bar data={ chartData } options={ chartOptions } width={500} height={500}/>
    );
};

export default Graph;