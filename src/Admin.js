import React from 'react';
import { Link, Route } from 'react-router-dom';

const Admin = ({ match }) => {
    return( <div>   <ul>
            <li><Link to={`${match.url}/SWapi`}>SWapi</Link></li>
       
          </ul>
          <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> what </h3></div>)}/>
          </div>)
    }
    
    export default Admin;