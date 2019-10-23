import React from 'react';
import styled from 'styled-components';
// import data
import { LinkData } from '../data/Link';

const Footer = () => {
  const renderFooterLink = LinkData.map((link, index) => {
    return (
      <FooterLink href={link.link} key={index}>
        <FooterLinkImage src={link.img} alt={link.name} />
      </FooterLink>
    );
  });

  return (
    <CoreFooterWrapper>
      <FooterWrapper>
        <FooterLinkContainer>{renderFooterLink}</FooterLinkContainer>
        <FooterCopyRight>© {new Date().getFullYear()}, Yutazon - All rights reserved.</FooterCopyRight>
      </FooterWrapper>
    </CoreFooterWrapper>
  );
};

const CoreFooterWrapper = styled.footer`
  width: 100%;
  box-shadow: 0px -1px 4px -1px rgba(0, 0, 0, 0.1);
`;

const FooterWrapper = styled.div`
  width: 96%;
  max-width: 900px;
  height: 60px;
  margin: 0 auto;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 560px) and (max-width: 959px) {
    max-width: 900px;
  }

  @media (max-width: 559px) {
    max-width: 520px;
  }
`;

const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FooterLink = styled.a`
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  display: block;

  &:last-child {
    margin-right: 0;
  }
`;

const FooterLinkImage = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
`;

const FooterCopyRight = styled.div`
  font-size: 0.8rem;
`;

export default Footer;
