import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import _ from 'lodash';
// import components
import Layout from '../components/Layout';
// import styled
import * as Post from '../styles/Post';
// import type
import { IndexPageProps } from '../types/type';
// import utils
import { CategoryColorFilter } from '../utils/Utils';

const CategoryIndex = (props: IndexPageProps) => {
  const { edges } = props.data.allMarkdownRemark;

  const renderCategory = (categories: string[]) => {
    let items = [];
    for (let i = 0; i < categories.length; i++) {
      let color = CategoryColorFilter(categories[i]);
      items.push(
        <Post.BlogPostTag color={color} key={categories[i]} to={`/category/${_.lowerCase(categories[i])}`}>
          {categories[i]}
        </Post.BlogPostTag>
      );
    }
    return items;
  };

  const renderIndexPagePost = edges.map(({ node }) => (
    <Post.BlogPostCard key={node.id}>
      <Post.BlogPostLink>
        <Img
          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          alt={node.frontmatter.title}
          className="customImg"
        />
        <Post.BlogPostContents>
          <Post.BlogPostHero>{node.frontmatter.title}</Post.BlogPostHero>
          <Post.BlogPostDescription>{node.frontmatter.description}</Post.BlogPostDescription>
          <Post.BlogPostBottom>
            {renderCategory(node.frontmatter.categories)}
            <Post.BlogPostDate>{node.frontmatter.date}</Post.BlogPostDate>
          </Post.BlogPostBottom>
        </Post.BlogPostContents>
      </Post.BlogPostLink>
    </Post.BlogPostCard>
  ));

  return (
    <Layout>
      <Post.BlogPostsContainer>{renderIndexPagePost}</Post.BlogPostsContainer>
    </Layout>
  );
};

// Category Index Pages graphql
export const query = graphql`
  query CategoryIndexQuery($category: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            categories
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 240, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default CategoryIndex;
