import { Link } from 'react-router-dom';
import { logInThunk } from '../../redux/auth/thunks';
import { useDispatch } from 'react-redux';

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
    <div>
      <Link to="/">Home</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputEmail">Email address</label>
          <input type="email" name="email" id="inputEmail" />
        </div>

        <div>
          <label htmlFor="inputPassword">Password</label>
          <input type="password" name="password" id="inputPassword" />
          <button type="submit">Login</button>
        </div>
        <Link to="/registration">Registration</Link>
      </form>
    </div>
  );
};

// export default FormLogin;
