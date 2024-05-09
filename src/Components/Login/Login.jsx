import React, { useState, useContext } from "react";
import "./Login.css";
import bg from "../../Assets/image.png";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../Context/AuthContext"; // Ensure the path is correct

export default function Login() {
  const [isloading, setIsloading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleLogin = async (values) => {
    setIsloading(true);
    try {
      await login(values.email, values.password);
    } catch (error) {
      console.error("Login error:", error);
      setIsloading(false);
    }
  };

  const validation = Yup.object({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "Password is wrong"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema: validation,
  });

  return (
    <>
      <div className="login w-100 vh-100">
        <div className="image vh-100 d-none d-md-block">
          <img src={bg} alt="bg" className="w-100 h-100" />
        </div>
        <form
          id=""
          onSubmit={formik.handleSubmit}
          className="container d-flex justify-content-center align-items-center flex-column gap-2"
        >
          <div className="log-input">
            <input
              onBlur={formik.handleBlur}
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <label>
              <span style={{ transitionDelay: "0ms" }}>E</span>
              <span style={{ transitionDelay: "50ms" }}>m</span>
              <span style={{ transitionDelay: "100ms" }}>a</span>
              <span style={{ transitionDelay: "150ms" }}>i</span>
              <span style={{ transitionDelay: "200ms" }}>l</span>
            </label>
            {formik.errors.email && formik.touched.email ? (
              <div className=" alert alert-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="log-input">
            <input
              onBlur={formik.handleBlur}
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <label>
              <span style={{ transitionDelay: "0ms" }}>P</span>
              <span style={{ transitionDelay: "50ms" }}>a</span>
              <span style={{ transitionDelay: "100ms" }}>s</span>
              <span style={{ transitionDelay: "150ms" }}>s</span>
              <span style={{ transitionDelay: "200ms" }}>w</span>
              <span style={{ transitionDelay: "250ms" }}>o</span>
              <span style={{ transitionDelay: "300ms" }}>r</span>
              <span style={{ transitionDelay: "350ms" }}>d</span>
            </label>
            {formik.errors.password && formik.touched.password ? (
              <div className=" alert alert-danger">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <NavLink to="#" onClick={""}>
            Forget Password
          </NavLink>
          <div className="buttons d-flex gap-2 w-100 justify-content-center my-2">
            {isloading ? (
              <button type="button" className="border-0">
                <div className="loading spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary text-white p-3 btn-blue w-100"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Login
              </button>
            )}
          </div>
          <p>
            Don't have an account ? <NavLink to="/register">Sign Up</NavLink>
          </p>
        </form>
      </div>
    </>
  );
}
