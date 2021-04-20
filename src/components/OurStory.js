import React from "react"
import styled, { css } from "styled-components"

const OurStoryWrap = styled.div`
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
`

export default function OurStory() {
  return (
    <OurStoryWrap>
      <h2>Our Story</h2>
      <p>Becca and Erik found each other on OkCupid.</p>
      <p>
        Erik says:{" "}
        <i>
          “I came across this attractive woman who had ‘loves Worcester, MA’ in
          her profile and just had to learn more&mdash;I didn’t know the city
          had die hard fans!”
        </i>
        .
      </p>
      <p>
        After a few messages back and forth, the two decided to meet for a game
        of mini golf&mdash;Becca won. Four years later at Peter Haven’s
        restaurant in Vermont, Erik proposed&mdash;she said yes. You’ll
        frequently find the two going on new adventures, hiking and trying to
        figure out what’s for dinner this week. They are very much looking
        forward to seeing everyone at the wedding!
      </p>
    </OurStoryWrap>
  )
}
