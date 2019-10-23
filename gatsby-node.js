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
  const { createPage } = actions;

  // create blog with tamplate
  const blogPost = path.resolve(`./src/templates/BlogPost.tsx`);
  const categoryPost = path.resolve('./src/templates/CategoryPost.tsx');
  const result = await graphql(`
    query {
      postsRemark: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 2000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
      },
    });
  });

  // make tag groups
  const tags = result.data.tagsGroup.group;

  console.log(tags);

  tags.forEach(tag => {
    createPage({
      path: `/category/${tag.fieldValue}`,
      component: categoryPost,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
