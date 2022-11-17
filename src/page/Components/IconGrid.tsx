import { AnimatePresence, motion } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/IconGrid.scss';

type Props = {
  children: ReactNode;
};
const IconGrid: FC<PropsWithChildren<{ id: string, url: string }>> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Link to={props.url} className="LinkStyle">
      {/*<motion.div className='Eat' initial={{ opacity: 1 }}
        animate={{ opacity: 0 }} transition={{ duration: 3 }}>*/}
        <motion.div
          layoutId={props.id}
          className='App1'
          whileHover={{ scale: 1.1 }}
        >
          <motion.div transition={{ duration: "3" }} className='TalkIcon_Size'>
            {props.children}
          </motion.div>
        </motion.div>
      {/*</motion.div>*/}
    </Link>
  );
};
export default IconGrid;
