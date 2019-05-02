import React from 'react';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";

function Events({events}) {

    const lis = events.map(e => <li key={e.id}><Link to={`/evenSingle/${e.id}`}>{e.title}</Link></li>)
    return(
      <React.Fragment>
        <div className="container">
          <ul>
            {lis}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  export default Events;