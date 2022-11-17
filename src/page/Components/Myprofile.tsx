import { height } from '@mui/system';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.scss';
import "../css/Profile.scss"
import profile from "../pics/profile.png";
import Twitter from '../svg/twitter';
import Youtube from '../svg/Youtube';


import SnsIcon from './SnsIcon';

const MyName = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            {/*本文 */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1, duration: 6 }} 
                className="headerPosition" 
            >
                <img src={profile} className="Profile" />
                <div style={{ border:'4px solid',backgroundColor: "#FFC5A3", width: "100%", height: "100%", zIndex: "1", position: "absolute", marginTop: "30%", textAlign: "center", overflow: "auto", msOverflowStyle: 'none' }}>
                    <div style={{ position: 'sticky', top: '40px' }}>
                        <p className='header'>ヒカル ニシダ<br /></p>
                        <SnsIcon/>
                    </div>
                    <div style={{ height: "150%", width: "100%", backgroundColor: "#89A0F8", position: "absolute" }}>
                        <p style={{ fontSize: "40px" }}>🐙</p>
                        <p style={{ fontSize: "40px" }}>🐙</p>
                        <p style={{ fontSize: "40px" }}>🐙</p>
                        <p style={{ fontSize: "40px" }}>🐙</p>
                        <p style={{ fontSize: "40px" }}>🐙</p>
                        <p style={{ fontSize: "40px" }}>🐙</p>
                    </div>
                </div>
            </motion.div >
        </>

    );
};
export default MyName;
