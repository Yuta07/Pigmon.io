import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// import data
import { CategoryData } from '../data/Category';

const Category = () => {
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
    <CategoryWrapper>
      <CategoryUnOrderedList>{renderCategoryNav}</CategoryUnOrderedList>
    </CategoryWrapper>
  );
};

// app nav style
const CategoryWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fefefe;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const CategoryUnOrderedList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 96%;
  max-width: 720px;
  margin: 0 auto;
  padding: 15px 0;
`;

const CategoryList = styled.li`
  list-style: none;
  padding: 0 0.8rem 2px;
  font-size: 1.1rem;
  font-weight: 400;

  &:first-child {
    padding-left: 0;
  }
`;

const CategoryLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    opacity: 0.6;
    transition: 0.2s;
  }
`;

export default Category;
