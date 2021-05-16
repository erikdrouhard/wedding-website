import React from "react"
import styled from "styled-components"
import Button from "./buttons"
import hotelImg from "../images/southbridge-hotel.jpg"

function Lodging() {
  return (
    <Wrapper>
      <ImageWrap>
        <Image src={hotelImg} alt="The Southbridge Hotel" />
      </ImageWrap>
      <Content>
        <h2>Stay at the Southbridge Hotel</h2>
        <p>
          The wedding block will be under our name, "Fisher Drouhard". We have
          20 rooms saved, but they will open up more once we have filled that
          amount.
        </p>
        <p>
          <b>Please make sure to book before July 6, 2021</b>
        </p>
        <Button
          target="_blank"
          href="http://bookings.ihotelier.com/bookings.jsp?groupID=2599165&hotelID=13066"
        >
          Book at Southbridge Hotel
        </Button>
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
  order: 1;
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
  order: 2;
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

export default Lodging
