import AppContainer from './app.js';
import React from 'react';
import ReactDom from 'react-dom';

const appDomElem = document.getElementById('app');

ReactDom.render(<AppContainer />, appDomElem);
