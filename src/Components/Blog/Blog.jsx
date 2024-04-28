import React from "react";
import "./Blog.css";
import img from "../../Assets/blog.jpg.webp";
import img1 from "../../Assets/blog-04.jpg.webp";
import img2 from "../../Assets/blog-05.jpg.webp";
import img3 from "../../Assets/blog-06.jpg.webp";
import img4 from "../../Assets/g-01.jpg"
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
export default function Blog() {
  return (
    <>
      <div className="about-background d-flex justify-content-center align-items-center position-relative">
        <img src={img} alt="" />
        <div className=" position-absolute text-white">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="container mx-auto my-5 blog">
        <div className="row">
          <div className="col-lg-9 col-md-11 mx-md-auto mx-ms-auto col-sm-10">
            <div className="blog-content mb-5 position-relative">
              <div className="image">
                <img src={img1} alt="" />
              </div>
              <div className="number position-absolute p-1 text-center">
                <h6 className="">22</h6>
                <p>Jan 2018</p>
              </div>
              <div className="text mt-2">
                <Link className="h2 fw-bold curser-pointer">
                8 Inspiring Ways to Wear Dresses in the Winter
              </Link>
              <p className="text-muted mt-2">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
                dictum vitae sapien eu varius
              </p>
              </div>
              
              <div className="admin my-2 d-flex justify-content-between">
                <div className="comments">
                  <p>
                    <span className="text-muted me-1">By</span>
                    Admin | StreetStyle, Fashion, Couple | 8 Comments
                  </p>
                </div>
                <div className="continue">
                    <Link>CONTINUE READING</Link>
                </div>
              </div>
            </div>
            <div className="blog-content mb-5 position-relative">
              <div className="image">
                <img src={img2} alt="" />
              </div>
              <div className="number position-absolute p-1 text-center">
                <h6 className="">10</h6>
                <p>Jan 2018</p>
              </div>
              <div className="text mt-2">
                <Link className="h2 fw-bold curser-pointer">
                8 Inspiring Ways to Wear Dresses in the Winter
              </Link>
              <p className="text-muted mt-2">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
                dictum vitae sapien eu varius
              </p>
              </div>
              
              <div className="admin my-2 d-flex justify-content-between">
                <div className="comments">
                  <p>
                    <span className="text-muted me-1">By</span>
                    Admin | StreetStyle, Fashion, Couple | 8 Comments
                  </p>
                </div>
                <div className="continue">
                    <Link>CONTINUE READING</Link>
                </div>
              </div>
            </div>
            <div className="blog-content mb-5 position-relative">
              <div className="image">
                <img src={img3} alt="" />
              </div>
              <div className="number position-absolute p-1 text-center">
                <h6 className="">18</h6>
                <p>Jan 2018</p>
              </div>
              <div className="text mt-2">
                <Link className="h2 fw-bold curser-pointer">
                8 Inspiring Ways to Wear Dresses in the Winter
              </Link>
              <p className="text-muted mt-2">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
                dictum vitae sapien eu varius
              </p>
              </div>
              
              <div className="admin my-2 d-flex justify-content-between">
                <div className="comments">
                  <p>
                    <span className="text-muted me-1">By</span>
                    Admin | StreetStyle, Fashion, Couple | 8 Comments
                  </p>
                </div>
                <div className="continue">
                    <Link>CONTINUE READING</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex  align-items-start flex-column text-muted ">
            <div className="categoris-blog w-100">
                <form action="" className="position-relative mb-3">
                <input type="search" name="" id="" placeholder="Search" className=" rounded p-3 border rounded-pill w-100 "/>
                <IoSearchSharp className=" position-absolute top-50 translate-middle text-muted" />
            </form>
            <h2 className="px-3 text-dark fs-5">Categories</h2>
            <ul className="w-100 p-3">
                <li className="border-bottom border-top py-2">Fashion</li>
                <li className="border-bottom py-2">Beauty</li>
                <li className="border-bottom py-2">Street Style</li>
                <li className="border-bottom py-2">Life Style</li>
                <li className="border-bottom py-2">Diy & Crafts</li>
            </ul>
            </div>  
            <div className="featured-products mt-3">
            <h2 className="ps-3 text-dark fs-5">Featured Products</h2>
            <ul className="w-100 p-3">
                <li className="py-2 d-flex gap-2 ">
                    <div className="image position-relative">
                    <img src={img4} alt="" />
                    <span className="overlay position-absolute transition w-100 h-100 top-0 start-0"></span>
                    </div>
                    <div className="text">
                         <p className="mb-4">White Shirt With Pleat Detail Back</p>
                        <span>$19.00</span>
                    </div>
                </li>
                <li className="py-2 d-flex gap-2 ">
                    <div className="image position-relative">
                    <img src={img4} alt="" />
                    <span className="overlay position-absolute transition w-100 h-100 top-0 start-0"></span>
                    </div>
                    <div className="text">
                         <p className="mb-4">White Shirt With Pleat Detail Back</p>
                        <span>$19.00</span>
                    </div>
                </li>
                <li className="py-2 d-flex gap-2 ">
                    <div className="image position-relative">
                    <img src={img4} alt="" />
                    <span className="overlay position-absolute transition w-100 h-100 top-0 start-0"></span>
                    </div>
                    <div className="text">
                         <p className="mb-4">White Shirt With Pleat Detail Back</p>
                        <span>$19.00</span>
                    </div>
                </li>
            </ul>
          </div>
          <div className="archive mt-3 w-100">
            <h2 className="ps-3 text-dark fs-5">Archive</h2>
            <ul className="w-100 p-3">
                <li className="py-2 d-flex justify-content-between curser-pointer">
                    <span>July 2018</span>
                    <span>(10)</span>
                </li>
                <li className="py-2 d-flex justify-content-between curser-pointer">
                    <span>Jun 2018</span>
                    <span>(18)</span>
                </li>
                <li className="py-2 d-flex justify-content-between curser-pointer">
                    <span>December 2018</span>
                    <span>(9)</span>
                </li>
                <li className="py-2 d-flex justify-content-between curser-pointer">
                    <span>January 2017</span>
                    <span>(23)</span>
                </li>
                <li className="py-2 d-flex justify-content-between curser-pointer">
                    <span>July 2018</span>
                    <span>(10)</span>
                </li>
                <li className="py-2 d-flex justify-content-between curser-pointer">
                    <span>March 2018</span>
                    <span>(3)</span>
                </li>
                <li className="py-2 d-flex justify-content-between curser-pointer">
                    <span>April 2018</span>
                    <span>(5)</span>
                </li>
                <li className="py-2 d-flex justify-content-between curser-pointer">
                    <span>May 2018</span>
                    <span>(21)</span>
                </li>
                <li className="py-2 d-flex justify-content-between curser-pointer">
                    <span>Febrauary 2018</span>
                    <span>(10)</span>
                </li>
            </ul>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
