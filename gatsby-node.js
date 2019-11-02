const path = require(`path`);
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Markdownのみを記録する
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // createRedirect({
  //   fromPath: 'https://gatsby-starter-portfolio-nnn.netlify.com/*',
  //   toPath: 'https://gatsby-starter-portfolio.nakamu.life/:splat',
  //   isPermanent: true,
  //   force: true
  // })

  // create blog with tamplate
  const blogPost = path.resolve(`./src/templates/BlogPost.tsx`);
  const categoryIndex = path.resolve('./src/templates/CategoryIndex.tsx');
  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 2000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              categories
            }
          }
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.postsRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPost,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  // make tag groups
  const categories = result.data.categoriesGroup.group;

  categories.forEach(category => {
    createPage({
      path: `/category/${_.kebabCase(category.fieldValue)}/`,
      component: categoryIndex,
      context: {
        category: category.fieldValue,
      },
    });
  });
};
