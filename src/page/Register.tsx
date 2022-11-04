import { motion } from 'framer-motion';
import { useState } from 'react';
const Register = () => {
  const [isClose, setIsClose] = useState(false);

  return (
    <div className='body_style'>
      <div className='SumahoBlock'>
        {/*スマホ本体配置*/}
        <div className='Sumaho_Position'>
          <motion.div layoutId='uwa' className='nakami' />
        </div>
      </div>
    </div>
  );
};

export default Register;
