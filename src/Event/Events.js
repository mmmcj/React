import React from 'react';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Facade from '../Datafacade/Datafacade'


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
        <div className="container mm">
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
                        <Link to={`/eventSingle/${e.id}`}>{e.title.substring(0, 12)}</Link>
                      </h3>
                      <p>{e.shortDesc.substring(0, 120)}</p>
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