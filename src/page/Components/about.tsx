import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.scss';
import "../css/Profile.scss"
import '../css/About.scss'
import profile from "../pics/profile.png";



import SnsIcon from './SnsIcon';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            {/*本文 */}
            <div className='content' style={{ height: "100%", width: "95%", backgroundColor: "#323130", position: "absolute", borderRadius: '8%', marginLeft: '1%' }}>
                <p style={{ marginLeft: "1%", textAlign: 'left', fontSize: "20px", color: '#fffefe', lineHeight: '30px', fontWeight: '900' }} className="font">
                    今回制作した作品はスマートフォンのようなサイトです。<br />
                    特徴として<span style={{color:'#5bbde5'}}>SPA</span>=シングルページアプリケーション）単一のページで、Webアプリケーションを構成する設計構造。SPAが実装されたページでは、遷移を行わずにコンテンツが切り替わるため、ユーザー体験（UX）の向上に繋がります)を実装していることです。</p>
                <p style={{ fontSize: "40px" }}></p>
                <p style={{ fontSize: "40px" }}>🦑</p>


            </div>

        </>

    );
};
export default About;
