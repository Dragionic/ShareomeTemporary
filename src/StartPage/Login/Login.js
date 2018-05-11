import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css"

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
          email: undefined,
          password: undefined
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
          });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        return ( 
        <div className="Login">
            <form onSubmit={this.handleSubmit} className="LoginElement">
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large" className="LoginElement">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <Button>Log in</Button>
            </form>
        </div>)
    }
}

export default Login;