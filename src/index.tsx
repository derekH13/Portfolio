import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { App } from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

reportWebVitals();

