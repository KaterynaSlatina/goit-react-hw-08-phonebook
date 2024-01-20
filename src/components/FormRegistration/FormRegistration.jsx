// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { signUpThunk } from '../../redux/auth/thunks';

const FormRegistration = ({ register }) => {
  // const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    register({ name, email, password });
    // const form = e.currentTarget;

    // dispatch(
    //   signUpThunk({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );

    e.currentTarget.reset();
  };

  return (
    <div>
      <Link to="/">Home</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputName">Name</label>
          <input type="text" name="name" id="inputName" />
        </div>

        <div>
          <label htmlFor="inputEmail">Email address</label>
          <input type="email" name="email" id="inputEmail" />
        </div>

        <div>
          <label htmlFor="inputPassword">Password</label>
          <input type="password" name="password" id="inputPassword" />
          <button type="submit">Registration </button>
        </div>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};
export default FormRegistration;
