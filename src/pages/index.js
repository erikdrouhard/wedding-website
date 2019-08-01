import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>Becca Fisher & Erik Drouhard</h1>
    <p>Oakholm Farm</p>
    <p>08/08/2020</p>
    <p>Southbridge AO</p>
    <Link to="page-2">Go to page 2 &rarr;</Link>
  </div>
)

export default IndexPage
