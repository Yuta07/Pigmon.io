import React, { ReactNode, Fragment, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import 'typeface-lato';
import 'normalize.css';
// import components
import Footer from './Footer';
import Header from './Header';
// import style
import { LIGHT_MODE, DARK_MODE } from '../styles/Theme';

type LayoutProps = {
  children: ReactNode;
};

const INITIAL_MODE = localStorage.getItem('theme');

const Layout = (props: LayoutProps) => {
  const [switchState, setSwitchState] = useState(INITIAL_MODE === 'dark' ? true : false);

  const SwitchToggleStateClick = () => {
    setSwitchState(!switchState);
    localStorage.setItem('theme', switchState ? 'dark' : 'light');
  };

  return (
    <Fragment>
      <GlobalStyle theme={switchState} />
      <AppBody>
        <Header switchState={switchState} switchToggleStateClick={SwitchToggleStateClick} />
        <MainContainer>{props.children}</MainContainer>
        <Footer />
      </AppBody>
    </Fragment>
  );
};

// Global style
const GlobalStyle = createGlobalStyle<{ theme: boolean }>`
  * {
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
  }

  body {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Lato';
    line-height: 1.6;
    word-wrap: break-word;
    font-kerning: normal;
    color: ${props => (props.theme ? DARK_MODE.TEXT : LIGHT_MODE.TEXT)};
    background-color: ${props => (props.theme ? DARK_MODE.BACKGROUND : LIGHT_MODE.BACKGROUND)};
    transition: all 0.25s linear;
  }
`;

// Layout style
const AppBody = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Layout;
