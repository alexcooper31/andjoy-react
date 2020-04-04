import * as React from 'react';

const Icon: React.FunctionComponent = (props) => (
  <i className='material-icons' style={{userSelect: 'none'}}>
    {props.children}
  </i>
);

export default Icon;
