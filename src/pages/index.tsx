import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import _ from 'lodash';
import { Layout } from '../components/Layout';
import { SEO } from '../components/atoms/SEO';
import * as Post from '../styles/PostIndex';
import { IndexPageProps } from '../types';
import { CategoryColorFilter } from '../utils/Utils';

const Index = (props: IndexPageProps) => {
  const { edges } = props.data.allMarkdownRemark;

  const renderCategory = (categories: string[]) => {
    let items = [];
    for (let i = 0; i < categories.length; i++) {
      let color = CategoryColorFilter(categories[i]);
      items.push(
        <Post.BlogPostTag color={color} key={categories[i]}>
          {categories[i]}
        </Post.BlogPostTag>
      );
    }
    return items;
  };

  const renderIndexPagePost = edges.map(({ node }, index) => (
    <Post.BlogPostCard key={node.id}>
      {index === 0 ? (
        <Post.NewestPostLink to={node.fields.slug}>
          <Post.NewestImageWrapper>
            <Img
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              alt={node.frontmatter.title}
              className="customMainImg"
            />
          </Post.NewestImageWrapper>
          <Post.NewestContents>
            <Post.NewestBlogPostHero>{node.frontmatter.title}</Post.NewestBlogPostHero>
            <Post.NewestBlogPostDescription>{node.frontmatter.excerpt}</Post.NewestBlogPostDescription>
            <Post.NewestBlogPostBottom>
              {renderCategory(node.frontmatter.categories)}
              <Post.NewestBlogPostDate>{node.frontmatter.date}</Post.NewestBlogPostDate>
            </Post.NewestBlogPostBottom>
          </Post.NewestContents>
        </Post.NewestPostLink>
      ) : (
        <Post.LaterPostLink to={node.fields.slug}>
          <Post.LaterImageWrapper>
            <Img
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              alt={node.frontmatter.title}
              className="customImg"
            />
          </Post.LaterImageWrapper>
          <Post.LaterContents>
            <Post.LaterBlogPostTop>
              <Post.LaterBlogPostHero>{node.frontmatter.title}</Post.LaterBlogPostHero>
              <Post.LaterBlogPostDescription>{node.frontmatter.excerpt}</Post.LaterBlogPostDescription>
            </Post.LaterBlogPostTop>
            <Post.LaterBlogPostBottom>
              {renderCategory(node.frontmatter.categories)}
              <Post.LaterBlogPostDate>{node.frontmatter.date}</Post.LaterBlogPostDate>
            </Post.LaterBlogPostBottom>
          </Post.LaterContents>
        </Post.LaterPostLink>
      )}
    </Post.BlogPostCard>
  ));

  return (
    <Layout>
      <SEO lang="ja" description="" meta={[]} />
      <Post.IndexContainer>
        <Post.BlogPostsContainer>{renderIndexPagePost}</Post.BlogPostsContainer>
      </Post.IndexContainer>
    </Layout>
  );
};

// Index Pages graphql
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 2000) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            excerpt
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

export default Index;
