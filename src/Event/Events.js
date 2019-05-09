import React from 'react';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Facade from '../Datafacade/Datafacade'
// function Events(props) {

//   var events = []

//   if(props.keyword === '') {
//     Facade.getEvents().then(data=>{});
//   } else {
//     Facade.getEventsBySearch(props.keyword).then(data=>{});
//   }

//   const lis = data.map(e => <li key={e.id}><Link to={`/evenSingle/${e.id}`}>{e.title}</Link></li>)

//   console.log(events)

//   return (
//     <React.Fragment>
//       <div classNameName="container">
//         <ul>
//           {lis}
//         </ul>
//       </div>
//     </React.Fragment>
//   );
// }

class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
    };
  }



  componentDidMount = async () => {
    const events = await Facade.getEvents();
    this.setState({ events })
    this.props.setEvents(events)
  }


  componentDidUpdate = async (prevProps) => {
    if (this.props.keyword !== prevProps.keyword) {
      var events = []
      if (this.props.keyword === '') {
        events = await Facade.getEvents();
        this.setState({ events })
        this.props.setEvents(events)
      } else {
        events = await Facade.getEventsBySearch(this.props.keyword);
        this.setState({ events })
        this.props.setEvents(events)
      }
    }
  }


  render() {
    return (
      <React.Fragment>
        <div className="container" style={{marginTop: '25px'}}>
            <div className="row">
              {this.state.events.map(e => (
                <div className="item" key={e.id}>
                  <div className="box_grid">
                    <figure>
                      <Link to={`/eventSingle/${e.id}`}>
                        <img src={e.defaultImg} className="img-fluid" alt={e.title} width="800" height="533" />
                        <div className="read_more">
                          <span>Read more</span>
                        </div>
                      </Link>
                      <small>{e.genre.genre}</small>
                    </figure>
                    <div className="wrapper">
                      <h3>
                        <Link to={`/eventSingle/${e.id}`}>{e.title}</Link>
                      </h3>
                      <p>{e.shortDesc}</p>
                      <span className="price">From <strong>{e.price}</strong> DKK,-</span>
                    </div>
                    <ul>
                      <li>{e.city.city}</li>
                      <li>
                        <div className="score">
                          <strong>{e.country.country}</strong>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Events;