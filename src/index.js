import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-aleo';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'))

const content = document.getElementById('root');
const root = createRoot(content);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>);