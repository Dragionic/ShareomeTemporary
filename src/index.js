import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Start from './StartPage/Start';
import SignUp from './SignUp/SignUp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Start/>, document.getElementById('root'));
registerServiceWorker();
