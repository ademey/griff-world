import React, { useContext } from 'react';
import { Box, Text, ThemeContext, Grid } from 'grommet';

const Colors = () => {
  const theme = useContext(ThemeContext);
  const colorList = Object.entries(theme.global.colors).filter(
    (item) => typeof item[1] === 'string'
  );
  return (
    <Box>
      <Text>Colors Page</Text>
      <Grid columns="small" gap="small">
        {colorList.map(([key, val]) => (
          <Box key={key} border={{ size: 'small' }}>
            <Box direction="row" background="light-2">
              <Text size="small">{key}</Text>
            </Box>
            <Box background={val} pad="small">
              <Text>{val}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Colors;
