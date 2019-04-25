import React from 'react';
import { Link, Route } from 'react-router-dom';
import Person from './Person';
import df from './datafacade';
import { ReactComponent } from '*.svg';




  export default class User extends ReactComponent {
    state = { persons: [] }

    async componentDidMount() {
      try {
        const persons = await df.getApi();
        this.setState({ persons });
      } catch (err) {
        console.log(err)
      }
    }


    render() {
      const lis = this.state.persons.map((u,i) => <li key={i}>{u.name}</li>)
      return (
        <div>
          <div>
            <h4>Users</h4>
            <ul>
              {lis}
            </ul>
          </div>


          })
        <div style={{ display: 'block', justifyContent: "space-between" }}>
            <div style={{
              float: 'left',
              padding: '10px',
              width: '30%',
              background: '#f0f0f0',
              marginLeft: 'auto'
            }}>

              <h3> Persons of intrest</h3>
              <ul style={{ listStyleType: 'none', padding: 0, fontSize: '15px' }}> {lis} </ul>
            </div>
          </div>

          <Route path={`${match.url}/:personIndex`} render={(props) => <Person data={this.state.persons} {...props} />} />
          <Route exact path={match.url}
            render={() => (
              <div style={{ textAlign: 'center' }}>Choose a Character</div>
            )} />

        </div>
      )
    }
  }
