import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Route from './Route';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassoword from '../pages/ResetPassoword';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={SignIn} path="/" exact />
      <Route component={SignUp} path="/signup" />
      <Route component={ForgotPassword} path="/forgot" />
      <Route component={ResetPassoword} path="/reset_password" />
      <Route component={Dashboard} path="/dashboard" isPrived />
    </Switch>
  );
};

export default Routes;
