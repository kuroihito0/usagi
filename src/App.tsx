import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Register from "./page/Register";
import Login from "./page/Login";
import NotFound from "./page/NotFound.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={"/*/"} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;