import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UserState } from '../Interfaces';
import { NavLink } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';
import { StyledNavbar, StyledNavLink } from './styles';
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
                <StyledNavLink to="/" exact>
                  Home{' '}
                </StyledNavLink>
                <StyledNavLink to="/watched-list">Watched list </StyledNavLink>
                <StyledNavLink to="/plan-to-watch-list">
                  Plant to watch
                </StyledNavLink>
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
