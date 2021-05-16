import React from "react"
import styled from "styled-components"

const CTAButton = styled.a`
  background: linear-gradient(180deg, #9b51e0 0%, #4a008f 100%);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  padding: 1rem 0;
  text-align: center;
  color: #fff;
  text-decoration: none;
  width: 100%;
  display: block;
  & :hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    background: rgba(145, 34, 255, 1);
  }
`

export default function Button({ children, ...props }) {
  return (
    <CTAButton target={props.target} href={props.href}>
      {children}
    </CTAButton>
  )
}
