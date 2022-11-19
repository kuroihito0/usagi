import React, { useRef, useEffect } from 'react'
import video_mp4 from "../pics/kirby2_2.mp4";
import "../css/background.scss";
import ReactPlayer from "react-player"; 
import useWindowSize from "./useWindowSize";

const background = () =>{
    const [width,height] = useWindowSize();
    var WindowWidth = "550px"
    var WindowHeight = "900px"
    console.log({width},{height});
    if(width<=480){
        WindowWidth = "100%"
        WindowHeight = "100%"
    }else if(width<=600){
        WindowWidth = "100%";
        WindowHeight = "100%";
    }
    return (

        <ReactPlayer playing muted loop width={WindowWidth} height={WindowHeight}  controls={false} className="Screen" url={video_mp4}/>
    )
}
export default background;