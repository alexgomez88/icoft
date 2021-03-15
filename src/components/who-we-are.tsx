import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const WhoWeAre = () => (
  <div className="flex flex-col lg:flex-row bg-primary text-white py-24 px-8 md:px-12">
    <div className="flex w-full lg:w-1/3">
      <div className="h-48 lg:h-full">
        <StaticImage className="h-full rounded-lg" src={"../images/show-logo.jpg"} alt="" />
      </div>
    </div>
    <div className="flex items-center text-center lg:text-left w-full lg:w-2/3">
      <div className="p-8 lg:p-0 lg:pl-8">
        <h2 className="text-3xl lg:text-6xl font-semibold">¿Quiénes Somos?</h2>
        <p className="mt-8">
          INSTITUTO DE CAPACITACIÓN ORGANIZACIONAL, FINANCIERA Y TECNOLÓGICA
          (ICOFT), trae un concepto de vanguardia al mercado venezolano con el
          fin de proveer servicios en áreas neurálgicas de las organizaciones.
        </p>
        <p className="mt-4">
          Nos enfocamos en ofrecer soluciones de capacitación y tecnología con
          los más altos estándares de calidad tanto en el ámbito nacional como
          internacional, brindando el mejor profesionalismo y ética de sus
          aliados principales.
        </p>
        <p className="mt-4">
          Contamos con un equipo de profesionales multidisciplinarios, que crean
          una sinergia contundente de soluciones para el capital más importante
          de las organizaciones: El Talento Humano.
        </p>
      </div>
    </div>
  </div>
)
