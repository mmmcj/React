import React from 'react';


const Person = ({match,data}) => {
  var person = data[match.params.personIndex];
  var personData;

  if(person)
    personData = <div>
                  <h3> {person.name} </h3>
                  <p>{person.birth_year}</p>
                  <hr/>
                </div>;
  else
    personData = <h2> Sorry. Product doesnt exist </h2>;

  return (
    <div style={{ display: 'flex' }}>
      <div style={{
         padding: '0 10% 0 10%',
         width: '80%',
         margin: 'auto',
         background: '#ffffff' }}> 

         {personData} 
      </div>
    </div>
  )    
}
      
export default Person;