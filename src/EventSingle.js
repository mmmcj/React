import React from 'react';

function EventSingle({match, events}){
    const id = match.params.id;
  
    const single_event = events.filter(e=>e.id == id)[0];
    console.table(single_event);
    
    return (
      <React.Fragment>
        <div className="container">
          <h2>{single_event.title}</h2>
          <p>{single_event.price}Kr,-</p>
          <p>{single_event.long_desc}</p>
          <p>TILFØJ dvs ting her under.</p>
        </div>
      </React.Fragment>
    );
  }

  export default EventSingle;