import React from 'react';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Facade from '../Datafacade/Datafacade'

function Events(props) {

  var events = []

  if(props.keyword === '') {
    Facade.getEvents().then(data=>{});
  } else {
    Facade.getEventsBySearch(props.keyword).then(data=>{});
  }

  const lis = data.map(e => <li key={e.id}><Link to={`/evenSingle/${e.id}`}>{e.title}</Link></li>)

  console.log(events)

  return (
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