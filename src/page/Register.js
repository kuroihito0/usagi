import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React,{useState} from "react";
import "./css/Home.scss";


    const Register = () => {
        const [isClose,setIsClose] = useState(false);


    return (
            <div className="body_style">
                <div className="SumahoBlock">
                    <div className="Grid_Frame">
                        <div className="Grid_Line">
                            <Link to={"/"}>
                            <motion.div
                                layout
                                className="test"
                                />
                            </Link>
                        </div>
                    </div>
                    {/*スマホ本体配置*/}
                    <div className="Sumaho_Position" />
                </div>
            </div>
        );
    };

export default Register;