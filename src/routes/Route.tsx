import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UserState } from '../Interfaces';
import { Link } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';
import { StyledNavbar } from './styles';
import { logoutSuccess } from '../store/modules/user/actions';

interface IRoutes extends RouteProps {
  Component: any;
  isPrivate?: boolean;
}

export default function RouteWrapper({
  Component,
  isPrivate = false,
  ...rest
}: IRoutes) {
  const signed = useSelector<UserState>((state) => state.user.token);
  const dispatch = useDispatch();

  if (!signed && isPrivate) {
    return <Redirect to="/sign-in" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  function handleLogout() {
    dispatch(logoutSuccess());
  }
  // @ts-ignore
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {isPrivate && (
            <StyledNavbar>
              <div>
                <Link to="/">Home </Link>
                <Link to="/watched-list">Watched list </Link>
                <Link to="/plan-to-watch-list">Plant to watch </Link>
              </div>
              <div>
                <button onClick={handleLogout}>
                  <MdExitToApp />
                </button>
              </div>
            </StyledNavbar>
          )}
          <Component {...props} />
        </>
      )}
    />
  );
}
