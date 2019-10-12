import React from "react"
import Header from "../components/header"
import { InnerLayout } from "../components/layout"
import SEO from "../components/seo"

export default function Rsvp() {
  return (
    <InnerLayout>
      <SEO title="Fisher Drouhard Wedding RSVP" />
      <h1>RSVP</h1>
      <iframe
        height="836"
        title="Embedded Wufoo Form"
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
        src="https://erikdrouhardwedding.wufoo.com/embed/zmwiu771skus0b/"
      >
        <a href="https://erikdrouhardwedding.wufoo.com/forms/zmwiu771skus0b/">
          Fill out my Wufoo form!
        </a>
      </iframe>
    </InnerLayout>
  )
}
