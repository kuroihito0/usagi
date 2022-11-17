import { lazy, useState } from 'react';
import Cat from './svg/cat';
import IconGrid from './Components/IconGrid';
import Mormot from './svg/mormot';
import Shark from "./svg/shark";
import Penguin from "./svg/Penguin";
import Kirby from "./svg/kirby_sleep";



import { motion, useAnimation } from "framer-motion";
import Background from "./Components/background";
//import './css/Home.scss';
//import './css/IconGrid.scss';

const Test = () => {
    //Shift+tab= 範囲インデント削除
    //Shift+alt+↑↓ = コピー
    const [isOpen, setIsOpen] = useState(false);

    const RegisterPage = lazy(() => import('./Register'));

    const controls = useAnimation()
    const con = useAnimation();
    return (
        <>
            <motion.div />
            <div className='body_style'>
                <div className='SumahoBlock'>
                    <Background />
                    
                    <div className='Sumaho_Position' >
                        
                        <div className='Grid_Frame'>
                        <button style={{pointerEvents:"auto"}} onClick={() => controls.start({
                                    x:[0,200] ,y:[0,200] 
                                })}>Start</button>
                                {/*アイコン囲み↓ */}
                            <div className='Grid_Line'>
                                {/*アイコン↓ */}
                                <IconGrid id="uwa" url="register">
                                    <Cat />
                                </IconGrid>
                                <motion.div
                                    animate={controls}>
                                    <IconGrid id="menkyo" url="Login">
                                        <Mormot />
                                    </IconGrid>
                                </motion.div>
                                <IconGrid id="karimen" url="/">
                                    <Kirby />
                                </IconGrid>
                                {/*アイコン↑ */}
                                </div>
                                {/*アイコン囲み↑ */}

                        </div>
                    </div>

                    <div className='Sumaho_Position_opacity' />


                </div>
            </div>
        </>
    );
};

export default Test;
