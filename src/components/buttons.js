import React from "react"
import styled, { css } from "styled-components"

const CTAButton = styled.button`
  border: 0;
  background: rgba(145, 34, 255, 0.7);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 8px 30px;
  color: #fff;
  & :hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    background: rgba(145, 34, 255, 1);
  }
`

export default function Button({ children }) {
  return <CTAButton>{children}</CTAButton>
}
