import {
  GatsbyImage,
  generateImageData,
  getImage,
  getImageData,
  IGatsbyImageData,
} from "gatsby-plugin-image"
import React from "react"

export const CardClient = (props: CardClientProps) => {
  const { name, logo, description } = props
  const image = getImage(logo)

  return (
    <div className="flex">
      <div className="flex-none w-full h-36 text-center">
        <GatsbyImage
          image={image}
          alt=""
          className="w-full h-full"
          imgStyle={{objectFit: "scale-down"}}
        />
      </div>
      <div className="flex-auto p-6"></div>
    </div>
  )
}

export interface CardClientProps {
  logo: IGatsbyImageData
  name: string
  description: string
}
