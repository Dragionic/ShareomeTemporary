import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Start from './StartPage/Start';
import SignUp from './SignUp/SignUp';
import Main from './Main/main';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Main/>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
