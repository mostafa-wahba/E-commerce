import React from 'react'
import './Login.css';
import bg from "../../Assets/bg_1.jpg.webp";
import { NavLink } from 'react-router-dom';
export default function Login() {
    return <>
        <div className="login w-100 vh-100">
        <div className="image vh-100 d-none d-md-block">
          <img src={bg} alt="bg" className="w-100 h-100" />
        </div>
        <form className="container d-flex justify-content-center align-items-center flex-column gap-2">
          <div className="log-input">
            <input type="email" required />
            <label>
              <span style={{ transitionDelay: "0ms" }}>E</span>
              <span style={{ transitionDelay: "50ms" }}>m</span>
              <span style={{ transitionDelay: "100ms" }}>a</span>
              <span style={{ transitionDelay: "150ms" }}>i</span>
              <span style={{ transitionDelay: "200ms" }}>l</span>
            </label>
          </div>
          <div className="log-input">
            <input type="password" required />
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
          </div>
          <NavLink to="#">Forget Password</NavLink>
          <input type='submit' value='Login' className='btn btn-primary text-white p-3 btn-blue'/>
          <p>Don't have an account ? <NavLink to="/register">Sign Up</NavLink></p>
        </form>
      </div>
    </>
}
