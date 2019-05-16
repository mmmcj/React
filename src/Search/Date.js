import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Example extends React.Component {
  render() {
    return (
      <DatePicker
        selected={this.props.startDate}
        onChange={this.props.onChange}
        className="form-control"
        placeholder="date"
        dateFormat="dd/MM/yyyy"
      />
    );
  }
}

export default Example;
