import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// import data
import { CategoryData } from '../data/Category';

const Category = (props: any) => {
  console.log(props);
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
const CategoryWrapper = styled.nav``;

const CategoryUnOrderedList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const CategoryList = styled.li`
  list-style: none;
  padding: 0 0.6rem 2px;
`;

const CategoryLink = styled(Link)`
  text-decoration: none;
  color: #353333;

  &:hover {
    opacity: 0.6;
    transition: 0.2s;
  }
`;

export default Category;
