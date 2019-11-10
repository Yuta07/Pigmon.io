import React, { useContext } from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import styled from 'styled-components';
// import components
import Switch from './Switch';
// import context
import { ThemeContext } from './ThemeContext';
// import style
import { LIGHT_MODE, DARK_MODE } from '../styles/Theme';

type HeaderProps = {
  switchToggleStateClick: () => void;
};

const Header = (props: HeaderProps) => {
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

  const value = useContext(ThemeContext);

  return (
    <CoreHeaderWrapper theme={value}>
      <HeaderWrapper>
        <HeaderRootLink to="/" theme={value}>
          <HeaderTitleText>{data.site.siteMetadata.title}</HeaderTitleText>
        </HeaderRootLink>
        <Switch switchToggleStateClick={props.switchToggleStateClick} />
      </HeaderWrapper>
    </CoreHeaderWrapper>
  );
};

// Header style
const CoreHeaderWrapper = styled.header<{ theme: string }>`
  width: 100%;
  position: relative;
  border-bottom: ${props => (props.theme === 'light' ? '1px solid #dedede' : null)};
  box-shadow: ${props => (props.theme === 'light' ? null : '0 0 2px 1px rgba(255, 255, 255, 0.1)')};
  transition: all 0.25s linear;
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
  color: ${props => (props.theme === 'light' ? LIGHT_MODE.text : DARK_MODE.text)};
  text-decoration: none;

  &:hover {
    background-color: transparent;
  }
`;

export default Header;
