import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./css/Home.scss";
const Login = () => {
    const [isClose, setIsClose] = useState(false);

    return (
        <div className='body_style'>
            <div className='SumahoBlock'>
                {/*スマホ本体配置*/}
                <div className='Sumaho_Position'>
                    <motion.div layoutId='menkyo' className='nakami' />
                    <div className='bunsyo'>こんいち</div>
                </div>
            </div>
        </div>
    );
};
export default Login;