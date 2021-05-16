import React from "react"
import Hero from "../components/Hero"
import OurStory from "../components/OurStory"
import WeddingParty from "../components/WeddingParty"
import Lodging from "../components/Lodging"
import GlobalStyles from "../components/GlobalStyles"
import styled from "styled-components"

const PageWrap = styled.div`
  max-width: 1366px;
  height: 100%;
  margin: 0 auto;
`

const ContentWrap = styled.div`
  margin: 0 auto;
  background: #e0e0e0;
  padding: 20px;
  & > * + * {
    margin-top: 20px;
  }
  @media (min-width: 720px) {
    max-width: 1366px;
    padding: 30px;
    & > * + * {
      margin-top: 30px;
    }
  }
`

const IndexPage = () => (
  <PageWrap>
    <ContentWrap>
      <GlobalStyles />
      <Hero />
      <OurStory />
      <WeddingParty />
      <Lodging />
    </ContentWrap>
  </PageWrap>
)

export default IndexPage
