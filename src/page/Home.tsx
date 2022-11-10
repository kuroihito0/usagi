import { lazy, useState } from 'react';
import Cat from './Components/cat';
import IconGrid from './Components/IconGrid';
import Mormot from './Components/mormot';
import Shark from "./Components/shark";
import Penguin from "./Components/Penguin";
import Kirby from "./Components/kirby_sleep";

import { motion } from "framer-motion";
import Background from "./Components/background";
//import './css/Home.scss';
//import './css/IconGrid.scss';

const Home = () => {
  //Shift+tab= 範囲インデント削除
  //Shift+alt+↑↓ = コピー
  const [isOpen, setIsOpen] = useState(false);

  const RegisterPage = lazy(() => import('./Register'));
  

  return (
    
    <motion.div 
    initial="hidden"
    animate="visible"
    exit={{opacity:0, transition:{duration:5.5}}}
    className='body_style'>
      <div className="hide"/>
      <div className='SumahoBlock'>      
      <Background />
      <div className='Sumaho_Position' >
        <div className='Grid_Frame'>
          <div className='Grid_Line'>
            <IconGrid id="uwa" url="register">
              <Cat />
            </IconGrid>
            <IconGrid id="menkyo" url="Login">
              <Mormot />
            </IconGrid>
            <IconGrid id="karimen" url="NotFound">
              <Kirby />
            </IconGrid>
            </div>
          </div>
        </div>
        
        <div className='Sumaho_Position_opacity' />


      </div>
    </motion.div>
  );
};

export default Home;
