import React, {useState} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router,Switch, Link, Route } from 'react-router-dom';
import { propTypes } from 'prop-types';

import { fetchAdmin } from '../actions/admin';
import { Login,ProtectedRoutes } from './';
import AdminDashboard from './AdminDashboard';

const App = ()=> {
 
  const [isAuth, setIsAuth] = useState(false);
   
  //  console.log('Prop', this.props);
  
    return (
      <Router>
        <Switch>
          <Route path='/' exact  component={Login} />
          <ProtectedRoutes path='/admindashbord' component={AdminDashboard} isAuth={isAuth }/>
        </Switch>
      </Router>
       
    
    );
  }



// function mapStateToProps(state) {
//   return {
//     admin:state.admin    
//   }
// }


// App.propTypes = {
//   admin: propTypes.object.isRequired, 
// }

// export default connect(mapStateToProps)(App);



export default App;