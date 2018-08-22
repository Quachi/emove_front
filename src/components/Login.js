import React, { Component } from "react";
import Request from 'superagent';
import _ from 'lodash';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
      event.preventDefault();
      let url      = "http://localhost:8080/api/auth-tokens";
      let login    = event.target.email.value;
      let password = event.target.password.value;


      Request
          .post(url)
          .auth('ipssi', 'ipssi')
          .send('login='+login)
          .send('password='+password)
          .then((response) => {
        console.log(response.body.value);
              this.setState({
              })
          })
          .catch((error) => {
              console.log(error);
              alert("username password do not match")
          });

  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="medium">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="medium">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
