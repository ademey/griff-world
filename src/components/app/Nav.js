import React from 'react';
import { Menu } from 'grommet';

const Nav = () => {
  return (
    <Menu
      label="Menu"
      dropAlign={{ top: 'bottom', right: 'right' }}
      items={[
        { label: 'Home', href: '/' },
        { label: 'Style Guide', href: '/style-guide' },
        { label: 'Notes', href: '/notes' },
      ]}
    />
  );
};

export default Nav;
