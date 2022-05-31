import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/LoginContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:8000/auth/login", loginData);
      await getLoggedIn();
      //navigate("/home");
    } catch (err) {
      console.error(err.response.data.errorMessage);
      alert(err.response.data.errorMessage);
    }
  }

  return (
    <div className="main">
      <div className="sub-main">
        <h1>Log in</h1>
        <hr />
        <form onSubmit={login}>
          <label>E-mail</label>
          <div>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-input"
            />
          </div>
          <label>Password</label>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-input"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;