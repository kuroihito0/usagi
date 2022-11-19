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
            <div style={{ display: "flex", justifyContent:'space-around'}}>

                <motion.div className='iconBackground' whileHover={{ x: 10, y: 10 }}>
                <a href='https://twitter.com/hikakin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank" rel="noopener noreferrer" className='Link'/>
                    <Twitter />
                </motion.div>

                
                <motion.div className='iconBackground' whileHover={{ x: 10, y: 10 }} style={{marginRight:'%'}}>
                    <a href='https://www.youtube.com/@HikakinTV' target="_blank" rel="noopener noreferrer" className='Link'/>
                    <Youtube />
                    
                </motion.div>
                <div style={{ position: 'absolute', backgroundColor: 'black', width: '85px', height: '80px', borderRadius: '30%', zIndex: '-1', marginRight: '69%', marginTop: '4%' ,pointerEvents:'auto'}} />
                <div className='iconBack' style={{ position: 'absolute', backgroundColor: 'black', width: '85px', height: '80px', borderRadius: '30%', zIndex: '-1', marginRight: '13%', marginTop: '4%',pointerEvents:'auto' }} />
                
            </div>
        </>

    );
};
export default SnsIcon;
