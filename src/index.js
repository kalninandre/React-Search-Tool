import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ResultContextProvider } from './Contexts/ResultContextProvider';

import App from './App';
import './index.css';

ReactDOM.render(
    <ResultContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ResultContextProvider>,
    document.getElementById('root')
);
