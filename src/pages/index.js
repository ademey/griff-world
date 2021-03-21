import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Heading, Paragraph } from 'grommet';
import { AppLayout, SEO } from '../components/app';
import CenterContent from '../components/layouts/CenterContent';

const IndexPage = () => (
  <AppLayout>
    <CenterContent>
      <SEO title="Home" />
      <Heading>Hi people</Heading>
      <Paragraph>Welcome to your new Gatsby site.</Paragraph>
      <Paragraph>Now go build something great.</Paragraph>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </CenterContent>
  </AppLayout>
);

export default IndexPage;
