import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Logo from '../assets/Rectangle 55.png'


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    
    const users: Record<string, "startup" | "investor" | "admin"> = {
      "startup@example.com": "startup",
      "investor@example.com": "investor",
      "admin@example.com": "admin",
    };

    const userType = users[email.toLowerCase()];

    if (userType) {
      localStorage.setItem("userType", userType);
      navigate("/"); 
    } else {
      alert("Invalid Email. .");
    }
  };

  return (
    <div className="signup-container">

      {/* LEFT IMAGE */}
      <div className="left-box">
        <img src={Logo} className="img-fluid" alt="Login Image" />
      </div>

      {/* RIGHT FORM */}
      <div className="right-box">
        <a href="/" className="back-link">
          <i className="fa-solid fa-arrow-left"></i> Back to Website
        </a>

        <h2>Welcome</h2>
        <p>Log in with a demo email</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="main-btn">Log In</button>

     
        </form>

        <p className="bottom-text p-4">
          Demo Emails for testing:<br />
          startup@example.com: startup<br />
          investor@example.com: investor<br />
          admin@example.com: admin
        </p>
      </div>

    </div>
  );
};

export default Login;
