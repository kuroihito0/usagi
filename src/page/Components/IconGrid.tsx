import { motion } from 'framer-motion';
import { FC, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/IconGrid.scss';

type Props = {
  children: ReactNode;
  key: string;
};
const IconGrid: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Link to={'/register'}>
      <motion.div
        key={props.key}
        layoutId='uwa'
        data-isopen={isOpen}
        className='App1'
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div className='TalkIcon_Size' whileHover={{ scale: 1.1 }}>
          {props.children}
        </motion.div>
      </motion.div>
    </Link>
  );
};
export default IconGrid;
