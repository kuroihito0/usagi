import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./css/Home.scss";
import Background from "./Components/background";
import { duration } from '@material-ui/core';
const Register = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => [
      setLoading(false)
    ], 80000)
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='body_style'>
      <div className='SumahoBlock'>
      <Background/>
        <motion.div layoutId='uwa' className='nakami' />
        <div className='Sumaho_Position'>
          <motion.div 
          style={{backgroundColor:"azure",fontSize:"40px"}}>いのしし🐗</motion.div>
          {/*スマホ本体配置*/}
          {/* {
            loading ? (
              <motion.div
                style={{
                  width: "26%",
                  height: "26%",
                  background: "var(--accent)", backgroundColor: "aqua",
                  position: "absolute",
                  zIndex:"1",
                  marginLeft:"35%",
                  marginTop: "45%"
                }}
                animate={{
                  scale: [4, -100],
                  rotate: [0, 0],
                  borderRadius: ["5%", "5%"]
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  times: [1, 3]
                }}
              />

            ) : ( */}

          {/* 丸のフェード
            <motion.div
              initial={{opacity:0}}
              animate ={{
                scale:[0,7],
                opacity:1,
                borderRadius:["50%","50%"]
              }}
              transition={{
                duration:9
              }} 
              style={{ backgroundColor: "red", width: "50%", height: "30%", zIndex: "0", position: "absolute",marginTop:"40%",marginLeft:"25%",marginRight:"auto"}}></motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
