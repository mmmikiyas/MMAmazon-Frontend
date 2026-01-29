import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataProvider from './Components/DataProvider/DataProvider';
import { initialState, reducer } from './Utility/reducer';
import { BrowserRouter } from 'react-router-dom'; // <-- import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <BrowserRouter basename="/MMAmazon-Frontend"> {/* <-- set basename */}
        <App />
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);
