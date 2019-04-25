import React from 'react';
import { Link, Route } from 'react-router-dom';
import SWapi from './CallSWapi';
const User = ({ match }) => {
    return( <div>   <ul>
            <li><Link to={`${match.url}/SWapi`}>SWapi</Link></li>
       
          </ul>
          <Route path={`${match.path}/:name`} render= {({match}) =>({SWapi})}/>
          </div>)
    }
    
    export default User;