import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import MovieInfo from '../pages/MovieInfo';
import Watched from '../pages/WatchedList';
import PlanToWatch from '../pages/PlanToWatchList';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import { StyledNavbar } from './styles';

function Routes() {
  return (
    <BrowserRouter>
      <StyledNavbar>
        <Link to="/">Home </Link>
        <Link to="/watched-list">Watched list </Link>
        <Link to="/plan-to-watch-list">Plant to watch </Link>
      </StyledNavbar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={MovieInfo} />
        <Route path="/watched-list" component={Watched} />
        <Route path="/plan-to-watch-list" component={PlanToWatch} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-In" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
