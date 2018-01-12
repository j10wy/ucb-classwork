import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
      </div>
    );
  }
}

export default App;
