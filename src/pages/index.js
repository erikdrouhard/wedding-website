import React from "react"
// import { Link } from "gatsby"
import { HomeLayout } from "../components/layout"
import SEO from "../components/seo"
import styled, { css } from "styled-components"

const HeroTextBlock = styled.div`
  padding-top: 50px;
  color: #5c5c5c;

  p.date {
    font-size: 64px;
    font-weight: 700;
    padding-bottom: 20px;
  }

  p.location {
    font-size: 36px;
    line-height: 1.2;
  }
`

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <HeroTextBlock>
      <h1
        css={css`
          padding-bottom: 20px;
          font-size: 72px;
        `}
      >
        Becca{" "}
        <span
          css={css`
            color: rgba(145, 33, 255, 0.7);
          `}
        >
          &amp;
        </span>{" "}
        Erik
      </h1>
      <p className="date">08 . 07 . 2021</p>
      <p className="location">
        Oakholm Farm Estate,
        <br /> Brookfield, MA
      </p>
    </HeroTextBlock>
  </HomeLayout>
)

export default IndexPage
