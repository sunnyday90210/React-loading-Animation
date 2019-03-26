import React, { Component } from 'react';
import './App.css';
// import LoadingDots from './components/LoadingDots';

class App extends Component {
  state = {
    toggle: true
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button onClick={this.toggle}>Click Me</button>

            {!this.state.toggle && (
              <div className="dotwrapper">
                <p className="loading">Loading</p>
                <div className="dot0" />
                <div className="dot1" />
                <div className="dot2" />
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
