/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Grommet,
  Grid,
  Box,
  Header,
  Main,
  Footer,
  Text,
  Button,
} from 'grommet';
import { HelpOption } from 'grommet-icons';
import { Helmet } from 'react-helmet';
import Nav from './Nav';
import theme from '../../styles/theme';
import '../../styles/global.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Grommet theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Box
        height="100vh"
        flex={{ basis: '100vh' }}
        style={{ height: '100vh', maxHeight: '100vh' }}
      >
        <Grid
          rows={['50px', 'flex', '50px']}
          columns={['full']}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          areas={[
            { name: 'header', start: [0, 0], end: [0, 0] },
            { name: 'body', start: [0, 1], end: [0, 1] },
            { name: 'footer', start: [0, 2], end: [0, 2] },
          ]}
        >
          <Header gridArea="header" background="brand" justify="between">
            <Box direction="row" align="center" pad="small">
              <Text>{data.site.siteMetadata.title || 'Default Title'}</Text>
            </Box>
            <Nav />
          </Header>

          <Main gridArea="body" overflow="scroll">
            {children}
          </Main>

          <Footer gridArea="footer" background="brand" justify="between">
            <Button
              lablel="Help"
              icon={<HelpOption />}
              tip="Is this helpful?"
            />
          </Footer>
        </Grid>
      </Box>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
