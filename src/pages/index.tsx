import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
// import components
import Bio from '../components/Bio';
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
          <BlogPostDate>{node.frontmatter.date}</BlogPostDate>
          <BlogPostHero>{node.frontmatter.title}</BlogPostHero>
          <BlogPostDescription>{node.frontmatter.description}</BlogPostDescription>
        </BlogPostContents>
      </BlogPostLink>
    </BlogPostCard>
  ));

  return (
    <Layout>
      <IndexWrapper>
        <Bio />
        <IndexContainer>
          <BlogPostsContainer>{renderIndexPagePost}</BlogPostsContainer>
        </IndexContainer>
      </IndexWrapper>
    </Layout>
  );
};

// Index Pages style
const IndexWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const IndexContainer = styled.div`
  width: calc(100% - 240px);
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  order: 1;
`;

const BlogPostsContainer = styled.div`
  width: 100%;
`;

const BlogPostCard = styled.div``;

const BlogPostLink = styled(Link)`
  display: flex;
  padding: 1.25rem 0;
  color: #353333;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  text-decoration: none;

  &:hover {
    background-color: #efefef;
    transition: 0.2s;
  }
`;

const BlogPostContents = styled.div``;

const BlogPostDate = styled.small`
  color: #828282;
`;

const BlogPostHero = styled.h2`
  font-size: 1.8rem;
  font-weight: 750;
  color: #e68123;
  margin: 0;
`;

const BlogPostDescription = styled.p`
  margin: 0;
  margin-top: 0.5rem;
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
                fluid(maxWidth: 120, maxHeight: 120, quality: 100) {
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
