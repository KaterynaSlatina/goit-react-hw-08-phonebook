import { logInThunk } from '../../redux/auth/thunks';
import { useDispatch } from 'react-redux';
import { LoginBtn, LoginLink } from './FormLogin.styled';

export const FormLogin = ({ login }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logInThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="email" name="email" id="inputEmail" placeholder="email" />
      </div>

      <div>
        <input
          type="password"
          name="password"
          id="inputPassword"
          placeholder="password"
        />
      </div>
      <LoginBtn type="submit">Login</LoginBtn>

      <LoginLink to="/registration">Registration</LoginLink>
    </form>
  );
};
