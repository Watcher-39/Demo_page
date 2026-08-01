import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const admin_dash = () => {
        navigate("/dashboard");
    }


  return (
    <>
      <h1>Login</h1>
          <div className="login-form">
              <form>
                  <input type="text" placeholder="Name" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" onClick={admin_dash} className="submit-btn">Login</button>
              </form>
          </div>
    </>
  );
};

export default Login;
