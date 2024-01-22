import React from 'react';
import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <Link to="/registration">Register</Link> <Link to="/login">Log In</Link>{' '}
    </div>
  );
};

export default AuthNav;
