import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { CardClient, CardClientProps } from "./card-client"

export const Clients = () => {
  const data = useStaticQuery(graphql`
    query {
      marriot: file(relativePath: { eq: "marriot.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 200
            placeholder: BLURRED
            transformOptions: {
              grayscale: true
            }	
          )
        }
      }
      estarseguros: file(relativePath: { eq: "logo-estar-seguros.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 200
            placeholder: BLURRED
            transformOptions: {
              grayscale: true
            }	
          )
        }
      },
      sigis: file(relativePath: { eq: "sigis3.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 200
            placeholder: BLURRED
            transformOptions: {
              grayscale: true
              fit: CONTAIN
            }	
          )
        }
      }
    }
  `)
  const clients: Array<CardClientProps> = [
    {
      name: "Hotel Marriot JW",
      description: "",
      logo: data.marriot,
    },
    {
      name: "Sigis",
      description: "",
      logo: data.sigis,
    },
    {
      name: "StarSeguros",
      description: "",
      logo: data.estarseguros,
    },
  ]

  return (
    <div className="bg-white py-24 px-8 md:px-12">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl md:text-6xl font-semibold mb-5">Clientes</h1>
        <h3 className="text-lg font-medium mb-10">
          Hemos trabajado de la mano con varias empresas nacionales, nuestra
          trayectoria se encuentra en el corazon de cada uno de ellos.
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {clients.map((client, index) => (
          <CardClient key={index} {...client} />
        ))}
      </div>
    </div>
  )
}
