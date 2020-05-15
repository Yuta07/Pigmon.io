import React, { ReactNode, useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import 'typeface-lato';
import 'normalize.css';
import { Footer } from './organisms/Footer';
import { Header } from './organisms/Header';
import { ThemeContext, ThemeType } from './ThemeContext';
import { LIGHT_MODE, DARK_MODE } from '../styles/Theme';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  let localTheme: ThemeType;
  if (typeof localStorage !== 'undefined') {
    localTheme = window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  } else {
    localTheme = 'light';
  }
  const [theme, setTheme] = useState(localTheme);

  const switchToggleThemeClick = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, switchTheme: switchToggleThemeClick }}>
      <GlobalStyle theme={theme} />
      <AppBody>
        <Header />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </AppBody>
    </ThemeContext.Provider>
  );
};

// Global style
const GlobalStyle = createGlobalStyle<{ theme: string }>`
${({ theme }) => {
  return css`
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
      line-height: 1.8;
      word-wrap: break-word;
      font-kerning: normal;
      color: ${theme === 'light' ? LIGHT_MODE.text : DARK_MODE.text};
      background-color: ${theme === 'light' ? LIGHT_MODE.background : DARK_MODE.background};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      color: ${theme === 'light' ? LIGHT_MODE.text : DARK_MODE.text};
    }

    a {
      color: ${theme === 'light' ? LIGHT_MODE.text : DARK_MODE.text};
      &:hover {
        background-color: ${theme === 'light' ? LIGHT_MODE.hover : DARK_MODE.hover};
      }
    }
  `;
}}
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
