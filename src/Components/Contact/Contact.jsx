import React from "react";
import "./Contact.css";
import img from "../../Assets/bg-01.jpg.webp";
import icon from "../../Assets/icon-email.png.webp";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
export default function Contact() {
  return (
    <>
      <div className="about-background d-flex justify-content-center align-items-center position-relative">
        <img src={img} alt="" />
        <div className=" position-absolute text-white">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="container contact-container mt-5">
        <div className="row contact-row">
          <div className="col-md-6">
            <h3 className=" text-center p-3">Send Us A Message</h3>
            <form
              action=""
              className="d-flex  justify-content-center flex-column gap-3 mb-3"
            >
              <div className="email-icon position-relative">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className=" ps-5 border-0 "
                />
                <img src={icon} alt="" />
              </div>
              <div className="textarea">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="How can i help you?"
                  className=" p-2 border-0"
                ></textarea>
              </div>
              <input type="submit" value="Submit" className="btn btn-dark" />
            </form>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-baseline flex-column p-5 gap-3">
            <div className="icon-and-text mb-3">
              <div
                className="d-flex gap-3"
                style={{
                  backgroundColor: "#ffffff",
                }}
              >
                <SlLocationPin
                  style={{
                    color: "#3b3a3a",
                    fontSize: "30px",
                  }}
                />
                <span>Address</span>
              </div>
              <div className="icon-description ps-5 w-75">
                <p>
                  Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018
                  US
                </p>
              </div>
            </div>
            <div className="icon-and-text mb-3">
              <div
                className="d-flex gap-3"
                style={{
                  backgroundColor: "#ffffff",
                }}
              >
                <BsTelephone
                  style={{
                    color: "#3b3a3a",
                    fontSize: "30px",
                  }}
                />
                <span>Lets Talk</span>
              </div>
              <div className="icon-description ps-5 w-75">
                <p className="phone">+18001236879</p>
              </div>
            </div>
            <div className="icon-and-text mb-3">
              <div
                className="d-flex gap-3"
                style={{
                  backgroundColor: "#ffffff",
                }}
              >
                <HiOutlineMail
                  style={{
                    color: "#3b3a3a",
                    fontSize: "30px",
                  }}
                />
                <span>Sale Support</span>
              </div>
              <div className="icon-description ps-5 w-75">
                <p className="email">contact@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%"}}>
          <iframe title="map"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=el%20haram,egypt+(RKMStore)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
    </>
  );
}
