import Header from '../Header/Header';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {isLoggedIn ? <UserMenu /> : <Header />}
      {/* Відображаємо UserMenu, якщо користувач аутентифікований, або AuthNav, якщо користувач неаутентифікований */}
    </div>
  );
};

export default AppBar;
