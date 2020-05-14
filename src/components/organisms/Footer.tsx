import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext';

export const Footer = () => {
  const value = useContext(ThemeContext);

  return (
    <CoreFooterWrapper theme={value}>
      <FooterWrapper>
        <FooterCopyRight>© {new Date().getFullYear()}, Yutazon - All rights reserved.</FooterCopyRight>
      </FooterWrapper>
    </CoreFooterWrapper>
  );
};

// Footer style
const CoreFooterWrapper = styled.footer<{ theme: string }>`
  width: 100%;
  box-shadow: ${props =>
    props.theme === 'light' ? '0px -1px 4px -1px rgba(0, 0, 0, 0.1)' : '0px -2px 2px -1px rgba(255, 255, 255, 0.1)'};
`;

const FooterWrapper = styled.div`
  width: 96%;
  max-width: 720px;
  height: 60px;
  margin: 0 auto;
  padding: 5px 2%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 560px) and (max-width: 959px) {
    max-width: 720px;
  }

  @media (max-width: 559px) {
    max-width: 520px;
    flex-direction: column;
  }
`;

const FooterCopyRight = styled.div`
  font-size: 0.8rem;
  letter-spacing: 0.5px;

  @media (max-width: 559px) {
    margin: 1rem 0;
    flex-direction: column;
  }
`;
