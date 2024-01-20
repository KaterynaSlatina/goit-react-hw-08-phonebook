import { Link } from 'react-router-dom';

const FormRegistration = () => {
  const handleSubmit = e => {
    e.preventDefault();
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
