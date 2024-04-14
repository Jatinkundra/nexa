import Chart from "react-apexcharts";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DailyAttendenceChart() {


    const fetchData = async (title) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/chart/getChart/${title}`);
            console.log(response);
            if (response.status != 200) {
               throw new Error(`HTTP error! status: ${response.status}`);
            }
            // const data = await response.json();
            // if (data.length > 0)
                return response;
            // else
            //     return []
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetchData('dailyAttendanceChart')
            .then(data => {
                // console.log(data);
                if (data) {
                    setChartData(data.data.chart.series);
                }
                else {
                    setChartData([]);
                }
            });
    }, []);

    var options = {
        series: [{
            name: 'Departments',
            data: [40, 60, 86, 60, 40]
        }],
        chart: {
            id: 'DailyAttenChart',
            height: '100%',
            type: 'bar',
            background: 'transparent',
            foreColor: '#2664EB',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 25,
                columnWidth: '50%',
            }
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
            row: {
                colors: undefined,
            },
            column: {
                colors: undefined,
            },
        },
        xaxis: {
            tickPlacement: 'on',
            labels: {
                show: true,
                rotate: -45,
                rotateAlways: true,
                style: {
                    colors: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
            categories: ["Sales", "IT", "Marketing", "Legal", "API"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: ['#77838F'],
                    fontSize: '10px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                },
                formatter: function (val) {
                    return val + " %";
                },
            },
        },
        fill: {
            type: 'solid',
            colors: '#2664EB',
            opacity: 1,
        },
        theme: {
            mode: 'dark',
        },
    };

    return (
        <Chart options={options} series={chartData?.length > 0 ? chartData : []} type="bar" height={'100%'} />
    )
}
