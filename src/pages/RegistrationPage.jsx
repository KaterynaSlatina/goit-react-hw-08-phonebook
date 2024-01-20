import { useDispatch, useSelector } from 'react-redux';
import FormRegistration from '../components/FormRegistration/FormRegistration';
import { signUpThunk } from '../redux/auth/thunks';
import { selectIsLoggedIn, selectUser } from '../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isLoggedIn, navigate]);

  const register = body => {
    dispatch(signUpThunk(body));
  };
  console.log('isLoggedIn', isLoggedIn);
  console.log('user', user);

  return <FormRegistration register={register} />;
};

export default RegistrationPage;
