import { useDispatch, useSelector } from 'react-redux';
import { FormLogin } from '../components/FormLogin/FormLogin';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { logInThunk } from '../redux/auth/thunks';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isLoggedIn, navigate]);

  const login = body => {
    dispatch(logInThunk(body));
  };

  return <FormLogin login={login} />;
};

export default LoginPage;
