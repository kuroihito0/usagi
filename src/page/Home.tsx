import { lazy, useState } from 'react';
import Cat from './svg/cat';
import IconGrid from './Components/IconGrid';
import Mormot from './svg/mormot';
import Shark from "./svg/shark";
import Penguin from "./svg/Penguin";
import Kirby from "./svg/kirby_sleep";



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

    <div className='body_style'>
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
    </div>
  );
};

export default Home;
