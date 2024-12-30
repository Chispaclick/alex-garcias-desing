import RiGoogleFill from "../icons/RiGoogleFill";
import SolarArrowRightLinear from "../icons/SolarArrowRightLinear";
import "./IHaveWorked.css";

export const IHaveWorked = () => {
  return (
    <div className="i_have_worked-container">
      <div className="first_worked-container">
        <RiGoogleFill className="google_icon" />
        <h2 className="worked-title">
          Right now, I design immersive news and election experiences at Google
        </h2>
        <p className="worked-text">
          2023 — News on Search (news queries), Civics on Search (global
          election queries). 2022 — 2023: Google News apps (iOS, Android, and
          news.google.com)
        </p>
        <button className="btn_worked">
          <SolarArrowRightLinear className="arrow_rigth-icon" />
        </button>
      </div>
      <div className="first_worked-container">
        <RiGoogleFill />
        <h2 className="worked-title">
          Previously, I was a Senior Product Designer at The Washington Post
        </h2>
        <p className="worked-text">
          Lead designer for the initial launch of The 7 (a daily news briefing),
          co-designer for 2020 United States election experiences. I also led
          design and research for a suite of consumer personalization and
          enterprise CMS experiences.
        </p>
        <button className="btn_worked">
          <SolarArrowRightLinear className="arrow_rigth-icon" />
        </button>
      </div>
    </div>
  );
};
