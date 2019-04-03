import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
