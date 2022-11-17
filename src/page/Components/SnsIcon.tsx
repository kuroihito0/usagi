import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.scss';
import "../css/Profile.scss"
import Twitter from '../svg/twitter';
import Youtube from '../svg/Youtube';


const SnsIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div style={{ display: "flex" }}>
                <div style={{ position: 'absolute', backgroundColor: 'black', width: '85px', height: '80px', borderRadius: '30%', zIndex: '-1', marginLeft: '10%', marginTop: '4%' ,pointerEvents:'auto'}} />
                <motion.div className='iconBackground' whileHover={{ x: 10, y: 10 }}>
                    <Twitter />
                    <a href='https://twitter.com/hikakin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank" rel="noopener noreferrer" className='Link'/>
                </motion.div>

                <div style={{ position: 'absolute', backgroundColor: 'black', width: '85px', height: '80px', borderRadius: '30%', zIndex: '-1', marginLeft: '34.3%', marginTop: '4%',pointerEvents:'auto' }} />
                <motion.div className='iconBackground' style={{ marginLeft: '7%' }} whileHover={{ x: 10, y: 10 }}>
                    <Youtube />
                    <a href='https://www.youtube.com/@HikakinTV' target="_blank" rel="noopener noreferrer" className='Link'/>
                </motion.div>

                
            </div>
        </>

    );
};
export default SnsIcon;
