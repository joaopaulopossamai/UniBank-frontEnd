import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

//Import pages
import LandingPage from './pages/LandingPage';
import Home from './pages/home';
import Saque from './pages/saque';
import Deposito from './pages/deposito';

import './App.css';
import { withTranslation } from 'react-i18next';

export const APP_SETTINGS = JSON.parse(localStorage.getItem('APP_SETTINGS')) !== null ? JSON.parse(localStorage.getItem('APP_SETTINGS')) : [{}];

class App extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      ready: false,
    };
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/Saque' component={Saque} />
            <Route exact path='/deposito' component={Deposito} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default withTranslation()(withCookies(App));
