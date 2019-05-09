import React from 'react';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Facade from '../Datafacade/Datafacade'
import { Card, Button } from 'react-bootstrap'

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
                          <a href="tour-detail.html">
                            <img src={e.defaultImg} className="img-fluid" alt="" width="800" height="533" />
                            <div className="read_more">
                              <span>Read more</span>
                            </div>
                          </a>
                          <small>Historic - AA</small>
                        </figure>
                        <div className="wrapper">
                          <h3>
                            <a href="tour-detail.html">{e.title}</a>
                          </h3>
                          <p>{e.shortDesc}</p>
                          <span className="price">From
                                        <strong>$25</strong> /per person</span>
                        </div>
                        <ul>
                          <li>1h 30min</li>
                          <li>
                            <div className="score">
                              <span>Good
                                                <em>350 Reviews</em>
                              </span>
                              <strong>7.0</strong>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          {/* 
          <div classNameName="row">
            {this.state.events.map(e => (
              <div classNameName="col-md-4">
                <div key={e.id}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={e.defaultImg} />
                    <Card.Body>
                      <Card.Title>{e.title} - {e.price} DKK</Card.Title>
                      <Card.Text>
                        <p>{e.shortDesc}</p>
                        <p>{e.city.city} - {e.country.country}</p>
                      </Card.Text>
                      <Link to={`/eventSingle/${e.id}`}><Button>Go to event</Button></Link>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}


          </div> */}

      </React.Fragment>
    )
  }
}

export default Events;