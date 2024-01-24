import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOutThunk } from '../../redux/auth/thunks';
import { LogOutBtn, UserHeader, WelcomeUser } from './UserMenu.styled';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <UserHeader>
      <WelcomeUser>Welcome to the Phonebook, {user.name}! </WelcomeUser>
      <LogOutBtn type="button" onClick={() => dispatch(logOutThunk())}>
        Logout
      </LogOutBtn>
    </UserHeader>
  );
};

export default UserMenu;
