/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  Grommet,
  Box,
  Header,
  Heading,
  Main,
  Footer,
  Text,
  Button,
} from "grommet"
import { Grow } from "grommet-icons"
import { Helmet } from "react-helmet"
import CenterContent from "../components/layouts/CenterContent"
import theme from "../styles/theme"
import "../styles/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Grommet theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header background="brand" justify="center">
        <CenterContent align="center">
          <Box
            direction="row"
            pad={{ vertical: "medium" }}
            alignContent="start"
            align="center"
          >
            <Button icon={<Grow />} />
            <Text size="large">
              {data.site.siteMetadata.title || "Default Title"}
            </Text>
          </Box>
        </CenterContent>
      </Header>
      <Box>
        <Main>{children}</Main>
        <Footer>Footer Content</Footer>
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
