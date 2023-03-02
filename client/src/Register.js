import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register = async (e) => {
    e.preventDefault();
    try {
      const registerUser = { username, password };
      console.log(registerUser);
      const response = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        body: JSON.stringify(registerUser),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status == 200) {
        alert("Register succesful");
      } else {
        alert("registration failed");
      }
      console.log(response);
    } catch (error) {
      alert("registration failed");
    }
  };
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default Register;
