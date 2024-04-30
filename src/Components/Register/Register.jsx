import React, { useState } from "react";
import "./Register.css";
import bg from "../../Assets/image.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
export default function Register() {
  let toLogin = useNavigate();
  const [isloading, setIsloading] = useState(false);
  const [msgError, setMsgError] = useState("");
  async function handleRegister(values) {
    setIsloading(true);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .catch((errr) => {
        setIsloading(false);
        setMsgError(`${errr.response.data.message}`);
      });
    if (data.message === "success") {
      setIsloading(false);
      toLogin("/login");
    }
  }
  let validation = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Minimum length is 3")
      .max(20, "Miximum length is 10"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required")
    .matches(/^[A-Z][a-z0-9]{5,10}$/, "Password should be start with Capital letter, followed by 5 to 10 lowercase letters or digits."),
    rePassword: Yup.string()
      .required("Repassword is required")
      .oneOf([Yup.ref("password")], "Password doesnt match"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^01[012][0-9]{8}$/, "Phone number must be a valid number"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: handleRegister,
    validationSchema: validation,
  });
  return (
    <>
      <div className="register w-100 min-vh-100">
        <div className="image min-vh-100 d-none d-md-block">
          <img src={bg} alt="bg" className="w-100 h-100" />
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="container d-flex justify-content-center align-items-center flex-column gap-2"
        >
          {msgError ? (
            <div className="alert alert-danger">{msgError}</div>
          ) : null}
          <div className="reg-input name">
            <input
              onBlur={formik.handleBlur}
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <label>
              <span style={{ transitionDelay: "0ms" }}>U</span>
              <span style={{ transitionDelay: "50ms" }}>s</span>
              <span style={{ transitionDelay: "100ms" }}>e</span>
              <span style={{ transitionDelay: "150ms" }}>r</span>
              <span style={{ transitionDelay: "200ms" }}>n</span>
              <span style={{ transitionDelay: "250ms" }}>a</span>
              <span style={{ transitionDelay: "300ms" }}>m</span>
              <span style={{ transitionDelay: "350ms" }}>e</span>
            </label>
            {formik.errors.name && formik.touched.name ? (
              <div className=" alert alert-danger">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="reg-input">
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
          <div className="reg-input">
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
          <div className="reg-input">
            <input
              onBlur={formik.handleBlur}
              type="password"
              name="rePassword"
              id="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
            />
            <label>
              <span style={{ transitionDelay: "0ms" }}>C</span>
              <span style={{ transitionDelay: "50ms" }}>o</span>
              <span style={{ transitionDelay: "100ms" }}>n</span>
              <span style={{ transitionDelay: "150ms" }}>f</span>
              <span style={{ transitionDelay: "200ms" }}>i</span>
              <span style={{ transitionDelay: "250ms" }}>r</span>
              <span style={{ transitionDelay: "300ms" }}>m</span>
              <span style={{ transitionDelay: "350ms" }}> </span>
              <span style={{ transitionDelay: "400ms" }}>P</span>
              <span style={{ transitionDelay: "450ms" }}>a</span>
              <span style={{ transitionDelay: "500ms" }}>s</span>
              <span style={{ transitionDelay: "550ms" }}>s</span>
              <span style={{ transitionDelay: "600ms" }}>w</span>
              <span style={{ transitionDelay: "650ms" }}>o</span>
              <span style={{ transitionDelay: "700ms" }}>r</span>
              <span style={{ transitionDelay: "750ms" }}>d</span>
            </label>
            {formik.errors.rePassword && formik.touched.rePassword ? (
              <div className=" alert alert-danger">
                {formik.errors.rePassword}
              </div>
            ) : null}
          </div>
          <div className="reg-input">
            <input
              onBlur={formik.handleBlur}
              type="tel"
              name="phone"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            <label>
              <span style={{ transitionDelay: "0ms" }}>P</span>
              <span style={{ transitionDelay: "50ms" }}>h</span>
              <span style={{ transitionDelay: "100ms" }}>o</span>
              <span style={{ transitionDelay: "150ms" }}>n</span>
              <span style={{ transitionDelay: "200ms" }}>e</span>
            </label>
            {formik.errors.phone && formik.touched.phone ? (
              <div className=" alert alert-danger">{formik.errors.phone}</div>
            ) : null}
          </div>
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
                className="btn text-white p-3 btn-blue w-100"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Register
              </button>
            )}
          </div>
          <p>
            Already have an account ? <NavLink to="/login">Login</NavLink>
          </p>
        </form>
      </div>
    </>
  );
}
