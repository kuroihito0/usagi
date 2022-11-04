import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  const [isClose, setIsClose] = useState(false);

  return (
    <div className='body_style'>
      <div className='SumahoBlock'>
        {/*スマホ本体配置*/}
        <div className='Grid_Frame'>
          <motion.div layoutId='uwa' className='nakami'>
            <Link to={'/'}>
              <h1 style={{ marginTop: 0 }}>hello</h1>
            </Link>
          </motion.div>
        </div>
        <div className='Sumaho_Position' />
      </div>
    </div>
  );
};

export default Register;
