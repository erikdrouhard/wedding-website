import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const HeaderWrap = styled.header`
  height: 50px;
  margin-bottom: 50px;
  display: flex;

  h1 {
    font-size: 18px;
  }
`

const Header = ({ children }) => (
  <HeaderWrap>
    <Link to="/">
      B<i>&amp;</i>E
    </Link>
    <nav>
      <ul
        css={css`
          display: flex;
          padding: 30px;

          & li {
            padding: 0 30px;
            list-style: none;
          }
        `}
      >
        <li>
          <Link to="lodging">Lodging</Link>
        </li>
        <li>
          <Link to="our-story">Our Story</Link>
        </li>
        <li>
          <Link to="wedding-party">Wedding Party</Link>
        </li>
        <li>
          <Link to="rsvp">RSVP</Link>
        </li>
      </ul>
    </nav>
  </HeaderWrap>
)

export default Header
