import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import _ from 'lodash';
import styled from 'styled-components';
// import components
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Share from '../components/Share';
// import style
import { BlogContents } from '../styles/BlogContents';
import { BlogHighlights } from '../styles/BlogHighlights';
import { BlogImageContents } from '../styles/BlogImageContents';
import * as Post from '../styles/PostIndex';
// import type
import { BlogPostProps } from '../types/type';
// import utils
import { CategoryColorFilter } from '../utils/Utils';

const BlogPost = (props: BlogPostProps) => {
  const post = props.data.markdownRemark;

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

  return (
    <Layout>
      <BlogStyleWrapper>
        <BlogStyleHero>
          <Img
            fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            alt={post.frontmatter.title}
            className="blogImg"
          />
          <BlogTitle>{post.frontmatter.title}</BlogTitle>
          <BlogDescription>{post.frontmatter.excerpt}</BlogDescription>
          <BlogHeroBottom>
            <BlogHeroTagContainer>{renderCategory(post.frontmatter.categories)}</BlogHeroTagContainer>
            <BlogPostDate>{post.frontmatter.date}</BlogPostDate>
          </BlogHeroBottom>
        </BlogStyleHero>
        <BlogContentsContainer dangerouslySetInnerHTML={{ __html: post.html }} />
        <Share slug={props.pageContext.slug} title={post.frontmatter.title} />
        <AuthorBioWrapper>
          <Bio />
        </AuthorBioWrapper>
      </BlogStyleWrapper>
    </Layout>
  );
};

// BlogPost template style
const BlogContentsContainer = styled.div`
  ${BlogContents};
  ${BlogHighlights};
  ${BlogImageContents};
`;

const BlogStyleWrapper = styled.div`
  width: 96%;
  max-width: 620px;
  min-height: 85vh;
  margin: 20px auto 60px;
  padding: 0 2%;

  @media (min-width: 560px) and (max-width: 959px) {
    max-width: 620px;
  }

  @media (max-width: 559px) {
    max-width: 520px;
    margin-bottom: 60px;
  }
`;

const BlogStyleHero = styled.div`
  margin-top: 1.5rem;
`;

const BlogTitle = styled.h2`
  margin: 0;
  margin-top: 1.5rem;
  font-size: 1.6rem;
  font-weight: 550;
`;

const BlogDescription = styled.p`
  margin: 0.7rem 0;
  color: rgba(0, 0, 0, 0.6);
`;

const BlogHeroBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlogHeroTagContainer = styled.div``;

const BlogPostDate = styled.span`
  display: block;
  color: rgba(0, 0, 0, 0.5);
`;

const AuthorBioWrapper = styled.div`
  margin-top: 2rem;
  padding-top: 3.5rem;
  border-top: 2px dashed rgba(0, 0, 0, 0.2);
`;

// graphql settings
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        excerpt
        date(formatString: "DD MMMM, YYYY")
        categories
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 540, maxHeight: 240, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default BlogPost;
