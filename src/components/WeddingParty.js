import React from "react"
import styled from "styled-components"
import brideParents from "../images/bride-parents.jpg"
import groomParents from "../images/groom-parents.jpg"

export default function WeddingParty() {
  return (
    <Wrapper>
      <Section>
        <Title>Our Parents</Title>
        <Parents>
          <ParentWrap>
            <ParentsImage
              src={brideParents}
              alt="Mother and Father of the Bridge"
            />
          </ParentWrap>
          <ParentWrap>
            <ParentsImage src={groomParents} alt="Mom and Dad of the Groom" />
          </ParentWrap>
        </Parents>
      </Section>
      <Section>
        <Title>The Wedding Party</Title>
        <p style={{ textAlign: "center" }}>Coming soon...</p>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #f2f2f2;
  padding: 2.25rem 1rem;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  @media (min-width: 720px) {
    padding: 50px;
  }
  @media (min-width: 960px) {
    padding: 75px 100px;
  }
`

const Section = styled.section`
  position: relative;
  border-top: 1px solid #8226d8;
  padding: 25px 0 40px;
  @media (min-width: 720px) {
    padding: 40px 0 55px;
  }
  @media (min-width: 960px) {
    padding: 50px 0 65px;
  }
`

const Title = styled.h2`
  position: absolute;
  top: -20px;
  padding-right: 5px;
  display: inline-block;
  background-color: #f2f2f2;
  @media (min-width: 720px) {
    top: -20px;
    padding: 0 10px;
    right: 0;
    left: 0;
    width: fit-content;
    margin: auto;
  }
  @media (min-width: 960px) {
    top: -32px;
    padding: 0 10px;
    right: 0;
    left: 0;
    width: fit-content;
    margin: auto;
  }
`

const Parents = styled.div`
  display: flex;
  justify-content: center;
`
const ParentWrap = styled.div`
  border-radius: 10px;
  margin: 0 5px;
  overflow: hidden;
  @media (min-width: 720px) {
    border-radius: 20px;
    margin: 0 15px;
  }
  @media (min-width: 960px) {
    border-radius: 30px;
    margin: 0 25px;
  }
`
const ParentsImage = styled.img``
