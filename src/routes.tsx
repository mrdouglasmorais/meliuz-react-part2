import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RickAndMorty from './view/RickAndMorty';
import Form from './view/Form';
import Home from './view/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/rm" component={RickAndMorty} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;