import React from "react"
import Header from "../components/header"
import { InnerLayout } from "../components/layout"
import SEO from "../components/seo"

export default function OurStory() {
  return (
    <InnerLayout>
      <SEO title="Our Story" />
      <h1>Our Story</h1>
      <p>
        Becca and Erik found each other on OkCupid. Erik says “I came across
        this attractive woman who had ‘loves Worcester, MA’ in her profile and
        just had to learn more–I didn’t know the city had die hard fans!”.
      </p>
      <p>
        After a few messages back and forth, the two decided to meet for a game
        of mini golf—Becca won. Four years later at Peter Haven’s restaurant in
        Vermont, Erik proposed—she said yes. You’ll frequently find the two
        going on new adventures, hiking and trying to figure out what’s for
        dinner this week. They are very much looking forward to seeing everyone
        at the wedding!
      </p>
    </InnerLayout>
  )
}
