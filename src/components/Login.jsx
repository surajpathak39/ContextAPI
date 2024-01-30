import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <button onClick={handleSubmit}> Submit</button>
    </div>
  );
};

export default Login;
