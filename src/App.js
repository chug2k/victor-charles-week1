import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstaList from './InstaList';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    let toggleTitle = () => {
      console.log("toggleFunction", this);
      let newState;
      if (this.state.title == null){
        newState = 'statesTitle'
      } else {
        newState = null
      }
      // let newState = this.state.title ? null : 'statesTitle';
      this.setState = (
        {
        title : newState
        }
      );
    }
    console.log("App Render")
    return (
      <div className="App">
        <header className="App-header">
          <a href="#" onClick={toggleTitle}>
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <h1 className="App-title">{this.state.title || this.props.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
