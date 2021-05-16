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
  overflow: hidden;
  background-size: cover;
  background-position-x: 50%;
  height: 95vh;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);

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
  @media (min-width: 720px) {
    background-image: url(${heroBgDesktop});
    background-size: cover;
    background-position-x: 90%;
    max-height: 744px;
    &::before {
      content: "";
      background: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.75) 100%
      );
    }
  }
`

const Content = styled.div`
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  padding: 0 0 20px 0;
  @media (min-width: 720px) {
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding: 0 0 0 30px;
  }
  @media (min-width: 960px) {
    padding: 0 0 0 10%;
  }
`

const Title = styled.h1`
  font-size: 2.25rem;
  color: #f2f2f2;
  @media (min-width: 960px) {
    font-size: 3rem;
  }
`

const Date = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 0.5rem;
  color: #f2f2f2;
  @media (min-width: 540px) {
    font-size: 3rem;
  }
  @media (min-width: 960px) {
    font-size: 4rem;
    letter-spacing: 0.5rem;
  }
`
const Location = styled.h3`
  font-size: 1.5rem;
  color: #ecbbff;
  max-width: 300px;
  line-height: 1.3;
  letter-spacing: 0.1rem;
  @media (min-width: 960px) {
    font-size: 2.25rem;
    max-width: 480px;
  }
`

export default Hero
