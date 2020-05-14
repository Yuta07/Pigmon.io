import React, { useContext } from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { Switch } from '../atoms/Switch';
import { ThemeContext } from '../ThemeContext';
import { LIGHT_MODE, DARK_MODE } from '../../styles/Theme';

export const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const { theme } = useContext(ThemeContext);

  return (
    <CoreHeaderWrapper theme={theme}>
      <HeaderWrapper>
        <HeaderRootLink to="/" theme={theme}>
          <HeaderTitleText>{data.site.siteMetadata.title}</HeaderTitleText>
        </HeaderRootLink>
        <Switch />
      </HeaderWrapper>
    </CoreHeaderWrapper>
  );
};

// Header style
const CoreHeaderWrapper = styled.header<{ theme: string }>`
  ${({ theme }) => {
    return css`
      width: 100%;
      position: relative;
      border-bottom: ${theme === 'light' ? '1px solid #dedede' : '1px solid transparent'};
      box-shadow: ${theme === 'light' ? null : '0 0 2px 1px rgba(255, 255, 255, 0.1)'};
    `;
  }}
`;

const HeaderWrapper = styled.div`
  width: 96%;
  max-width: 620px;
  height: 60px;
  margin: 0 auto;
  padding: 10px 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 560px) and (max-width: 959px) {
    max-width: 620px;
  }

  @media (max-width: 559px) {
    max-width: 520px;
  }
`;

const HeaderTitleText = styled.h1`
  font-size: 1.6rem;
  margin: 0;
`;

const HeaderRootLink = styled(Link)<{ theme: string }>`
  ${({ theme }) => {
    return css`
      color: ${theme === 'light' ? LIGHT_MODE.text : DARK_MODE.text};
      text-decoration: none;

      &:hover {
        background-color: transparent;
      }
    `;
  }}
`;
