import * as React from "react"
import { Clients } from "../components/clients"
import { Hero } from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Services } from "../components/services"
import { WhoWeAre } from "../components/who-we-are"

const IndexPage = () => (
  <Layout>
    <SEO/>
    <Hero/>
    <WhoWeAre/>
    <Services />
    <Clients />    
  </Layout>
)

export default IndexPage