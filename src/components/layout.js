import React from "react"
import "./layout.css"
import bgImage from "../images/homepage-bg.jpg"
import styled from "styled-components"
import Header from "./header"

const HomeOutterWrap = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${bgImage});
  background-size: cover;
`

const HomeInnerWrap = styled.div`
  padding: 30px 60px;
  text-align: center;
`

const OutterWrap = styled.div`
  padding: 30px 60px;
`

const InnerWrap = styled.div`
  width: 960px;
  padding: 0 20px;
  margin: 0 auto;
`

export function HomeLayout({ children }) {
  return (
    <HomeOutterWrap>
      <HomeInnerWrap>
        <Header />
        {children}
      </HomeInnerWrap>
    </HomeOutterWrap>
  )
}

export function InnerLayout({ children }) {
  return (
    <OutterWrap>
      <Header />
      <InnerWrap>{children}</InnerWrap>
    </OutterWrap>
  )
}
