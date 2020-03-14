import React from "react"
// import SEO from "./components/SEO"
import Header from "../components/header"
import { InnerLayout } from "../components/layout"
import SEO from "../components/seo"

export default function Lodging() {
  return (
    <InnerLayout>
      <SEO title="Lodging" />
      <h1>Lodging at the Southbridge Hotel</h1>
      <p>
        The wedding block will be under our name, "Fisher Drouhard". We have 20
        rooms saved, but they will open up more once we have filled that amount.
      </p>
      <p>
        <a
          target="_blank"
          href="http://bookings.ihotelier.com/bookings.jsp?groupID=2599165&hotelID=13066"
        >
          Book at Southbridge Hotel
        </a>
      </p>
    </InnerLayout>
  )
}
