import Chart from "react-apexcharts";
import moment from "moment";
import { useState, useEffect } from 'react';

import axios from 'axios';

export default function ScheduleChart() {


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
        fetchData('scheduleChart')
            .then(data => {
                if (data) {
                    setChartData(data);
                }
                else {
                    setChartData([]);
                }
            });
    }, []);

    var options = {
        series: [
            {
                data: [
                    {
                        x: 'Analysis',
                        y: [
                            new Date('2019-02-27').getTime(),
                            new Date('2019-03-04').getTime()
                        ],
                        fillColor: '#008FFB'
                    },
                    {
                        x: 'Design',
                        y: [
                            new Date('2019-03-04').getTime(),
                            new Date('2019-03-08').getTime()
                        ],
                        fillColor: '#00E396'
                    },
                    {
                        x: 'Coding',
                        y: [
                            new Date('2019-03-07').getTime(),
                            new Date('2019-03-10').getTime()
                        ],
                        fillColor: '#775DD0'
                    },
                    {
                        x: 'Testing',
                        y: [
                            new Date('2019-03-08').getTime(),
                            new Date('2019-03-12').getTime()
                        ],
                        fillColor: '#FEB019'
                    },
                    {
                        x: 'Deployment',
                        y: [
                            new Date('2019-03-12').getTime(),
                            new Date('2019-03-17').getTime()
                        ],
                        fillColor: '#FF4560'
                    }
                ]
            }
        ],
        chart: {
            height: '100%',
            type: 'rangeBar',
            background: 'transparent',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            }
        },
        stroke: {
            show: false,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                distributed: true,
                dataLabels: {
                    hideOverflowingLabels: false
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                var label = opts.w.globals.labels[opts.dataPointIndex]
                var a = moment(val[0])
                var b = moment(val[1])
                var diff = b.diff(a, 'days')
                return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
            },
            style: {
                colors: ['#f3f4f5', '#fff']
            }
        },
        xaxis: {
            type: 'datetime',
            position: 'top',
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: true,
            },
            tickPlacement: 'between',
        },
        yaxis: {
            show: true
        },
        grid: {
            show: true,
            borderColor: '#2C2C2C',
            xaxis: {
                lines: {
                    show: true
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
        theme: {
            mode: 'dark',
        }
    };


    return (
        <Chart key={"schedule-chart"} id={"schedule-chart"} options={options} series={options.series} type="rangeBar" height={'100%'} />
    )
}
