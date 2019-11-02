import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import _ from 'lodash';
// import components
import Category from '../components/Category';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
// import styled
import * as Post from '../styles/PostIndex';
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

  const renderIndexPagePost = edges.map(({ node }, index) => (
    <Post.BlogPostCard key={node.id} width={index === 0 ? 100 : 50}>
      <Post.BlogPostContentsBox index={index}>
        <Post.ImgLink to={node.fields.slug} index={index}>
          <Img
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            alt={node.frontmatter.title}
            className={index === 0 ? 'customMainImg' : 'customImg'}
          />
        </Post.ImgLink>
        <Post.BlogPostContents index={index}>
          <Post.BlogPostContentsLink to={node.fields.slug}>
            <Post.BlogPostHero index={index}>{node.frontmatter.title}</Post.BlogPostHero>
            <Post.BlogPostDescription>{node.frontmatter.description}</Post.BlogPostDescription>
          </Post.BlogPostContentsLink>
          <Post.BlogPostBottom>
            {renderCategory(node.frontmatter.categories)}
            <Post.BlogPostDate index={index}>{node.frontmatter.date}</Post.BlogPostDate>
          </Post.BlogPostBottom>
        </Post.BlogPostContents>
      </Post.BlogPostContentsBox>
    </Post.BlogPostCard>
  ));

  const path = location.pathname.split('/')[2];
  const blogTitle = _.upperFirst(path);

  return (
    <Layout>
      <Seo title={blogTitle} />
      <Category />
      <Post.IndexContainer>
        <Post.BlogPostsContainer>{renderIndexPagePost}</Post.BlogPostsContainer>
      </Post.IndexContainer>
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
