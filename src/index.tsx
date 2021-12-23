import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Excel from './Excel'

class App extends React.Component {

  render() {
    return (
      <div style={{
        width: "100%",
        height: 500
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

