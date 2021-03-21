import ReCAPTCHA from "react-google-recaptcha";
import React from "react"

export const Contact = () => (
  <div className="bg-primary text-white flex flex-col md:flex-row py-12 px-8 lg:px-12 gap-6">
    <form
      className="flex flex-col w-full md:w-1/2 mx-auto"
      name="ContactForm"
      action="/success"
      method="POST" data-netlify-recaptcha="true" data-netlify="true"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contactanos</h2>
      <input type="hidden" name="form-name" value="ContactForm"/>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          required
          className="w-full px-3 py-2 placeholder-gray-300 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm">
          Correo Electronico
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@company.com"
          required
          className="w-full px-3 py-2 placeholder-gray-300 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="text-sm">
          Telefono
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="+58 (555) 1234-567"
          required
          className="w-full px-3 py-2 placeholder-gray-300 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm">
          Su mensaje:{" "}
        </label>

        <textarea
          rows={5}
          name="message"
          id="message"
          placeholder="Your Message"
          className="w-full px-3 py-2 placeholder-gray-300 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          required
        ></textarea>
      </div>
      <div className="mb-6">
        <ReCAPTCHA sitekey="6LdcFIkaAAAAAA1IeGIC_UVZb2Av1-q0C4b6fkDO"/>
      </div>
      <div className="mb-6">
        <button
          type="submit"
          className="w-full px-3 py-4 text-white font-bold bg-accent rounded-md focus:bg-neutral focus:outline-none"
        >
          Enviar
        </button>
      </div>
      <p className="text-base text-center text-gray-400" id="result"></p>
    </form>
  </div>
)
