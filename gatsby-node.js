/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allCommandsYaml {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // Create pages for each markdown file.
  result.data.allCommandsYaml.edges.forEach(({ node }) => {
    const path = node.slug;
    createPage({
      path,
      component: require.resolve(`./src/templates/CommandsTemplate.js`),
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        slug: path,
      },
    });
  });
};
