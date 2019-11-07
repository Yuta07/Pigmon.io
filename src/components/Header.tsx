import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import styled from 'styled-components';
// import components
import Switch from './Switch';

type HeaderProps = {
  switchState: boolean;
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

  return (
    <CoreHeaderWrapper>
      <HeaderWrapper>
        <HeaderRootLink to="/">
          <HeaderTitleText>{data.site.siteMetadata.title}</HeaderTitleText>
        </HeaderRootLink>
        <Switch switchState={props.switchState} switchToggleStateClick={props.switchToggleStateClick} />
      </HeaderWrapper>
    </CoreHeaderWrapper>
  );
};

// Header style
const CoreHeaderWrapper = styled.header`
  width: 100%;
  position: relative;
  border-bottom: 1px solid #dedede;
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

const HeaderRootLink = styled(Link)`
  color: #353333;
  text-decoration: none;
`;

export default Header;
