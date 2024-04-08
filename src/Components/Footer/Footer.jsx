import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row row-gap-4">
            <div className="col-12 col-sm-6 col-md-3 text-white">
              <h6>CATEGORIES</h6>
              <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Shoes</li>
                <li>Watches</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3 text-white">
              <h6>HELP</h6>
              <ul>
                <li>Track Order</li>
                <li>Returns</li>
                <li>Shipping</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3 text-white">
              <h6>GET IN TOUCH</h6>
              <p>
                Any questions? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sint culpa quas dolorem nobis illum vero
                exercitationem
              </p>
              <ul className="d-flex justify-content-start align-items-center gap-3 flex-row">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaPinterestP />
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3 text-white">
              <h6>NEWSLETTER</h6>
              <input type="text" placeholder="email@example.com"/>
              <button className="transition">Subscribe</button>
            </div>
          </div>
          <div className="row">
            <p className="copyright text-center">
              Copyright ©2024 All rights reserved | This template is made with{" "}
              <span>
                <CiHeart />
              </span>{" "}
              by
              {" "}
              <span className="us">RKMS</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
