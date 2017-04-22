import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Team from './components/Team';

// TODO: deliniate sections
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Landing />
        <Projects />
        <Team />
      </div>
    );
  }
}

export default App;
