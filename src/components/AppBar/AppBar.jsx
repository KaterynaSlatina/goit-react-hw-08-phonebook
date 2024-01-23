import Header from '../Header/Header';
// import Navigation from '../../components/Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {/* <Navigation /> */}
      {isLoggedIn ? <UserMenu /> : <Header />}
      {/* Відображаємо UserMenu, якщо користувач аутентифікований, або AuthNav, якщо користувач неаутентифікований */}
    </div>
  );
};

export default AppBar;
