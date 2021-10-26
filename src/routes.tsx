import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RickAndMorty from './view/RickAndMorty';
import Form from './view/Form';
import Home from './view/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/rm" component={RickAndMorty} />
        </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;