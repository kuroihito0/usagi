import { motion, useScroll } from 'framer-motion';

const FadeIn = () => {
    return(
        <>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: 2,
                duration: 3
            }}>

            {/*フェードイン(white) */}
            <motion.div
                initial={{ opacity: 3 }}
                animate={{
                    scale: [0, 5],
                    opacity: 0,
                    borderRadius: ["50%", "50%"]
                }}
                transition={{
                    delay: 2,
                    duration: 5
                }}
                style={{ backgroundColor: "white", width: "50%", height: "30%", zIndex: "0", position: "absolute", marginTop: "40%", marginLeft: "25%", marginRight: "auto", borderRadius: "30%" }} />
        </motion.div>
    </>
    )

}
export default FadeIn;