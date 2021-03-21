import React from 'react';
import { Box, Button, Grid } from 'grommet';
import { Apps, Folder, HelpOption } from 'grommet-icons';

const ButtonGuide = () => (
  <Box pad={{ vertical: 'large' }} gap="large">
    <Box direction="row" gap="small" flex="shrink">
      <Button label="Default Button" />
      {['small', 'medium', 'large'].map((item) => (
        <Button label={item} key={item} size={item} />
      ))}
    </Box>
    <Box direction="row" gap="small" flex="shrink">
      <Button label="Primary Button" primary />
      {['small', 'medium', 'large'].map((item) => (
        <Button label={item} key={item} size={item} primary />
      ))}
    </Box>
    <Box direction="row" gap="small" flex="shrink">
      <Button label="Secondary Button" secondary />
      {['small', 'medium', 'large'].map((item) => (
        <Button label={item} key={item} size={item} secondary />
      ))}
    </Box>
    <Box direction="row" gap="small" flex="shrink">
      <Button label="Plain Button" plain />
      {['small', 'medium', 'large'].map((item) => (
        <Button label={item} key={item} size={item} plain />
      ))}
    </Box>

    <Box direction="row" gap="small" flex="shrink">
      <Button label="Apps " icon={<Apps />} />
      <Button label="Folders" icon={<Folder />} color="red" reverse />
      <Button lablel="Help" icon={<HelpOption />} tip="Is this helpful?" />
    </Box>
  </Box>
);

export default ButtonGuide;
