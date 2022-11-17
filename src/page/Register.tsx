import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import Background from './Components/background';
import './css/Home.scss';


import MyName from "./Components/Myprofile";
import FadeIn from "./Components/FadeIn";

const Register = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => [setLoading(false)], 80000);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='body_style'>
      <div className='SumahoBlock'>

        <Background />
        <motion.div layoutId='uwa' className='nakami' />
        <MyName/>
        <FadeIn/>
        <div className='Sumaho_Position'>
        </div>
      </div>
    </div>

  );
};

export default Register;
