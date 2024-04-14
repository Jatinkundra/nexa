import React from "react";
import ReactApexChart from 'react-apexcharts';

class SwotRadarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }],
            options: {
                chart: {
                    height: 400,
                    type: 'radar',
                    background: 'transparent',
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                xaxis: {
                    tickAmount: 4,
                    categories: ['January', 'April', 'May', 'June']
                },
                yaxis: {
                    tickAmount: 7
                }
            },


        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={400} />
            </div>
        );
    }
}

export default SwotRadarChart;