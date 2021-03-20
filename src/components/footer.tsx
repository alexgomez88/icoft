import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const Footer = () => (
  <>
    <footer className="bg-neutral flex flex-col md:flex-row py-12 px-8 lg:px-12 gap-8">
      <div className="flex w-full md:w-1/2 lg:w-1/4">
        <StaticImage
          className="h-64 w-64 mx-auto lg:mx-0"
          imgStyle={{ objectFit: "contain" }}
          src={"../../images/logo.png"}
          alt="logo"
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/4 text-center lg:text-left justify-center">
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
      <div className="flex flex-col text-gray-800 text-center md:text-left w-full md:w-1/2 justify-center">
        <p className="py-2">
          <span className="font-bold">Telefonos:</span> +58 412 XXX XX XX
        </p>
        <p className="py-2">
          <span className="font-bold">Correo Electronico:</span>{" "}
          <a
            className="text-primary hover:text-accent"
            href="mailto:contacto@icoft.com.ve"
          >
            contacto@icoft.com.ve
          </a>
        </p>
        <p className="py-2">
          <span className="font-bold">RIF:</span>
        </p>
        <p className="py-2">
          <span className="font-bold">Dirección:</span> Distrito Capital,
          Caracas, Venezuela
        </p>
      </div>
    </footer>
    <div className="flex bg-gray-800 text-white py-4 px-8 md:px-12">
      <div className="w-1/2 text-left">
        Todos Los Derechos Reservados ©Icoft - 2021
      </div>
      <div className="w-1/2 text-right">
        Desarrollador por{" "}
        <a
          className="text-secondary hover:text-accent"
          href="https://alegomez.dev"
        >
          AlexGomez.Dev
        </a>
      </div>
    </div>
  </>
)
