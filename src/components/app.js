import React from 'react';
import Victorypie from './victorypie';
import './app.css'


class App extends React.Component {
    state ={ data:[], data2: [] }
   

    render(){
        return (
            <div className="container">
            <div className="heading"><h3>Nice job..! here is the result</h3></div>
                <div className="piechart">
                     < Victorypie className="victorypie" data={this.state.data}  />
                </div>
            </div>
        )
    }
}

export default App;