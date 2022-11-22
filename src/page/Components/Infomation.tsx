import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.scss';
import "../css/Profile.scss"
import profile from "../pics/profile.png";



import SnsIcon from './SnsIcon';

const Info = () => {
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
                        <p className='header'>ヒカル ニシダ<br /></p>
                        <SnsIcon/>

                    <div className='content' style={{ height: "80%", width: "95%", backgroundColor: "#fce9ed", position: "absolute" ,marginTop:'15%',border:'solid 5px #807e8a'}}>
                        <p style={{ marginLeft:"7%",textAlign:'left',fontSize: "20px" ,color:'black',lineHeight:'30px',fontWeight:'900'}} className="font">六月頃に風邪を引いたプロボクサー、夏風邪天心<br /></p>
                        <p style={{ marginLeft:"10%",textAlign:'left',fontSize: "20px" ,color:'black',lineHeight:'30px',fontWeight:'900'}} className="font"></p>
                        <p style={{ fontSize: "40px" }}>🍆</p>
                        <p style={{ fontSize: "40px" }}>🦑</p>


                    </div>
                </div>
            </motion.div >
        </>

    );
};
export default Info;