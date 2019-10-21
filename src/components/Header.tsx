import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import styled from 'styled-components';
// import components
import AppNav from './AppNav';
// import assets
import Logo from '../atom/Logo';

const Header = () => {
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
        <HeaderLogoContainer>
          <HeaderRootLink to="/">
            <HeaderTitleText>{data.site.siteMetadata.title}</HeaderTitleText>
          </HeaderRootLink>
          <HeaderRootLink to="/">
            <Logo width={40} />
          </HeaderRootLink>
        </HeaderLogoContainer>
        <AppNav />
      </HeaderWrapper>
    </CoreHeaderWrapper>
  );
};

// Header style
const CoreHeaderWrapper = styled.header`
  width: 100%;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
`;

const HeaderWrapper = styled.div`
  width: 96%;
  max-width: 760px;
  height: 70px;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
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
