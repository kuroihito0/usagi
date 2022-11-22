import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import Background from './Components/background';
import './css/Home.scss';


import MyName from "./Components/Myprofile";
import FadeIn from "./Components/FadeIn";
import Works from "./Components/Works";

const Test = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => [setLoading(false)], 80000);
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='body_style'>
            <div className='SumahoBlock'>

                <Background />
                <motion.div layoutId='karimen' className='nakami' />
                <Works />
                <FadeIn />
                <div className='Sumaho_Position'>
                </div>
            </div>
        </div>

    );
};

export default Test;