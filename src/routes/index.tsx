import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import MovieInfo from '../pages/MovieInfo';
import Watched from '../pages/WatchedList';
import PlanToWatch from '../pages/PlanToWatchList';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Route from './Route';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" isPrivate exact Component={Home} />
        <Route path="/movie/:id" isPrivate Component={MovieInfo} />
        <Route path="/watched-list" isPrivate Component={Watched} />
        <Route path="/plan-to-watch-list" isPrivate Component={PlanToWatch} />
        <Route path="/sign-up" Component={SignUp} />
        <Route path="/sign-in" Component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
