import React from "react"
import { CardService, CardServiceProps } from "./card-services"

export const Services = () => {

  const services: Array<CardServiceProps> = [
    {
      title: "A distancía",
      options: [
        'Ofimática (Básico, Intermedio y Avanzado)',
        'Habilidades Gerenciales',
        'Idiomas',
        'Adminitración y Contabilidad para Gerentes',
        'Derechos Legales en el Ambito Laboral',
        '... Y Mucho Más'
      ],
      level: 2,
      cta: {
        text: 'Solicitar cotización'
      }
    },
    {
      title: "In Company",
      options: [
        'Ofimática (Básico, Intermedio y Avanzado)',
        'Linux para usuarios finales (Básico y Avanzado)',
        'Liderazgo Situacional',
        'Inteligencia Emocional',
        'Supervisión (Básica y Avanzada)',
        'Indicadores de gestión',
        'Seguridad Industrial',
        '... Y Mucho Más'
      ],
      level: 3,
      cta: {
        text: 'Solicitar cotización'
      }
    },
  
    {
      title: "Coaching Gerencial",
      options: [
        'Liderazgo Situacional',
        'Inteligencia Emocional',
        'Seguimiento de Actividades',
        'Asesoria Emocional y Funcional',
        'Tus metas son nuestra misión ...',
      ],
      level: 2,
      cta: {
        text: 'Contactar'
      }
    }
  ];

  return (
  <div className="min-w-screen min-h-screen bg-neutral py-24 px-8 md:px-12">
    <div className="text-center mx-auto">
      <h1 className="text-3xl md:text-6xl font-semibold mb-5">Servicios</h1>
      <h3 className="text-lg font-medium mb-10">
        Ofrecemos una amplia gama de ofertas de servicios de formación adaptados
        a su empresa.
      </h3>
    </div>
    <div className="w-full md:flex mb-5 justify-center">
      {
        services.map((service, index) => (<CardService key={index} {...service} count={services.length}/>))
      }
    </div>
    <div className="text-center max-w-xl mx-auto p-6 bg-yellow-400 rounded-md	shadow-lg">
      <p className="text-xs leading-tight">
        Motivado a la pandemía de COVID-19 las formaciones "In-Company" se
        encuentran limitadas a numero estricto de participantes por grupo y a
        una serie de medidas protocolos de Bioseguridad.
      </p>
    </div>
  </div>
)
}
