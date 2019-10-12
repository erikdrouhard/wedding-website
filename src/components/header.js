import React from "react"
import { Link } from "gatsby"
import Button from "./buttons"
import styled, { css } from "styled-components"

const HeaderWrap = styled.header`
  height: 50px;
  margin-bottom: 120px;
  width: 100%;
  display: flex;
`
const Logo = styled.h1`
  font-size: 36px;
  text-decoration: none;
  a {
    color: #5c5c5c;
    text-decoration: none;
  }
  .glint {
    color: rgba(145, 33, 255, 0.7);
  }
  &:hover {
    text-decoration: none;
    .glint {
      color: #5c5c5c;
    }
  }
`

const Header = ({ children }) => (
  <HeaderWrap>
    <Logo>
      <Link to="/">
        B<span className="glint">&amp;</span>E
      </Link>
    </Logo>
    <nav
      css={css`
        display: flex;
        font-size: 24px;
        font-weight: bold;
        width: 100%;
      `}
    >
      <ul
        css={css`
          display: flex;
          padding-top: 8px;

          & li {
            padding: 0 30px;
            list-style: none;
          }
          & li.end {
            margin-left: auto;
          }
          a {
            color: #333333;
            text-decoration: none;
          }
          a:hover {
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
      </ul>
      <Link
        to="rsvp"
        css={css`
          align-content: flex-end;
          margin-left: auto;
        `}
      >
        <Button>RSVP</Button>
      </Link>
    </nav>
  </HeaderWrap>
)

export default Header
