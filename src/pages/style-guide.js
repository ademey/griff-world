import * as React from 'react';
import { Tabs, Tab, Box } from 'grommet';
import { AppLayout, SEO } from '../components/app';
import CenterContent from '../components/layouts/CenterContent';
import { ColorGuide, TextGuide, ButtonGuide } from '../components/style-guide';

const StyleGuide = () => (
  <AppLayout>
    <CenterContent>
      <SEO title="Style Guide" />
      <Tabs>
        <Tab title="Colors">
          <ColorGuide />
        </Tab>
        <Tab title="Text">
          <TextGuide />
        </Tab>
        <Tab title="Buttons">
          <ButtonGuide />
        </Tab>
      </Tabs>
    </CenterContent>
  </AppLayout>
);

export default StyleGuide;
