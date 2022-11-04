import { AnimateSharedLayout } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import NotFound from './page/NotFound';
import Register from './page/Register';

const App = () => {
  return (
    <AnimateSharedLayout>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={'/*/'} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AnimateSharedLayout>
  );
};

export default App;
