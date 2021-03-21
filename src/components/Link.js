import React from 'react';
import PropTypes from 'prop-types';
import { Anchor } from 'grommet';
import { navigate } from 'gatsby';

/**
 * Wrapper for Gatsby link using Grommet Anchor component
 * @param {object} props - React props
 * @param {string} props.link - React Router link
 * @returns
 */
const Link = ({ to, ...rest }) => (
  <Anchor
    href={to}
    onClick={(ev) => {
      navigate(to);
      ev.preventDefault();
    }}
    {...rest}
  />
);

Link.propTypes = {
  to: PropTypes.string,
};

export default Link;
