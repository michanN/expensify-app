// Higher order component ===
// - comp that renders another component
// - reuse code
// - render hijacking
// - props manipulation
// - abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>InfoComp</h1>
    <p>Para: {props.info}</p>
  </div>
);

// NOT the HOS just a function that returns the HOS
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share.</p> }
      <WrappedComponent {...props} />
    </div>
  );
};
// Spreading the props inside the HOS is a very useful and often used technique

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ?
        <WrappedComponent {...props}/> :
        <p>Please login</p>}
    </div>
  );
};

// This is the HOS
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info='This is the details for the page' />, document.getElementById('app'));
