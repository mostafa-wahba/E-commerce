import React, { useState } from "react";
import "./Login.css";
import bg from "../../Assets/image.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "universal-cookie";
export default function Login() {
  let toHome = useNavigate();
  const cookies = new Cookies();
  const [userToken, setUserToken] = useState([]);
  async function handleLogin(values) {
    try {
      const {data} = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        values
      );
      if (data.message === "success") {
        // Assuming the token is returned in response.data.token
        cookies.set("userToken", data.token, { path: "/" });
        setUserToken(data.token)
        toHome("/");
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  }
  let validation = Yup.object({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required"),
    // .matches(/^[A-Z][a-z0-9]{5,10}$/, "Password should be srtong"),
  });
  let formik = useFormik({
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
          <NavLink to="#">Forget Password</NavLink>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary text-white p-3 btn-blue"
            disabled={!(formik.isValid && formik.dirty)}
          />
          <p>
            Don't have an account ? <NavLink to="/register">Sign Up</NavLink>
          </p>
        </form>
      </div>
    </>
  );
}
