import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Heading, Paragraph } from "grommet"

import Layout from "../components/Layout"
import CenterContent from "../components/layouts/CenterContent"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <CenterContent>
      <SEO title="Home" />
      <Heading>Hi people</Heading>
      <Paragraph>Welcome to your new Gatsby site.</Paragraph>
      <Paragraph>Now go build something great.</Paragraph>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </CenterContent>
  </Layout>
)

export default IndexPage
