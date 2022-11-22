import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import NotFound from './page/Test';
import Register from './page/Register';
import Test from "./page/Test"

const App = () => {
  return (
    <AnimatePresence mode='wait'>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={'/Test/'} element={<Test />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default App;
