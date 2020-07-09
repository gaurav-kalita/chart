import React, {Component} from 'react';
import Chart from './Chart';
import './app.css';


class App extends React.Component {
    state ={ data:[], data2: [] }
   

    render(){
        return (
            <div className="container">
            <div className="heading"><h3>Nice job..! here is the result</h3></div>
                <div className="polarchart">
                     < Chart  />
                </div>
            </div>
        )
    }
}

export default App;