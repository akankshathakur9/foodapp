import React, { useState } from 'react';
import  { motion } from 'framer-motion';
import { fadeInOut } from '../animations';

const Logininput = ({
  placeholder, 
  icon,
  inputState, 
  inputStateFunc, 
  type, 
  isSignUp,
}) => {
  const {isFocus, setIsFocus} = useState(false);
  return (
    <motion.div  
    {...fadeInOut}
      className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md rounded-md w-full px-4 py-2 ${
        isFocus ? "shadow-md shadow-red-400" : "shadow-none"
      }`}
    >
      {/* Your content here */}  
    
     
     {icon}
     <input
      type={type} 
      placeholder={placeholder} 
      className="w-full, h-full bg-transparent text-headingColor text-lg font-semibold border-none outline-none"
      value={inputState} 
      onChange={(e) => 
      inputStateFunc(e.target.value)} 
      OnFocus={() => setIsFocus(true)}
      onBlur ={() => setIsFocus(false)}
     
     />
  </motion.div>
 );
  
};

export default Logininput;