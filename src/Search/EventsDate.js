import React, { Component } from 'react';
import Facade from "../Datafacade/Datafacade"
import { FormControl } from "react-bootstrap";
class EventsDate extends Component {

    state = {
        events: []
    }
    render() {
        return (
            <React.Fragment>

                {this.state.events.map(e => (
                    <div className="item" key={e.id}>
                        <figure>
                            <h5>
                                {e.title};
                            </h5>
                        </figure>
                    </div>
                ))}
            </React.Fragment>

        );
    }

    componentDidMount = async () => {
        const today = this.props.date.toISOString();
        const events = await Facade.getEventsByDate(today);
        console.log(events);
        console.log(today);
        this.setState({ events });
    };

    componentDidUpdate = async (prevProps) => {
        if (this.props.date !== prevProps.prevProps) {
            const today = this.props.date.toISOString();
            const events = await Facade.getEventsByDate(today);
            console.log(events);
            console.log(today);
            this.setState({ events });
        }
    }

}




export default EventsDate;