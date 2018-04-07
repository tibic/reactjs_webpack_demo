import React from 'react';
import Routes from '../config/router'

export default class App extends React.component {
  componentDidMount() {
    // do
  }
  render() {
    return [
      <div>this is app </div>,
      <Routes />,
    ]
  }
}
