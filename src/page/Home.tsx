import { lazy, useState } from 'react';
import Cat from './Components/cat';
import IconGrid from './Components/IconGrid';
import Mormot from './Components/mormot';
import './css/Home.scss';
import './css/IconGrid.scss';

const Home = () => {
  //Shift+tab= 範囲インデント削除
  //Shift+alt+↑↓ = コピー
  const [isOpen, setIsOpen] = useState(false);

  const RegisterPage = lazy(() => import('./Register'));

  return (
    <div className='body_style'>
      <div className='SumahoBlock'>
        <IconGrid key='1'>
          <Cat />
        </IconGrid>
        <IconGrid key='2'>
          <Mormot />
        </IconGrid>
        <div className='Sumaho_Position' />
      </div>
    </div>
  );
};

export default Home;
