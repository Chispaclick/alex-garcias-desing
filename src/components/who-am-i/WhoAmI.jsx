import RiGoogleFill from "../icons/RiGoogleFill";
import SolarArrowRightLinear from "../icons/SolarArrowRightLinear";
import "./WhoAmI.css";

export const WhoAmI = () => {
  return (
    <div className="alex_garcias-container">
      <div className="who_am_i-container">
        <img
          className="who_am_i-img"
          src="/mini_img_alex_garcias.jpg"
          alt="Alex_Garcias"
        />
        <p className="who_am_i-title">Hi, I'm Alex —</p>
        <p className="who_am_i-text">
          a designer fascinated by the social impact
          <br /> space. This is my creative greenhouse.
        </p>
      </div>
    </div>
  );
};
