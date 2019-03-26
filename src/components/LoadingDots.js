import React from 'react';

const LoadingDots = ({ toggle }) => {
  return (
    <React.Fragment>
      <button onClick={toggle}>Click Me</button>

      {toggle && (
        <div className="dotwrapper">
          <p className="loading">Loading</p>
          <div className="dot0" />
          <div className="dot1" />
          <div className="dot2" />
        </div>
      )}
    </React.Fragment>
  );
};

export default LoadingDots;
