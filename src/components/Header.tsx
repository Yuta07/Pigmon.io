import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import styled from 'styled-components';

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
        <HeaderRootLink to="/">
          <HeaderTitleText>{data.site.siteMetadata.title}</HeaderTitleText>
        </HeaderRootLink>
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
  max-width: 720px;
  height: 70px;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 560px) and (max-width: 959px) {
    max-width: 720px;
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

const HeaderRootLinkLogo = styled(HeaderRootLink)`
  position: absolute;
  left: 48%;
`;

export default Header;
