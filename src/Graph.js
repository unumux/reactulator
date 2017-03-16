import React from 'react';
import { Bar } from 'react-chartjs-2';

const chartData = {
    labels: ["Monthly Income when healthy", "Monthly Income with disability", "Expenses"],
    datasets: [{
        backgroundColor: ["#2bb6d9", "#8dbf48", "#f2c849"],
    },
    {
        backgroundColor: ["#0b96b9", "#6d9f28", "#E48E43"],
    },
    {
        backgroundColor: ["transparent", "#004276", "#f8a346"]
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

const Graph = ({monthlyIncome, additionalIncome, currentCoveragePercent, currentCoverage, unumCoverage, totalExpenses, unprotectedExpenses}) => {
    const layer1 = [];
    const layer2 = [];
    const layer3 = [];

    // PUT LOGIC HERE

    chartData.datasets[0].data = layer1;
    chartData.datasets[1].data = layer2;
    chartData.datasets[2].data = layer3;

    chartData.datasets[0].data[0] = monthlyIncome;
    chartData.datasets[0].data[1] = additionalIncome; 
    chartData.datasets[1].data[1] = currentCoverage;
    chartData.datasets[2].data[1] = unumCoverage;
    chartData.datasets[0].data[2] = totalExpenses - unprotectedExpenses; // graph needs tooltips to reflect correct labels!!!!
    chartData.datasets[1].data[2] = unprotectedExpenses;

    // chartData.datasets[0].label = "Hello";

    return (
        <Bar data={ chartData } options={ chartOptions } width={500} height={500}/>
    );
};

export default Graph;