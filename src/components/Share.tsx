import React from 'react';
import styled from 'styled-components';
// import assets
import TwitterImg from '../assets/shares/twitter.svg';

type ShareProps = {
  title: string;
  url: string;
};

const Share = ({ title, url }: ShareProps) => {
  const siteUrl = `https://Pigmon.io${url}`;
  const twitterUrl: string = `https://twitter.com/intent/tweet?url=${siteUrl}&text=${title}&via=yutazon7`;

  return (
    <ShareContainer>
      <ShareText>SHARE</ShareText>
      <ShareLinkItem href={twitterUrl} target="_blank" rel="noopener">
        <ShareTwitter src={TwitterImg} alt="twitter" />
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
`;

const ShareTwitter = styled.img`
  width: 32px;
  height: 32px;
`;

export default Share;
