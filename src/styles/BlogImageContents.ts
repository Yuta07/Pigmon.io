import { css } from 'styled-components';

export const BlogImageContents = css`
  .gatsby-resp-image-wrapper {
    margin: 1rem 0;
    height: 240px;
    border: solid 1px #e5e8ea;
    box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    overflow: hidden;
  }
  .gatsby-resp-image-image {
    object-fit: cover;
  }
`;
