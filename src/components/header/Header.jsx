import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  HeroiconsSolidMoon from '../../components/icons/HeroiconsSolidMoon'
import "./Header.css";

export const Header = ({toggleLigthMode}) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Función para obtener la hora de Madrid
    const updateMadridTime = () => {
      const madridTime = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Europe/Madrid",
        hour12: true,
      });
      setTime(madridTime);
    };

    // Actualizar cada segundo
    const interval = setInterval(updateMadridTime, 1000);

    // Ejecutar la función inmediatamente para mostrar el tiempo sin esperar
    updateMadridTime();

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header_container">
      <div className="nav_container">
        <div className="nav_data-container">
          <p className="nav_data-text">alexgarcias.com</p>
          <p className="nav_data-text">Madrid, Spain</p>
          <p className="nav_data-text">{time}</p>
        </div>
        <div className="nav_main-container">
          <Link className="nav_data-text" to="main">Main</Link>
          <HeroiconsSolidMoon onClick={toggleLigthMode} className="moon_icon"/>
        </div>
      </div>
    </div>
  );
};
