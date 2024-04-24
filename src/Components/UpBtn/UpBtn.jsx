import React, { useState } from "react";
import "./UpBtn.css";
import { IoMdArrowDropup } from "react-icons/io";

export default function UpBtn() {
const [showBtn,setShowBtn]=useState(false)
const showAndHide=()=>{
  if(document.documentElement.scrollTop>=300){
    setShowBtn(true);
  }
  else{
    setShowBtn(false);
  }
}
const moveUp=()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}
window.addEventListener("scroll",showAndHide)
  return (
    <>
      <span className="up-btn" style={{opacity:showBtn? 1:0}}>
        <IoMdArrowDropup onClick={moveUp}/>
      </span>
    </>
  );
}

    