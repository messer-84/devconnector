import React from 'react';
import spinner from './spinner.gif';

const styles = {
  width: '200px',
  margin: "auto",
  display: "block"
};

export default () => (
  <div>
    <img
      src={spinner}
      alt="Loading..."
      style={styles}
    />
  </div>
);

