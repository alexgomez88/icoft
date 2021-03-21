import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const Hero = () => (
  <div className="flex bg-white h-48 min-h-screen pt-16">
    <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
          Capacita a tu <span className="text-accent">equipo</span>
        </h2>
        <p className="mt-6 text-sm text-gray-500 md:text-base">
          Somos profesionales multidisciplinarios, que crean
          una sinergia contundente para soluciones en el capital más importante
          de las organizaciones: <span className="text-secondary">El Talento Humano.</span> 
        </p>
        <div className="flex justify-center lg:justify-start mt-6">
          <a
            className="px-4 py-3 bg-primary text-white text-xs font-semibold rounded hover:bg-secondary"
            href="#"
          >
            Contactanos
          </a>
        </div>
      </div>
    </div>
    <div className="hidden lg:block lg:w-1/2 hero-image">
      <div className="h-full object-cover">
        <StaticImage className="h-full bg-gray" src={"../images/team.jpg"} alt="" />
      </div>
    </div>
  </div>
)
