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
      <BioImage src={Yuta07} alt="yutazon" />
      <BioDescriptionContainer>
        <BioDescription>
          Web Developer 🎉 主にフロントエンドをやってます。SaaSの開発をしたり、Webサービスを作成したりしています。
        </BioDescription>
        <BioDescriptionContents>{renderExternalLink}</BioDescriptionContents>
      </BioDescriptionContainer>
    </CoreBioWrapper>
  );
};

// Bio style
const CoreBioWrapper = styled.div`
  position: sticky;
  top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  order: 2;
  width: 240px;
  height: 240px;
  padding: 1rem 0.8rem;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
`;

const BioImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #e4e3e3;
  object-fit: cover;
`;

const BioDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const BioDescription = styled.p`
  margin: 0;
  font-size: 0.85rem;
`;

const BioDescriptionContents = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

const YutazonExternalLink = styled.a`
  display: inline-flex;
`;

const YutazonExternalLinkImage = styled.img`
  width: 24px;
  height: 24px;
`;

export default Bio;
