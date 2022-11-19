import { lazy, useState } from 'react';
import Cat from './svg/cat';
import IconGrid from './Components/IconGrid';
import Mormot from './svg/mormot';
import Shark from "./svg/shark";
import Penguin from "./svg/Penguin";
import Kirby from "./svg/kirby_sleep";
import Wadoru from "./svg/Wadoru";
import Wadorudoo from "./svg/wadorudoo";




import { motion } from "framer-motion";
import Background from "./Components/background";
import useWindowSize from "./Components/useWindowSize";
//import './css/Home.scss';
//import './css/IconGrid.scss';

const Home = () => {
  //Shift+tab= 範囲インデント削除
  //Shift+alt+↑↓ = コピー
  const [isOpen, setIsOpen] = useState(false);
  const [width, height] = useWindowSize();
  var IconWidth = "70px"
  var IconHeight = "70px"
  const RegisterPage = lazy(() => import('./Register'));

  if (width <= 480) {
    IconWidth = "50";
    IconHeight = "50";
  } 


  return (
    <div className='body_style'>
      <div className='SumahoBlock'>
        <Background />
        <div className='Sumaho_Position' >
          <div className='Grid_Frame'>
            <div className='Grid_Line'>
              <IconGrid id="uwa" url="register" Name="Profile">
                <Wadoru width={IconWidth} height={IconHeight}/>
              </IconGrid>
              <IconGrid id="menkyo" url="Login" Name="INFO">
                <Wadorudoo width={IconWidth} height={IconHeight}/>
              </IconGrid>
              <IconGrid id="karimen" url="Test" Name="WORKS">
                <Kirby width={IconWidth} height={IconHeight}/>
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
