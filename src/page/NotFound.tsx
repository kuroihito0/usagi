import React, { useEffect, useRef } from 'react';
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