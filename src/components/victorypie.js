import React from 'react';
import {VictoryChart, VictoryTheme, VictoryPolarAxis,  VictoryBar, VictoryPie, VictoryLegend} from "victory";


const Victorypie = ({data}) =>{   
      return(
        <VictoryChart polar
                domain={{ x: [0, 360] }}
                height={250} width={250}
                padding={30}
                >
                <VictoryPolarAxis
                    tickValues={[0, 45, 90, 135, 180, 225, 270, 315]}
                />
                <VictoryBar
                    style={{ data: {  width: 50 }}}
                    colorScale={[ "navy", "blue", "white" ]}
                    data={[
                        { x: "maths", y:"50" }, { x: "english", y:"20" }, { x: "hindi", y:"30" }
                    ]}
                />
            </VictoryChart>
        
            )
        }


export default Victorypie;

