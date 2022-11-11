import { Link } from "react-router-dom";
import Cockkirby from "./pics/Cockkirby.gif";
import React, { useRef, useEffect } from 'react'
import video_mp4 from "./pics/Cockkirby.mp4"
const NotFound = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
        
        <>
            <div> おさるさんだ！🐵🐵</div>
            <React.StrictMode>
                <video controls muted ref={videoRef} >
                    <source src={video_mp4} type="video/mp4" />
                    <p>Your browser doesn't support HTML5 video.</p>
                </video>
            </React.StrictMode>

        </>
    );
};

export default NotFound;