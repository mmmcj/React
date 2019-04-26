import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import facade from "./datafacade";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const credentials = [this.state.username, this.state.password];
    try {
        const token = await facade.getToken(JSON.stringify(credentials));
        const msg = await facade.login(token)
        return msg;
    } catch (e) {
        alert(e.message);
    }
  }

    render() {
      return (
        <div className="Login">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="username" bsSize="large">
              <Form.Control
                autoFocus
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password" bsSize="large">
              <Form.Control
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </Form.Group>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
          </Form>
        </div>
      );
  }
}
