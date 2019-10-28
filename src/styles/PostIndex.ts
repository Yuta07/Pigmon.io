import styled from 'styled-components';
import { Link } from 'gatsby';

// Index Pages style
export const IndexContainer = styled.main`
  width: 96%;
  max-width: 720px;
  min-height: 85vh;
  margin: 20px auto 80px;

  @media (min-width: 560px) and (max-width: 959px) {
    max-width: 720px;
  }

  @media (max-width: 559px) {
    max-width: 520px;
  }
`;

export const BlogPostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BlogPostCard = styled.div<{ width: number }>`
  width: ${props => `${props.width}%`};
  margin-top: 60px;

  &:nth-child(2n - 1) {
    padding: 0 5% 0 0;
    padding: 0 0 0 5%;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
  }

  &:nth-child(2n) {
    padding: 0 5% 0 0;
  }

  &:first-child {
    padding: 0;
    margin: 40px 0 20px;
    border: none;
  }
`;

export const BlogPostContentsBox = styled.div<{ index: number }>`
  display: flex;
  flex-direction: ${props => (props.index === 0 ? 'row' : 'column')};
  justify-content: ${props => (props.index === 0 ? 'between' : '')};
  width: 100%;
  color: #353333;
  text-decoration: none;
`;

export const ImgLink = styled(Link)<{ index: number }>`
  width: ${props => (props.index === 0 ? '75%' : '100%')};
`;

export const BlogPostContents = styled.div<{ index: number }>`
  padding: ${props => (props.index === 0 ? '0.5rem 0 1rem 1.5rem' : null)};
  background-color: ${props => (props.index === 0 ? '#fefefe' : null)};
`;

export const BlogPostContentsLink = styled(Link)`
  text-decoration: none;
  width: 75%;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #353333;
    transition: 0.2s;
  }
`;

export const BlogPostHero = styled.h2<{ index: number }>`
  font-size: 1.6rem;
  font-weight: 550;
  line-height: 1.4;
  color: #e68123;
  margin: ${props => (props.index === 0 ? '0 0 0.5rem' : '1rem 0 0')};
`;

export const BlogPostDescription = styled.p`
  color: #777777;
  margin: 0;
  font-size: 0.9rem;
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
  font-size: 0.8rem;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;

export const BlogPostDate = styled.small`
  color: #828282;
  margin: 0 0 0 auto;
`;

export const BlogPostDateFirst = styled.p`
  color: #828282;
  font-size: 0.9rem;
  margin-top: 0.8rem;
`;
