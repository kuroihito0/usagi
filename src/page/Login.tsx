import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React, { useRef, useEffect } from 'react'
import video_mp4 from "./pics/Cockkirby.mp4"
import "./css/Home.scss";
const Login = () => {
    const [isClose, setIsClose] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
        <body>
        <div className='body_style'>
            <div className='SumahoBlock'>
                {/*スマホ本体配置*/}
                <div className='Sumaho_Position'>
                    <motion.div layoutId='menkyo' className='nakami' />
                    <div className='bunsyo'>こんいち</div>

                </div>
            </div>
        </div>
        </body>
    );
};
export default Login;