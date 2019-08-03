import React from "react"
import "./layout.css"
import styled from "styled-components"
import Header from "./header"

const OutterWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const InnerWrap = styled.div`
  padding: 20px;
`

const Layout = ({ children }) => (
  <OutterWrap>
    <InnerWrap>
      <Header />
      {children}
    </InnerWrap>
  </OutterWrap>
)

export default Layout
