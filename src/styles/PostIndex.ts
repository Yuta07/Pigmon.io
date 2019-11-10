import styled from 'styled-components';
import { Link } from 'gatsby';

// Index Pages style
export const IndexContainer = styled.main`
  width: 96%;
  max-width: 620px;
  min-height: 85vh;
  margin: 20px auto 40px;
  padding: 0 2%;

  @media (min-width: 560px) and (max-width: 959px) {
    max-width: 620px;
  }

  @media (max-width: 559px) {
    max-width: 520px;
    margin: 0 auto;
  }
`;

export const BlogPostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 559px) {
    flex-direction: column;
  }
`;

export const BlogPostCard = styled.div`
  width: 100%;
  border-top: 1px solid rgba(119, 119, 119, 0.6);

  &:first-child {
    margin: 30px 0 20px;
    border: none;

    @media (max-width: 559px) {
      margin: 40px 0 20px;
    }
  }
`;

export const BlogPostTag = styled.span<{ color: string }>`
  color: #fefefe;
  background-color: ${props => props.color};
  border-radius: 8px;
  padding: 2px 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.9rem;
  text-decoration: none;

  @media (max-width: 559px) {
    font-size: 0.8rem;
  }
`;

// for newest post style
export const NewestPostLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 0.5rem;
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    transition: 0.2s;
  }

  @media (max-width: 559px) {
    flex-direction: row;
  }
`;

export const NewestImageWrapper = styled.div`
  @media (max-width: 559px) {
    width: 100px;
    height: 100%;
  }
`;

export const NewestContents = styled.div`
  padding: 0 0.5rem;

  @media (max-width: 559px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 120px);
    padding: 0 0 0 1.5rem;
  }
`;

export const NewestBlogPostHero = styled.h2`
  font-size: 1.4rem;
  font-weight: 550;
  line-height: 1.4;
  margin: 1rem 0 0.5rem;

  @media (max-width: 559px) {
    font-size: 1.1rem;
    margin: 0;
  }
`;

export const NewestBlogPostDescription = styled.p`
  color: #777777;
  margin: 0;
  font-size: 0.9rem;
  margin: 0.5rem 0;

  @media (max-width: 559px) {
    font-size: 0.8rem;
  }
`;

export const NewestBlogPostBottom = styled.div`
  display: flex;
  margin-top: 0.8rem;

  @media (max-width: 559px) {
    display: inline-block;
    margin-top: 0;
  }
`;

export const NewestBlogPostDate = styled.small`
  color: #828282;
  font-size: 0.9rem;
  margin: 0 0 0 auto;

  @media (max-width: 559px) {
    margin: 0.5rem 0 0 auto;
    display: block;
    font-size: 0.75rem;
  }
`;

// for second and later post style
export const LaterPostLink = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  text-decoration: none;

  &:hover {
    transition: 0.2s;
  }

  @media (max-width: 559px) {
    width: 100%;
  }
`;

export const LaterImageWrapper = styled.div`
  width: 120px;
  height: 100%;

  @media (max-width: 559px) {
    width: 100px;
  }
`;

export const LaterContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 120px);
  padding-left: 1.5rem;
`;

export const LaterBlogPostTop = styled.div``;

export const LaterBlogPostHero = styled.h2`
  font-size: 1.4rem;
  font-weight: 550;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 559px) {
    font-size: 1.1rem;
  }
`;

export const LaterBlogPostDescription = styled.p`
  color: #777777;
  margin: 0;
  font-size: 0.9rem;
  margin: 0.5rem 0;

  @media (max-width: 559px) {
    font-size: 0.8rem;
  }
`;

export const LaterBlogPostBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;

  @media (max-width: 559px) {
    display: inline-block;
    margin-top: 0;
  }
`;

export const LaterBlogPostDate = styled.small`
  color: #828282;
  font-size: 0.9rem;
  margin: 0 0 0 auto;

  @media (max-width: 559px) {
    margin: 0.5rem 0 0 auto;
    display: block;
    font-size: 0.75rem;
  }
`;
