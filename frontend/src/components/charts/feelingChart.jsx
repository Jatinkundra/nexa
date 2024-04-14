import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

function YourChartComponent() {
    const [series] = useState([{
        name: 'cat1',
        data: [4, 6, 2, 1, 5, 8, 3]
    }, {
        name: 'cat2',
        data: [8, 5, 9, 10, 6, 4, 7]
    }]);


    const fetchData = async (title) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/chartdata/${title}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.length > 0)
                return data;
            else
                return []
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetchData('activeHourChart')
            .then(data => {
                if (data) {
                    setChartData(data);
                }
                else {
                    setChartData([]);
                }
            });
    }, []);

    const [options] = useState({
        chart: {
            type: 'area',
            background: 'transparent',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        grid: {
            padding: {
                left: 24,
            }
        },
        yaxis: {
            min: 0,
            max: 10,
            tickAmount: 5,
        },
        stroke: {
            curve: 'smooth'
        },
        dataLabels: {
            enabled: true,
            textAnchor: 'middle',
            formatter: function (val) {
                if (val < 3) return '😔';
                else if (val >= 3 && val < 5) return '😐';
                else if (val >= 5 && val < 7) return '😪';
                else if (val >= 7 && val < 9) return '😊';
                else return '😁';
            },
            style: {
                fontSize: '24px',
                fontWeight: 'bold',
                colors: ["#0000ff"]
            },
            background: {
                enabled: false,
            }
        },
        theme: {
            mode: 'dark',
        },
    });

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={400}
            className="w-full"
        />
    );
}

export default YourChartComponent;
