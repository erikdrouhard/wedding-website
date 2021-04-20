import React from "react"
import styled from "styled-components"
import heroBgPhone from "../images/Becca_Erik_Phone.png"
import heroBgDesktop from "../images/Becca_Erik_Desktop.png"
import "@fontsource/abril-fatface"

function Hero() {
  return (
    <Wrapper>
      <Content>
        <Title>
          Becca <span style={{ color: "#ecbbff" }}>&amp;</span> Erik
        </Title>
        <Date>08.07.2021</Date>
        <Location>Oakholm Farm Estate, Brookfield, MA</Location>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  background-color: #333;
  background-image: url(${heroBgPhone});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  min-height: 90vh;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    border-radius: 0 0 1rem 1rem;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.75) 100%
    );
  }
  @media (min-width: 540px) {
    background-image: url(${heroBgDesktop});
    background-size: cover;
    background-position-x: 90%;
  }
`

const Content = styled.div`
  position: absolute;
  bottom: 91px;
  width: 100%;
`

const Title = styled.h1`
  font-size: 2.25rem;
  color: #f2f2f2;
`

const Date = styled.h2`
  font-size: 3rem;
  letter-spacing: 0.5rem;
  color: #f2f2f2;
`
const Location = styled.h3`
  font-size: 1.5rem;
  color: #ecbbff;
  max-width: 300px;
  margin: auto;
  line-height: 1.3;
  letter-spacing: 0.1rem;
`

export default Hero
