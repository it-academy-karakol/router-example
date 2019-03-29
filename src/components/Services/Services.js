import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

function Services(props) {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView();
    }
  }, []);

  return (
    <section>
      <h1>Services</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p id="another-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      <p id="bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus deserunt obcaecati vero earum commodi, delectus dolore qui eius recusandae aliquam laboriosam quas quod nihil magnam porro asperiores quis incidunt.</p>
      
      <Route path="/services/sayhello" render={() => (
        <strong>Hello!</strong>
      )} />
    </section>
  );
}

export default Services;