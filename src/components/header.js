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
    <h1>
      B<i>&amp;</i>E
    </h1>
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
          <Link>Lodging</Link>
        </li>
        <li>
          <Link>Our Story</Link>
        </li>
        <li>
          <Link>Wedding Party</Link>
        </li>
        <li>
          <Link>RSVP</Link>
        </li>
      </ul>
    </nav>
  </HeaderWrap>
)

export default Header
