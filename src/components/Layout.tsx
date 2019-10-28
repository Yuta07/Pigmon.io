import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import 'typeface-lato';
import 'normalize.css';
// import components
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <AppBody>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pigmon.io</title>
      </Helmet>
      <Header />
      <MainContainer>{props.children}</MainContainer>
      <Footer />
    </AppBody>
  );
};

// Layout style
const AppBody = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #353333;
  background-color: #fefefe;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Layout;
