import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// import components
import Layout from '../components/Layout';
import SEO from '../components/SEO';
// import assets
import NotFound from '../assets/not-found.svg';

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <NotFoundWrapper>
        <NotFoundHero>Not Found</NotFoundHero>
        <NotFoundImage src={NotFound} alt="NotFound" />
        <NotFoundSadness>You just hit a route that doesn&#39;t exist... the sadness.</NotFoundSadness>
        <RedirectHome to="/">Home</RedirectHome>
      </NotFoundWrapper>
    </Layout>
  );
};

// 404 style
const NotFoundWrapper = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundImage = styled.img`
  padding: 3rem 0;
`;

const NotFoundHero = styled.h1`
  font-size: 2.5rem;
  margin-top: 0;
`;

const NotFoundSadness = styled.p`
  font-size: 1.2rem;
`;

const RedirectHome = styled(Link)`
  width: 200px;
  padding: 1rem;
  margin: 1rem auto 0;
  color: #fefefe;
  background-color: #353333;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;

  &:hover {
    transition: 0.3s;
    background-color: rgb(230, 129, 35);
  }
`;

export default NotFoundPage;
