import React from 'react';
import styled from 'styled-components';

type ShareProps = {
  title: string;
  slug: string;
};

export const Share = ({ title, slug }: ShareProps) => {
  const siteUrl = `https://Pigmon.io${slug}`;
  const twitterUrl: string = `https://twitter.com/intent/tweet?url=${siteUrl}&text=${title}&via=yutazon7`;

  return (
    <ShareContainer>
      <ShareText>SHARE</ShareText>
      <ShareLinkItem href={twitterUrl} target="_blank" rel="noopener">
        <ShareTwitter src="/shares/twitter.svg" alt="twitter" />
      </ShareLinkItem>
    </ShareContainer>
  );
};

// share link style
const ShareContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const ShareText = styled.p`
  font-size: 1.5rem;
  font-weight: 550;
  letter-spacing: 1.2px;
  margin: 0;
`;

const ShareLinkItem = styled.a`
  display: inline-block;
  margin-top: 4px;

  &:hover {
    background-color: transparent;
  }
`;

const ShareTwitter = styled.img`
  width: 32px;
  height: 32px;
`;
