import React from 'react'
import './Loading.css';
import { motion } from "framer-motion";
import logo from "../../Assets/icon.png"
export default function Loading() {
    return <>
          <motion.div 
          animate={{ rotateY: 180 }}
          transition={{
            repeat: Infinity, duration: 0.6,repeatDelay: 0.5
          }}
          className="d-flex w-100 justify-content-center align-items-center loading-screen">
            <span className='loading-logo'><img src={logo} alt="loading..." /></span>
          </motion.div>
    </>
}
