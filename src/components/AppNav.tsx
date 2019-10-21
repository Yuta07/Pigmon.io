import React from 'react';
import styled from 'styled-components';

const AppNav = () => {
  return (
    <AppNavWrapper>
      <AppNavUnOrderedList>
        <AppNavList>All</AppNavList>
        <AppNavList>Tech</AppNavList>
        <AppNavList>Life</AppNavList>
        <AppNavList>Asobi</AppNavList>
        <AppNavList>Other</AppNavList>
      </AppNavUnOrderedList>
    </AppNavWrapper>
  );
};

// app nav style
const AppNavWrapper = styled.nav``;

const AppNavUnOrderedList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const AppNavList = styled.li`
  padding: 0 0.6rem;
  list-style: none;
`;

export default AppNav;
