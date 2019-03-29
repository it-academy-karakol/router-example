import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
          </ul>

          <Route path="/" exact render={() => (
            <section>
              <h1>Home</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
            </section>
          )} />
          <Route path="/about" render={() => (
            <section>
              <h1>About</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
            </section>
          )} />
          <Route path="/services" render={() => (
            <section>
              <h1>Services</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
            </section>
          )} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
