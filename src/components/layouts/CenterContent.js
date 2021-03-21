import React from 'react';
import { Box } from 'grommet';

const CenterContent = ({ children, ...rest }) => (
  <Box align="center">
    <Box width="large" pad={{ horizontal: 'medium' }} {...rest}>
      {children}
    </Box>
  </Box>
);

export default CenterContent;
