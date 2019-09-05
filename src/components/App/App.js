import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import About from '../About/About'
import Login from '../Login/Login'
import Employees from '../Employee'
import {Routes} from '../../constants/routes'
import Details from '../Employee/Details'
const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path={Routes.Home} component={Home} />
          <Route path={Routes.About} component={About} />
          <Route path={Routes.Login} component={Login} />
          <Route path= {Routes.Employees} component={Employees} />
          <Route path= {Routes.EmployeeDetail} component={Details} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
