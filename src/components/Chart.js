import React, { Component } from 'react';
import {Polar} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props)
         this.state={
            chartData:{
                labels: ['liearalgebra', 'differentialequation','differentialcalculus'],
                datasets:[
                    {
                        labels:'Progress',
                        data:[
                            25, 45,50
                        ],
                        backgroundColor:[
                            'white', 'black',
                            'red',
                        ]
                    }
                ]
            }
        }
    }

    render(){
        return(
            <div className="chart">
                <Polar
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false
                    }}

                />
            </div>
        )
    }
};

export default Chart;
