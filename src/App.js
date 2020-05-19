import React, {Component} from 'react';
import './App.css';
import PortfolioBuilder from '../src/container/PortfolioBuilder'



class App extends Component{
    render() {
        return (
            <div className="App">
                <PortfolioBuilder/>
            </div>
        );
    }
}

export default App;
