import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.scss';
import "../css/Profile.scss"
import profile from "../pics/profile.png";



const MyName = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    return (
        <>

            {/*本文 */}
            <motion.div initial={{ opacity: 0 }
            } animate={{ opacity: 1 }} transition={{ delay: 1, duration: 6 }} className="headerPosition" >
                <img src={profile} className="Profile" />
                <div style={{ backgroundColor: "#FFC5A3", width: "100%", height: "100%", zIndex: "1", position: "absolute", marginTop: "30%", textAlign: "center", overflow: "auto" }}>
                    <motion.div
                        className="progress-bar"
                        style={{ scaleX: scrollYProgress }}
                    />

                    <div style={{ fontSize: "40px", width: "50%", height: "auto", position: "absolute", marginTop: "90%", zIndex: "20", overflow: "auto" }}>🐡🐡</div>



                    <p className='header'>ヒカル ニシダ<br /></p>
                    <div style={{ height: "50%", width: "100%", backgroundColor: "#89A0F8", position: "absolute", marginTop: "100%" }}>
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
