import React from 'react';
import styled from 'styled-components';
// import data
import { LinkData } from '../data/Link';
// import assets
import Yuta07 from '../assets/Yuta07.png';

const Bio = () => {
  const renderExternalLink = LinkData.map((link, index) => {
    return (
      <YutazonExternalLink href={link.link} key={index}>
        <YutazonExternalLinkImage src={link.img} alt={link.name} />
      </YutazonExternalLink>
    );
  });

  return (
    <CoreBioWrapper>
      <BioAuthrContainer>
        <BioImage src={Yuta07} alt="yutazon" />
        <BioAuthor>Yutazon</BioAuthor>
      </BioAuthrContainer>
      <BioDescription>
        Web Developer 🎉
        自称フロントエンドエンジニア。SaaSの開発をしたり、Webサービスを作成したりしているよ。地球上の幸福度を高めていきたい。
      </BioDescription>
      <BioLinkContents>{renderExternalLink}</BioLinkContents>
    </CoreBioWrapper>
  );
};

// Bio style
const CoreBioWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 340px;
  height: 270px;
  margin: 0 0 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 4px;
  background-color: #f4fafa;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 559px) {
    width: 100%;
  }
`;

const BioAuthrContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto 0 0;
`;

const BioImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 1rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #e4e3e3;
  object-fit: cover;
`;

const BioAuthor = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const BioDescription = styled.p`
  margin: 1rem 0 0;
  font-size: 0.9rem;
`;

const BioLinkContents = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 1rem auto 0 1rem;
`;

const YutazonExternalLink = styled.a`
  display: inline-flex;
  margin-right: 1.5rem;
`;

const YutazonExternalLinkImage = styled.img`
  width: 24px;
  height: 24px;
`;

export default Bio;
