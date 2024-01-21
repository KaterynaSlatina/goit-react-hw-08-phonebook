import { Link } from 'react-router-dom';

export const FormLogin = () => {
  const handleSubmit = e => {
    e.preventDefault();
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
export default FormLogin;
