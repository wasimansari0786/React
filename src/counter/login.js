import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleLogin = () => {
    if (!values.email || !/^\S+@\S+\.\S+$/.test(values.email)) {
      setErrors({
        ...errors,
        email: "Please enter a valid email address",
      });
      return;
    }

    if (!values.password || values.password.length < 6) {
      setErrors({
        ...errors,
        password: "Password is required",
      });
      return;
    }

    console.log("Login successful!", values);

    navigate("/myform");
  };

  return (
    <>
      <div className="fullSc">
        <div className="main1">
          <h2>LogIn</h2>
          <div style={{ width: "100%", paddingLeft: "33%" }}>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="email_pass"
              value={values.email}
              onChange={handleInput}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div style={{ width: "100%", paddingLeft: "33%" }}>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="email_pass"
              value={values.password}
              onChange={handleInput}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="btn" onClick={handleLogin}>
            LogIn
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
