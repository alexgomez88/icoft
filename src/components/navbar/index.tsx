import React, { useState } from "react"
import { Dropdown } from "./dropdown"
import { StaticImage } from "gatsby-plugin-image"

export const Navbar = () => {
  
  const [show, setShow] = useState(false);

  const showMenu = () => setShow(!show);

  const menuClass = show ? "flex flex-col md:flex-row md:block -mx-2" : "hidden flex flex-col md:flex-row md:block -mx-2";
  
  return (
    <nav className="bg-neutral shadow-lg fixed z-40 w-screen">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 md:text-3xl">
            <a href="#">
              <StaticImage
                className="h-14 w-14"
                src={"../../images/logo.png"}
                alt="logo"
              />
            </a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick = {showMenu}
              className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className="hidden"
                  d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                />
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={menuClass}>
          <a
            href="#"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            ¿Quiénes somos?
          </a>
          <a
            href="#"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Servicios
          </a>
          <a
            href="#"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Clientes
          </a>
          <a
            href="#"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Contactanos
          </a>
        </div>
      </div>
    </nav>
  )
}
