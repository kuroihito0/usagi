import TalkIcon from "./pics/Talk.png";
import KaniIcon from "./pics/CLUB.svg";
import MarmotIcon from "./pics/Marmot.svg";
import catIcon from "./pics/cat.svg";
import dogIcon from "./pics/dog.svg";
import "./css/Home.scss";
import IconGrid from "./Components/IconGrid";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { Suspense, useState, lazy, useEffect } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { FallbackProps,ErrorBoundary } from 'react-error-boundary'

const Home = () => {
    //Shift+tab= 範囲インデント削除
    //Shift+alt+↑↓ = コピー

    const RegisterPage = lazy(() => import('./Register'))

    return (
        <div className="body_style">
            <div className="SumahoBlock">
                
                <div className="Grid_Frame">
                    <div className="Grid_Line">
                        <Link to={"/Register"}>
                        <IconGrid svgIcon={catIcon} />
                        <IconGrid svgIcon={MarmotIcon} />
                        <IconGrid svgIcon={TalkIcon}  />
                        </Link>
                    </div>
                </div>
                <div className="Sumaho_Position" />
            </div>
        </div>
    );
};

export default Home;