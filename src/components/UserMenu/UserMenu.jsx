import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOutThunk } from '../../redux/auth/thunks';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Welcome to Phonebook, {user.name} </h1>
      <button type="button" onClick={() => dispatch(logOutThunk())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
