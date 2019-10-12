import React from "react"
// import SEO from "./components/SEO"
import Header from "../components/header"
import { InnerLayout } from "../components/layout"
import SEO from "../components/seo"

export default function Lodging() {
  return (
    <InnerLayout>
      <SEO title="Lodging" />
      <h1>Lodging at the Southbrideg Hotel</h1>
      <p>
        The wedding block will be under our name, Fisher Drouhard. We have 20
        rooms saved, but they will open up more once we have filled that amount.
      </p>
      <p>
        <a target="_blank" href="https://www.southbridgehotel.com">
          Book at southbridgehotel.com
        </a>
      </p>
    </InnerLayout>
  )
}
