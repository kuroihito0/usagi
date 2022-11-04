import "../css/IconGrid.scss"
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const IconGrid = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
            <motion.div
                layout
                data-isOpen={isOpen}
                className="App1"
                transition={{
                    layout:{duration:1}
                }}
                onClick={() => setIsOpen(!isOpen)}
                >
            <motion.img src={props.svgIcon} className="TalkIcon_Size" whileHover={{ scale: 1.1 }} />
            </motion.div>
    )
}
export default IconGrid;
