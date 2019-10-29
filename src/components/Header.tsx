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
  max-width: 680px;
  height: 60px;
  margin: 0 auto;
  padding: 10px 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 560px) and (max-width: 959px) {
    max-width: 720px;
    justify-content: center;
  }

  @media (max-width: 559px) {
    max-width: 520px;
    justify-content: center;
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
