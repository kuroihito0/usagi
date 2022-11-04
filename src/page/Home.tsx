import { lazy, useState } from 'react';
import Cat from './Components/cat';
import IconGrid from './Components/IconGrid';
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
        <div className='Grid_Frame'>
          <div className='Grid_Line'>
            <IconGrid>
              <Cat />
            </IconGrid>
            <IconGrid>
              <Cat />
            </IconGrid>
            <IconGrid>
              <Cat />
            </IconGrid>
          </div>
        </div>
        <div className='Sumaho_Position' />
      </div>
    </div>
  );
};

export default Home;
