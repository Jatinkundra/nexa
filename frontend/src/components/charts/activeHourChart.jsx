
import Chart from "react-apexcharts";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ActiveHourChart() {

    const fetchData = async (title) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/chartdata/${title}`);
            console.log(response)

            if (response)
                return response.data.chart.series;
            else
                return []
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetchData('activeHourChart')
            .then(data => {
                if (data) {
                    console.log(data)
                    setChartData(data);
                }
                else {
                    setChartData([
                        {
                            name: 'High Retention',
                            data: [
                            ]
                        },
                        {
                            name: 'Average Retention',
                            data: [

                            ]
                        },
                        {
                            name: 'Low Retention',
                            data: [

                            ]
                        }
                    ]);
                }
            });
    }, []);

    var options = {
        series: chartData,
        chart: {
            height: '100%',
            type: 'scatter',
            background: 'transparent',
            offsetX: -6,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false,
        },
        grid: {
            show: true,
            borderColor: '#2C2C2C',
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            padding: {
                left: 22,
            },
            row: {
                colors: undefined,
            },
            column: {
                colors: undefined,
            },
        },
        colors: ['#FF3A29', '#FFCF4E', '#25FC02'],
        legend: {
            show: false,
        },
        xaxis: {
            tickAmount: 6,
            max: 24,
            min: 0,
            labels: {
                style: {
                    colors: '#77838F',
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },
        yaxis: {
            tickAmount: 4,
            min: 0,
            max: 24,
            labels: {
                show: true,
                style: {
                    colors: '#77838F',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                },
                formatter: function (val) {
                    return val + " hrs";
                },
            },
        },
        fill: {
            type: 'solid',
            opacity: 1,
        },
        theme: {
            mode: 'dark',
        },
    };

    return (
        <Chart options={options} series={options?.series} type="scatter" />
    )
}