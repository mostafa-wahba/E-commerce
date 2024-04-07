import React, { Fragment } from "react";
import "./Register.css";
import bg from "../../Assets/bg_1.jpg.webp";
export default function Register() {
  return (
    <Fragment>
      <div className="register w-100 vh-100">
        <div className="image vh-100 d-none d-md-block">
          <img src={bg} alt="bg" className="w-100 h-100" />
        </div>
        <form className="container d-flex justify-content-center align-items-center flex-column gap-2">
          <div className="reg-input">
            <input type="text" required />
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
          </div>
          <div className="reg-input">
            <input type="email" required />
            <label>
              <span style={{ transitionDelay: "0ms" }}>E</span>
              <span style={{ transitionDelay: "50ms" }}>m</span>
              <span style={{ transitionDelay: "100ms" }}>a</span>
              <span style={{ transitionDelay: "150ms" }}>i</span>
              <span style={{ transitionDelay: "200ms" }}>l</span>
            </label>
          </div>
          <div className="reg-input">
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
          <div className="reg-input">
            <input type="password" required />
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
          </div>
          <input type='submit' value='Register' className='btn btn-primary text-white p-3 btn-blue'/>
          {/* 
                <input type='text' placeholder='Username' className=''/>
                <input type='email' placeholder='Email' className=''/>
                <input type='password' placeholder='Password' className=''/>
                <input type='password' placeholder='Confirm Password' className=''/>
                <input type='submit' value='Register' className='btn btn-primary text-white p-3 btn-blue'/> */}
        </form>
      </div>
    </Fragment>
  );
}
