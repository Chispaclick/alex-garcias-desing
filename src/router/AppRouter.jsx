import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Main } from "../pages/main/Main";
import { AboutMe } from "../pages/about-me/AboutMe";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  );
};
