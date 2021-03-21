import React from 'react';
import { Box, Button, Grid } from 'grommet';

const ButtonGuide = () => (
  <Box pad={{ vertical: 'large' }} gap="large">
    <Grid columns="small" gap="small">
      <Button label="Default Button" />
      {['small', 'medium', 'large'].map((item) => (
        <Button label={item} key={item} size={item} />
      ))}
    </Grid>
    <Grid columns="small" gap="small">
      <Button label="Primary Button" primary />
      {['small', 'medium', 'large'].map((item) => (
        <Button label={item} key={item} size={item} primary />
      ))}
    </Grid>
    <Grid columns="small" gap="small">
      <Button label="Secondary Button" secondary />
      {['small', 'medium', 'large'].map((item) => (
        <Button label={item} key={item} size={item} secondary />
      ))}
    </Grid>
    <Grid columns="small" gap="small">
      <Button label="Plain Button" plain />
      {['small', 'medium', 'large'].map((item) => (
        <Button label={item} key={item} size={item} plain />
      ))}
    </Grid>
  </Box>
);

export default ButtonGuide;
