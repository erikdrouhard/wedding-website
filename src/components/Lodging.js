import React from "react"
import styled from "styled-components"
import Button from "./buttons"

const LodgingWrap = styled.div`
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
`

export default function Lodging() {
  return (
    <LodgingWrap>
      <h2>Stay at the Southbridge Hotel</h2>
      <p>
        The wedding block will be under our name, "Fisher Drouhard". We have 20
        rooms saved, but they will open up more once we have filled that amount.
      </p>
      <p>
        <b>Please make sure to book before July 6, 2021</b>
      </p>
      <Button
        target="_blank"
        href="http://bookings.ihotelier.com/bookings.jsp?groupID=2599165&hotelID=13066"
      >
        Book at Southbridge Hotel
      </Button>
    </LodgingWrap>
  )
}
