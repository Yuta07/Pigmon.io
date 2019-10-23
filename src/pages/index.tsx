import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
// import components
import Layout from '../components/Layout';
// import type
import { IndexPageProps } from '../types/type';

const Index = (props: IndexPageProps) => {
  const { edges } = props.data.allMarkdownRemark;

  console.log(edges);

  const renderIndexPagePost = edges.map(({ node }) => (
    <BlogPostCard key={node.id}>
      <BlogPostLink to={node.fields.slug}>
        <Img
          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          alt={node.frontmatter.title}
          className="customImg"
        />
        <BlogPostContents>
          <BlogPostHero>{node.frontmatter.title}</BlogPostHero>
          <BlogPostDescription>{node.frontmatter.description}</BlogPostDescription>
          <BlogPostDate>{node.frontmatter.date}</BlogPostDate>
        </BlogPostContents>
      </BlogPostLink>
    </BlogPostCard>
  ));

  return (
    <Layout>
      <BlogPostsContainer>{renderIndexPagePost}</BlogPostsContainer>
    </Layout>
  );
};

// Index Pages style
const BlogPostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BlogPostCard = styled.div`
  width: 50%;
  margin-top: 60px;

  &:nth-child(2n - 1) {
    padding: 0 5% 0 0;
  }

  &:nth-child(2n) {
    padding: 0 0 0 5%;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
  }
`;

const BlogPostLink = styled(Link)`
  display: flex;
  flex-direction: column;
  color: #353333;
  text-decoration: none;
`;

const BlogPostContents = styled.div``;

const BlogPostHero = styled.h2`
  font-size: 1.8rem;
  font-weight: 750;
  color: #e68123;
  margin: 1rem 0 0;

  &:hover {
    text-decoration: underline;
    transition: 0.2s;
  }
`;

const BlogPostDescription = styled.p`
  margin: 0;
`;

const BlogPostDate = styled.small`
  color: #828282;
`;

// Index Pages graphql
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            tags
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
