import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { CategoryData } from '../../data/Category';
import { ThemeContext } from '../ThemeContext';

export const Category = () => {
  const { theme } = useContext(ThemeContext);

  const renderCategoryNav = CategoryData.map((category, index) => {
    return (
      <CategoryList key={index}>
        <CategoryLink to={category.path} activeClassName="active" activeStyle={{ color: '#e68123' }}>
          {category.title}
        </CategoryLink>
      </CategoryList>
    );
  });

  return (
    <CategoryWrapper theme={theme}>
      <CategoryUnOrderedList>{renderCategoryNav}</CategoryUnOrderedList>
    </CategoryWrapper>
  );
};

// app nav style
const CategoryWrapper = styled.nav<{ theme: string }>`
  ${({ theme }) => {
    return css`
      position: sticky;
      top: 0;
      z-index: 100;
      background-color: ${theme === 'light' ? '#fefefe' : '#282c35'};
      box-shadow: ${theme === 'light' ? '0px 1px 0px 1px rgba(0, 0, 0, 0.1)' : '0px 1px 6px 1px rgba(0, 0, 0, 0.2)'};
    `;
  }}
`;

const CategoryUnOrderedList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 96%;
  max-width: 620px;
  margin: 0 auto;
  padding: 15px 2% 0;

  @media (min-width: 560px) and (max-width: 959px) {
    max-width: 620px;
    justify-content: center;
  }

  @media (max-width: 559px) {
    max-width: 620px;
    padding: 0.5rem 2% 0;
    justify-content: space-around;
  }
`;

const CategoryList = styled.li`
  list-style: none;
  padding: 0 0.8rem;
  font-size: 1.1rem;
  font-weight: 400;

  &:first-child {
    padding-left: 0;
  }

  @media (max-width: 559px) {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`;

const CategoryLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  padding: 0.5rem 0.5rem;

  &:hover {
    opacity: 0.6;
    transition: 0.2s;
    background-color: transparent;
  }
`;
