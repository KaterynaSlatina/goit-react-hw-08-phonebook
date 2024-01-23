import { useDispatch } from 'react-redux';
import { signUpThunk } from '../../redux/auth/thunks';
import { RegisterBtn, RegisterLink } from './FormRegistration.styled';

const FormRegistration = ({ register }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      signUpThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="inputName">Name</label> */}
          <input type="text" name="name" id="inputName" placeholder="name" />
        </div>

        <div>
          {/* <label htmlFor="inputEmail">Email address</label> */}
          <input
            type="email"
            name="email"
            id="inputEmail"
            placeholder="email"
          />
        </div>

        <div>
          {/* <label htmlFor="inputPassword">Password</label> */}
          <input
            type="password"
            name="password"
            id="inputPassword"
            placeholder="password"
          />
        </div>
        <RegisterBtn type="submit">Registration </RegisterBtn>

        <RegisterLink to="/login">Login</RegisterLink>
      </form>
    </div>
  );
};
export default FormRegistration;
