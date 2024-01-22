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
      {/* Відображення привітання з ім'ям користувача  */}
      <button type="button" onClick={() => dispatch(logOutThunk())}>
        Logout
      </button>
      {/* Кнопка для виходу з облікового запису користувача  */}
    </div>
  );
};

export default UserMenu;
