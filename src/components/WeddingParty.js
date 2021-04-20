import React from "react"
import styled from "styled-components"

const WeddingPartyWrap = styled.div`
  background-color: #f2f2f2;
  font-family: "Cormorant", serif;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
`

export default function WeddingParty() {
  return (
    <WeddingPartyWrap>
      <h2>The Wedding Party</h2>
      <p>Coming soon...</p>
    </WeddingPartyWrap>
  )
}
