import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function TaskSparklineChart() {
    const [series2] = useState([{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }]);

    const [options2] = useState({
        chart: {
            type: 'line',
            background: 'transparent',
            height: 30,
            sparkline: {
                enabled: true
            }
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            }
        },
        theme: {
            mode: 'dark',
        },
    });

    return (
        <ReactApexChart options={options2} series={series2} type="line" height={45} />
    );
}

export default TaskSparklineChart;
