import { useState } from "react";
import { Header } from "../../components/header/Header";
import { IHaveWorked } from "../../components/i-have-worked/IHaveWorked";
import { MyBeginning } from "../../components/my-beginning/MyBeginning";
import { WhoAmI } from "../../components/who-am-i/WhoAmI";
import { Interests } from "../../components/interests/Interests";
import { AllTheBest } from "../../components/all-the-best/AllTheBest";
import { Footer } from "../../components/footer/Footer";
import "./Home.css";

export const Home = () => {
  const [lightBackground, setLightBackground] = useState(false)

  const toggleLigthMode = () => {
    setLightBackground(!lightBackground);
  };
  return (
    <div className={`home_container ${lightBackground ? "light_mode" : "dark_mode"}`}>
      <Header changeBackground={toggleLigthMode}/>
      <WhoAmI />
      <IHaveWorked />
      <MyBeginning />
      <Interests />
      <AllTheBest />
      <Footer />
    </div >
  );
};
