import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./SignUp.css"

class SignUp extends Component{
    constructor(props){
        super(props);

        this.state = {
          email: undefined,
          name: undefined,
          institution: undefined,
          location: undefined,
          phone: undefined,
          password: undefined,
          confirm_password: undefined
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
        <div className="SignUp">
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="name" bsSize="large"  className="SignUpElement">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        autoFocus
                        type="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large" className="SignUpElement">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large" className="SignUpElement">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        autoFocus
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="Confirm password" bsSize="large" className="SignUpElement">
                    <ControlLabel>Confirm password</ControlLabel>
                    <FormControl
                        autoFocus
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="Institution" bsSize="large" className="SignUpElement">
                    <ControlLabel>Institution</ControlLabel>
                    <FormControl
                        autoFocus
                        type="institution"
                        value={this.state.institution}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="Phone" bsSize="large" className="SignUpElement">
                    <ControlLabel>Phone</ControlLabel>
                    <FormControl
                        value={this.state.phone}
                        onChange={this.handleChange}
                        type="phone"
                    />
                </FormGroup>
                <Button>Sign Up</Button>
            </form>
        </div>)
    }
}

export default SignUp;