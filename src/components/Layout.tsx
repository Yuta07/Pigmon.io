import React, { ReactNode, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import 'typeface-lato';
import 'normalize.css';
// import components
import Footer from './Footer';
import Header from './Header';
// import context
import { ThemeContext } from './ThemeContext';
// import style
import { LIGHT_MODE, DARK_MODE } from '../styles/Theme';

type LayoutProps = {
  children: ReactNode;
};

type Theme = 'light' | 'dark';

const Layout = (props: LayoutProps) => {
  const windowGlobal: any = typeof window !== 'undefined' && window;
  const localTheme = windowGlobal.localStorage.theme;
  const [switchTheme, setSwitchTheme] = useState<Theme>(localTheme);

  const switchToggleThemeClick = () => {
    if (switchTheme === 'dark') {
      setSwitchTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setSwitchTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <ThemeContext.Provider value={switchTheme}>
      <GlobalStyle theme={switchTheme} />
      <AppBody>
        <Header switchToggleStateClick={switchToggleThemeClick} />
        <MainContainer>{props.children}</MainContainer>
        <Footer />
      </AppBody>
    </ThemeContext.Provider>
  );
};

// Global style
const GlobalStyle = createGlobalStyle<{ theme: string }>`
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
    color: ${props => (props.theme === 'light' ? LIGHT_MODE.text : DARK_MODE.text)};
    background-color: ${props => (props.theme === 'light' ? LIGHT_MODE.background : DARK_MODE.background)};
    transition: all 0.25s linear;
  }

  h1, h1, h3, h4, h5, p, a {
    color: ${props => (props.theme === 'light' ? LIGHT_MODE.text : DARK_MODE.text)};
  }

  a {
    &:hover {
      background-color: ${props => (props.theme === 'light' ? LIGHT_MODE.hover : DARK_MODE.hover)};
    }
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
