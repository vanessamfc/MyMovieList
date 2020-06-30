import React from 'react';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Home from '../pages/Home';
import MovieInfo from '../pages/MovieInfo';
import Watched from '../pages/WatchedList';
import PlanToWatch from '../pages/PlanToWatchList';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import { StyledNavbar } from './styles';
import Route from './Route';

function Routes() {
  return (
    <BrowserRouter>
      <StyledNavbar>
        <Link to="/">Home </Link>
        <Link to="/watched-list">Watched list </Link>
        <Link to="/plan-to-watch-list">Plant to watch </Link>
      </StyledNavbar>
      <Switch>
        <Route path="/" exact Component={Home} />
        <Route path="/movie/:id" Component={MovieInfo} />
        <Route path="/watched-list" Component={Watched} />
        <Route path="/plan-to-watch-list" Component={PlanToWatch} />
        <Route path="/sign-up" Component={SignUp} />
        <Route path="/sign-in" Component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
