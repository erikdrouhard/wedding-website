import React from "react"
import Hero from "../components/Hero"
import OurStory from "../components/OurStory"
import WeddingParty from "../components/WeddingParty"
import Lodging from "../components/Lodging"
import GlobalStyles from "../components/GlobalStyles"
import styled from "styled-components"

const IndexWrap = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`

const IndexPage = () => (
  <IndexWrap>
    <GlobalStyles />
    <Hero />
    <OurStory />
    <WeddingParty />
    <Lodging />
  </IndexWrap>
)

export default IndexPage
