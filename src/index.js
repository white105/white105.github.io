import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './index.css';

import App from './App.js'

import Articles from './components/Articles/index.js'
import Projects from './components/Projects/index.js'
import Research from './components/Research/index.js'
import Resume from './components/Resume/index.js'

ReactDOM.render(<App></App>, document.getElementById('root'));

registerServiceWorker();
