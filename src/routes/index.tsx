import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MovieInfo from '../pages/MovieInfo';
import Watched from '../pages/WatchedList';
import PlanToWatch from '../pages/PlanToWatchList';

function Routes() {
  return (
    <BrowserRouter>
      {/*  <Link to="/">home</Link>
      <Link to="/watched-list">watched lsit</Link>
      <Link to="/plan-to-watch-list">plant to watch</Link> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={MovieInfo} />
        <Route path="/watched-list" component={Watched} />
        <Route path="/plan-to-watch-list" component={PlanToWatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
