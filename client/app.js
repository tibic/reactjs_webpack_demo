import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './App.jsx';

ReactDom.hydrate(<App/>,document.getElementById('root'))

const root = document.getElementById('root');
const render = Component=>{
  ReactDom.hydrate(
    <AppContainer>
      <Component/>
    </AppContainer>,
    root
  )
}
render(App)
if(module.hot){
  module.hot.accept('./App.jsx',()=>{
    const NextApp = require('./App.jsx').default
    // ReactDom.hydrate(<App/>,document.getElementById('root'))
    render(NextApp)
  })
}
