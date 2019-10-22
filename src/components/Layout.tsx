import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import 'typeface-lato';
import 'normalize.css';
// import component
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
      <AppBody>
        <Header />
        <CoreLayoutWrapper>
          <MainContainer>
            <Main>{props.children}</Main>
          </MainContainer>
        </CoreLayoutWrapper>
        <Footer />
      </AppBody>
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

const CoreLayoutWrapper = styled.div`
  width: 96%;
  max-width: 760px;
  min-height: calc(100vh - 130px);
  margin: 60px auto;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
`;

export default Layout;
