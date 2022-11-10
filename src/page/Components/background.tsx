import React, { useRef, useEffect } from 'react'
import video_mp4 from "../pics/kirby2_2.mp4";
import "../css/background.scss";
import ReactPlayer from "react-player"; 

const background = () =>{
    return (
        <ReactPlayer playing loop width="550px" height="1000px" style={{ borderRadius:"10%",}} controls={false} className="Screen" url={video_mp4}/>
    )
}
export default background;