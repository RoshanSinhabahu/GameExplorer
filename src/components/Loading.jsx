import React from 'react';
import './Loading.css'
import { easeInOut, easeOut, motion } from 'framer-motion';

const LoadingComp = () => {
  return (
    <motion.div className="loader" initial={{opacity:0, scale:1.5 }} animate={{opacity:1, y:0, scale:1 }} transition={{duration:0.5, ease:easeInOut, delay:0.4}}>
      <div className="text"><span>Loading</span></div>
      <div className="text"><span>Loading</span></div>
      <div className="text"><span>Loading</span></div>
      <div className="text"><span>Loading</span></div>
      <div className="text"><span>Loading</span></div>
      <div className="text"><span>Loading</span></div>
      <div className="text"><span>Loading</span></div>
      <div className="text"><span>Loading</span></div>
      <div className="text"><span>Loading</span></div>
      <div className="line"></div>
    </motion.div>
  );
}

export default LoadingComp;