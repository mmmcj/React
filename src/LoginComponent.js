import React, {Component} from "react"

export default class AddEditPerson extends Component {
  state = {credentials: {...this.props.creden}}

  submit = (evt) => {
    evt.preventDefault();
    this.props.addEditPerson(this.state.person);
}

  handleInput = (evt) => {
    const prop = evt.target.id;
    var value = evt.target.value;
    var cred = this.state.credentials;
    this.setState({
        credentials: cred
    });
}
  
  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.submit}>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="username">Username:</label>
            <div className="col-sm-9">
              <input type="username" className="form-control" id="username" name="username" 
              placeholder="Enter username" value={this.state.username} onChange={this.handleInput}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="password">Password:</label>
            <div className="col-sm-9">
              <input className="form-control" id="password" name="password" placeholder="Enter password" 
              value={this.state.password} onChange={this.handleInput}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}