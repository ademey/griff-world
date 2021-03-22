import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Box, Text } from 'grommet';
import { AppLayout } from '../components/app';
import CenterContent from '../components/layouts/CenterContent';

const CommandsTemplate = ({ data }) => {
  const { title, categories, commands } = data.commandsYaml;
  return (
    <AppLayout>
      <CenterContent>
        <Heading>{title}</Heading>
        <Box direction="row" gap="medium" wrap>
          {categories.map((cat) => (
            <Box key={cat} pad="medium">
              <Box border={{ side: 'bottom' }}>
                <Text>{cat}</Text>
              </Box>
              <Box>
                {commands
                  .filter((item) => item.category === cat)
                  .map((item) => {
                    const mods = item.mods
                      .join('-')
                      .replace('w', '⎈')
                      .replace('a', '⌥')
                      .replace('c', '⌃')
                      .replace('s', '⇧');
                    return (
                      <Box
                        direction="row"
                        gap="medium"
                        justify="between"
                        align="end"
                      >
                        <Text size="small">{item.desc}</Text>
                        <Text>
                          {mods} + {item.key}
                        </Text>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          ))}
        </Box>
      </CenterContent>
    </AppLayout>
  );
};

export const query = graphql`
  query CommandPageQuery($slug: String!) {
    commandsYaml(slug: { eq: $slug }) {
      title
      id
      categories
      slug
      commands {
        desc
        mods
        key
        category
      }
    }
  }
`;

export default CommandsTemplate;
