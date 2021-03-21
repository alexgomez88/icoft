import { Link, navigate } from "gatsby"
import React, { useEffect, useState } from "react"

export const Success = () => {
  const [redirect, setRedirect] = useState(true)

  useEffect(() => {
    let interval = null
    console.log(redirect);
    if (redirect) {
      setRedirect(false)
      interval = setInterval(() => {
        navigate("/index")
        console.log(redirect);
      }, 1000)
    }
    return () => (interval ? clearInterval(interval) : null)
  }, [redirect])

  return (
    <section id="one" className="pt-24">
      <div className="py-24 px-8 lg:px-12">
        <header className="major">
          <h1 className="text-3xl md:text-6xl font-semibold mb-5">
            Gracias por tu mensaje.
          </h1>
        </header>
        <p>¡En breve nos pondremos en contacto contigo para tu solicitud!</p>
        <p>
          En unos momentos seras redigido a la pagina principal, si no, puedes
          regresar haciendo{" "}
          <Link to="/" className="text-primary">
            click acá
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
