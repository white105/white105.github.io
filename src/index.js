import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import App from './App.js'

ReactDOM.render(<App></App>, document.getElementById('root'));

registerServiceWorker();
