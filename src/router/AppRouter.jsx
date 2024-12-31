import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { MyMain } from "../pages/main/MyMain";
import { AboutMe } from "../pages/about-me/AboutMe";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/main" element={<MyMain />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  );
};
