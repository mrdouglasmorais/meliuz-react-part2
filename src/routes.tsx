import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './private.route'

import Nav from './components/Nav';
import Footer from './components/Footer';
import RickAndMorty from './view/RickAndMorty';
import Todo from './view/Todo';
import Form from './view/Form';
import Home from './view/Home';
import SignUp from './view/SignUp';
import SignIn from './view/SignIn';
import Dash from './view/Dash';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/rm" component={RickAndMorty} />
          <Route path="/todo" component={Todo} />
          <Route path="/cadastrar" component={SignUp} />
          <Route path="/logar" component={SignIn} />
          <PrivateRoute exact path="/dash" component={Dash} />
        </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;