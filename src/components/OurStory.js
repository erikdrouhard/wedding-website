import React from "react"
import styled from "styled-components"
import imgSrc from "../images/about-us.jpg"

function OurStory() {
  return (
    <Wrapper>
      <ImageWrap>
        <Image src={imgSrc} alt="About Us" />
      </ImageWrap>
      <Content>
        <Title>Our Story</Title>
        <Text>Becca and Erik found each other on OkCupid.</Text>
        <Text>
          Erik says:{" "}
          <i>
            “I came across this attractive woman who had ‘loves Worcester, MA’
            in her profile and just had to learn more&mdash;I didn’t know the
            city had die hard fans!”
          </i>
          .
        </Text>
        <Text>
          After a few messages back and forth, the two decided to meet for a
          game of mini golf&mdash;Becca won. Four years later at Peter Haven’s
          restaurant in Vermont, Erik proposed&mdash;she said yes. You’ll
          frequently find the two going on new adventures, hiking and trying to
          figure out what’s for dinner this week. They are very much looking
          forward to seeing everyone at the wedding!
        </Text>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  @media (min-width: 720px) {
    margin: 0 -30px;
    display: flex;
    padding: 0;
    border-radius: 0;
    box-shadow: none;
  }
`

const Content = styled.div`
  @media (min-width: 720px) {
    flex: 1;
    padding: 20px;
  }
  @media (min-width: 960px) {
    padding: 50px 65px;
  }
`

const ImageWrap = styled.div`
  display: none;
  @media (min-width: 720px) {
    display: block;
    flex: 1;
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.h2``

const Text = styled.p`
  @media (min-width: 960px) {
    line-height: 1.6;
  }
`

export default OurStory
