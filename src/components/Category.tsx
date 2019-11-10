import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// import data
import { CategoryData } from '../data/Category';
// import context
import { ThemeContext } from './ThemeContext';
// import style
import { LIGHT_MODE, DARK_MODE } from '../styles/Theme';

const Category = () => {
  const value = useContext(ThemeContext);

  const renderCategoryNav = CategoryData.map((category, index) => {
    return (
      <CategoryList key={index}>
        <CategoryLink to={category.path} activeClassName="active" activeStyle={{ color: '#e68123' }} theme={value}>
          {category.title}
        </CategoryLink>
      </CategoryList>
    );
  });

  return (
    <CategoryWrapper theme={value}>
      <CategoryUnOrderedList>{renderCategoryNav}</CategoryUnOrderedList>
    </CategoryWrapper>
  );
};

// app nav style
const CategoryWrapper = styled.nav<{ theme: string }>`
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${props =>
    props.theme === 'light' ? '0px 1px 0px 1px rgba(0, 0, 0, 0.1)' : '0px 1px 6px 1px rgba(0, 0, 0, 0.2)'};
`;

const CategoryUnOrderedList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 96%;
  max-width: 620px;
  margin: 0 auto;
  padding: 15px 2% 0;

  @media (min-width: 560px) and (max-width: 959px) {
    max-width: 720px;
    justify-content: center;
  }

  @media (max-width: 559px) {
    max-width: 620px;
    padding: 0.5rem 2% 0;
    justify-content: center;
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

const CategoryLink = styled(Link)<{ theme: string }>`
  color: ${props => (props.theme === 'light' ? LIGHT_MODE.text : DARK_MODE.text)};
  text-decoration: none;
  display: inline-flex;
  padding: 0.5rem 0.5rem;

  &:hover {
    opacity: 0.6;
    transition: 0.2s;
    background-color: transparent;
  }
`;

export default Category;
