import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Excel from './Excel'

class App extends React.Component {

  render() {
    return (
      <Excel />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

