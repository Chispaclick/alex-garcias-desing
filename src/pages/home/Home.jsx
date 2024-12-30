import { Header } from "../../components/header/Header";
import { IHaveWorked } from "../../components/i-have-worked/IHaveWorked";
import { MyBeginning } from "../../components/my-beginning/MyBeginning";
import { WhoAmI } from "../../components/who-am-i/WhoAmI";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <WhoAmI />
      <IHaveWorked />
      <MyBeginning />
    </div >
  );
};
