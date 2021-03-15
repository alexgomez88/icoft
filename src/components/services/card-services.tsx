import React from "react"

export const CardService = (props: CardServiceProps) => {
  const {
    title = "Titulo",
    options = ["1", "2"],
    cta = { text: "Solicitar" },
    level = 1,
    count = 1,
  } = props

  let classCard = `w-full md:w-1/${count} md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto`
  if (level === 1) classCard += " md:my-6 "
  if (level === 2) classCard += " md:-mx-3 md:my-3 md:z-20 "
  if (level === 3) classCard += " md:-mx-3 md:mb-0 md:z-30  "
  classCard += "rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col"

  return (
    <div className={classCard}>
      <div className="w-full flex-grow">
        <h2 className="text-center font-bold uppercase mb-4">{title}</h2>
        <ul className="text-sm px-5 mb-8">
          {options.map((option, index) => (
            <li key={index} className="leading-tight">
              <i className="mdi mdi-check-bold text-lg"></i> {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <a className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors block text-center w-full">
          {cta.text}
        </a>
      </div>
    </div>
  )
}

export interface CardServiceProps {
  title?: string
  options?: Array<string>
  cta?: { text: string }
  level?: Number
  count?: Number
}
