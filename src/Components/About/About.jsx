import React from "react";
import "./About.css";
import img from "../../Assets/bg-01.jpg.webp";
import about from "../../Assets/about-01.jpg.webp";
import about2 from "../../Assets/about-02.jpg.webp";

export default function About() {
  return (
    <>
      <div className="about-background d-flex justify-content-center align-items-center position-relative">
        <img src={img} alt="" />
        <div className=" position-absolute text-white">
          <h1>About</h1>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row about-row mt-5 g-5">
          <div className="col-md-7 text-section1">
            <h3>Our Story</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat consequat enim, non auctor massa ultrices non. Morbi sed
              odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Maecenas varius egestas diam, eu sodales metus
              scelerisque congue. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Maecenas gravida
              justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
              ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
              vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
              condimentum euismod tortor, eget facilisis diam faucibus et. Morbi
              a tempor elit. Donec gravida lorem elit, quis condimentum ex
              semper sit amet. Fusce eget ligula magna. Aliquam aliquam
              imperdiet sodales. Ut fringilla turpis in vehicula vehicula.
              Pellentesque congue ac orci ut gravida. Aliquam erat volutpat.
              Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis.
              Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend
              elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut
              commodo efficitur, quam velit convallis ipsum, et maximus enim
              ligula ac ligula. Any questions? Let us know in store at 8th
              floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716
              6879
            </p>
          </div>
          <div className="col-md-5">
            <div className="animated-img-and-border">
              <div className="animated-img">
                <img src={about} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 g-5">
          <div className="col-md-5 order-2 order-lg-1">
            <div className="animated-img-and-border">
              <div className="animated-img">
                <img src={about2} alt="" className="" />
              </div>
            </div>
          </div>
          <div className="col-md-7 text-section2 order-1 order-lg-2">
            <h3>Our Mission</h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat consequat enim, non auctor massa ultrices non. Morbi sed
              odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Maecenas varius egestas diam, eu sodales metus
              scelerisque congue. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Maecenas gravida
              justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
              ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
              vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
              condimentum euismod tortor, eget facilisis diam faucibus et. Morbi
              a tempor elit. Donec gravida lorem elit, quis condimentum ex
              semper sit amet. Fusce eget ligula magna. Aliquam aliquam
              imperdiet sodales. Ut fringilla turpis in vehicula vehicula.
              Pellentesque congue ac orci ut gravida. Aliquam erat volutpat.
              Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis.
              Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend
              elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut
              commodo efficitur, quam velit convallis ipsum, et maximus enim
              ligula ac ligula. Any questions? Let us know in store at 8th
              floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716
              6879
            </p>
            <div className="second-p">
              <p>
                Creativity is just connecting things. When you ask creative
                people how they did something, they feel a little guilty because
                they didn't really do it, they just saw something. It seemed
                obvious to them after a while. <span>- Steve Job’s</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
