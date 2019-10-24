import styled from 'styled-components';
import { Link } from 'gatsby';

// Index Pages style
export const BlogPostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BlogPostCard = styled.div`
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

export const BlogPostLink = styled.div`
  display: flex;
  flex-direction: column;
  color: #353333;
  text-decoration: none;
`;

export const BlogPostContents = styled.div``;

export const BlogPostContentsLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #353333;
    transition: 0.2s;
  }
`;

export const BlogPostHero = styled.h2`
  font-size: 1.8rem;
  font-weight: 750;
  line-height: 1.4;
  color: #e68123;
  margin: 1rem 0 0;
`;

export const BlogPostDescription = styled.p`
  color: #353333;
  margin: 0;
`;

export const BlogPostBottom = styled.div`
  display: flex;
  margin-top: 0.8rem;
  cursor: auto;
`;

export const BlogPostTag = styled(Link)<{ color: string }>`
  color: #fefefe;
  background-color: ${props => props.color};
  border-radius: 8px;
  padding: 2px 0.5rem;
  margin-right: 0.5rem;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
    transition: 0.2s;
  }
`;

export const BlogPostDate = styled.small`
  color: #828282;
  margin: 0 0 0 auto;
`;
