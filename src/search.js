import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default class search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };
  }

  validateForm() {
    return this.state.searchText.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const getSearchText = this.state.searchText;
    try {
        console.log(getSearchText);
    } catch (e) {
        alert(e.message);
    }
  }

    render() {
      return (
        <React.Fragment>
        <div className="container">
          <div className="search">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="searchText">
              <Form.Control
                autoFocus
                type="text"
                value={this.state.searchText}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              block
              
              disabled={!this.validateForm()}
              type="submit"
            >
              search
            </Button>
          </Form>
        </div>
        </div>        
        </React.Fragment>
      );
  }
}