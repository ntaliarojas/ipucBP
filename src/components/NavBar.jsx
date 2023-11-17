import React from "react";
import menu from "../assets/images/menu.png";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const NavBar = () => {
  return (
    <>
      <div className="navbar bg-gray-900">
        <div className="flex-1">
          <img src={logo} alt="logo" width="70px" />{" "}
        </div>
        <div>
          <ul className="menu menu-horizontal px-1">
            <ul
              className=" hidden 
                sm:flex text-[20px] sm:w-[438px]
                sm:place-content-around sm:text-[18px]
                sm:items-center
                text-white"
            >
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#familia">Familia BP </a>
              </li>
              <li>
                <a href="#eventos">Eventos</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
             
            </ul>
            <li className="list">
              <details>
                <summary className="w-10 h-4 cursor-pointer sm:hidden"></summary>
                <ul className="p-2 bg-base-100">
                <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#familia">Familia BP </a>
              </li>
              <li>
                <a href="#eventos">Eventos</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
