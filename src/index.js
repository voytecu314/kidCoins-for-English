import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ObjectsContext from './contexts/ObjectsContext'

ReactDOM.render(
  <ObjectsContext>
    <App />
  </ObjectsContext>
    ,document.getElementById('root')
);