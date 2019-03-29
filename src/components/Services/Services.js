import React from 'react';
import { Route } from 'react-router-dom';

function Services(props) {
  return (
    <section>
      <h1>Services</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      
      <Route path="/services/sayhello" render={() => (
        <strong>Hello!</strong>
      )} />
    </section>
  );
}

export default Services;