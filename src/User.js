import React from 'react';
import { Link, Route } from 'react-router-dom';
import Person from './Person';
import df from './datafacade';

const User = ({ match, persons }) => {

  console.log(persons);
  
  var linkList = persons.map( (person, i) => {
    return(
      <li key={i}>
        <Link to={`${match.url}/${i}`}>
          {person.name}
        </Link>
      </li>
      )
          
    })
 
  return(
    <div>
     <div style={{ display: 'block',  justifyContent: "space-between" }}>
      <div style={{
        float:'left',
        padding: '10px',
        width: '30%',
        background: '#f0f0f0',
        marginLeft:'auto' }}>

        <h3> Persons of intrest</h3>
        <ul  style={{ listStyleType: 'none', padding: 0, fontSize:'15px' }}> {linkList} </ul>
      </div>
    </div>
    
    <Route path={`${match.url}/:personIndex`} render={ (props) => <Person data= {persons} {...props} />}/>
    <Route exact path={match.url} 
      render={() => (
        <div style={{ textAlign:'center'}}>Please select a product.</div>
    )}/>

    </div>
  )
}
    
    export default User;