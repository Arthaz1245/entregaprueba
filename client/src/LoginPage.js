import React from "react";

const LoginPage = () => {
  return (
    <form className="login">
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
