import * as React from 'react';
import { Heading, Paragraph, Button } from 'grommet';
import { AppLayout, SEO } from '../components/app';
import CenterContent from '../components/layouts/CenterContent';

const NotesPage = () => (
  <AppLayout>
    <CenterContent>
      <SEO title="Notes" />
      <Heading>Hi people</Heading>
      <Button label="Do Something" primary />
      <Paragraph>Welcome to your new Gatsby site.</Paragraph>
      <Paragraph>Now go build something great.</Paragraph>
    </CenterContent>
  </AppLayout>
);

export default NotesPage;
