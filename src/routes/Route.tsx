import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../Interfaces';

interface IRoutes extends RouteProps {
  Component: FC;
  isPrivate?: boolean;
}

export default function RouteWrapper({
  Component,
  isPrivate = false,
  ...rest
}: IRoutes) {
  const signed = useSelector<UserState>((state) => state.user.token);

  if (!signed && isPrivate) {
    return <Redirect to="/sign-in" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  // @ts-ignore
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
