import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Excel from './Excel'

class App extends React.Component {

  render() {
    return (
      <div style={{
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0,
        bottom: 0
      }}>
        <Excel />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

