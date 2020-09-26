import React from 'react';
import { Route as ReactRDOM, RouteProps, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/Auth';

interface RouterProps extends RouteProps {
  isPrived?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouterProps> = ({ isPrived = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactRDOM
      {...rest}
      render={() => {
        return isPrived === !!user ? <Component /> : <Redirect to={{ pathname: isPrived ? '/' : '/dashboard' }} />;
      }}
    />
  );
};

export default Route;
