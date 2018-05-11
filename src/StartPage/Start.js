import React, {Component} from 'react';
import logo from '../resources/logo.png'
import "./Start.css"
import Login from './Login/Login.js'
import {Button} from "react-bootstrap"
import SignUp from '../SignUp/SignUp'
import ReactDOM from 'react-dom';

class Start extends Component{
    constructor(props){
        super(props);
    }

    jump_to_sign_up = () =>{
        ReactDOM.render(<SignUp/>, document.getElementById('root'));
    }

    render(){
        return (
            <div className = "Start">
                <header className = "Start-header">
                    <img src = {logo} className = "App-logo"/>
                </header>
                <div>
                    <Login/>
                </div>
                <div>
                    Don't have an account? <Button onClick = {this.jump_to_sign_up}> Sign up</Button>
                </div>
            </div>
        )
    }
}

export default Start;