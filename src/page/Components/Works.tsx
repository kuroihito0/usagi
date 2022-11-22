import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.scss';
import "../css/Profile.scss"
import profile from "../pics/profile.png";
import Mili from "../pics/Mili.png";


import SnsIcon from './SnsIcon';

const Works = () => {
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
                <div className='liner' style={{ border:'4px solid ',backgroundColor: "#d3ecfb", width: "100%", height: "100%", zIndex: "1", position: "absolute", marginTop: "30%", textAlign: "center", overflow: "auto", msOverflowStyle: 'none',borderRadius:'0 0 50% 50%'}}>
                    <img src={Mili} style={{width:"80%",height:"auto",marginTop:"10%",border:"solid 4px"}}/>
                    <p style={{ marginLeft:"7%",textAlign:'left',fontSize: "18px" ,color:'black',lineHeight:'30px',fontWeight:'900'}} className="font">好きなアーティストのサイトを違うアーティスト再現したサイト<br /></p>

                </div>
            </motion.div >
        </>

    );
};
export default Works;