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
//       <div className="container">
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
        <div className="container">
          <div className="row">
            {this.state.events.map(e => (
              <div className="col-md-4">
                <div key={e.id}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://s1.ticketm.net/img/tat/dam/a/7de/3dc54130-12c4-49f4-812b-beaffa86b7de_990021_CUSTOM.jpg" />
                    <Card.Body>
                      <Card.Title>{e.title} - {e.price} DKK</Card.Title>
                      <Card.Text>
                        {e.city.city} - {e.country.country}
                      </Card.Text>
                      <Link to={`/eventSingle/${e.id}`}><Button>Go to event</Button></Link>
                    </Card.Body>
                  </Card>
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