import { AnimatePresence, motion } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/IconGrid.scss';

type Props = {
  children: ReactNode;
};
const IconGrid: FC<PropsWithChildren<{id:string,url:string}>> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Link to={props.url} className="LinkStyle">
      <motion.div
        layoutId={props.id}
        className='App1'
        whileHover={{ scale: 1.1 }}
      >
        <motion.div className='TalkIcon_Size'>
          {props.children}
        </motion.div>
      </motion.div>
    </Link>
  );
};
export default IconGrid;
