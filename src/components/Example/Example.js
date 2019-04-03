import React from 'react';

import { withRouter } from 'react-router-dom';

function Example(props) {
  console.log(props);

  return (
    <div>
      Example
    </div>
  );
}

export default withRouter(Example);