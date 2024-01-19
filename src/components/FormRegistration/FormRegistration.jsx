const FormRegistration = () => {
  const handleSubmit = e => {
    e.preventDafault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputName">Name</label>
          <input type="text" name="name" id="inputName" />
        </div>

        <div>
          <label htmlFor="inputEmail">Email address</label>
          <input type="email" name="email" id="inputEmail" />
          <div>We`ll never share your email address with anyone else</div>
        </div>

        <div>
          <label htmlFor="inputPassword">Password</label>
          <input type="password" name="password" id="inputPassword" />
          <button type="submit">Login</button>
        </div>
      </form>
      {/* <Link to="">registration</Link> */}
    </div>
  );
};
export default FormRegistration;
