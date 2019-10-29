import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

type categoryNameProps = {
  title: string;
};

const CategoryTitle = (props: categoryNameProps) => {
  return (
    <PageCategoryTitleContainer>
      <PageCategoryTitle>{_.upperFirst(props.title)} Category at Pigmon.io</PageCategoryTitle>
    </PageCategoryTitleContainer>
  );
};

// category title style
const PageCategoryTitleContainer = styled.div`
  background-color: #f8f8f8;
  border-bottom: 1px solid #dedede;
`;

const PageCategoryTitle = styled.h2`
  color: #353333;
  font-size: 1.6rem;
  width: 96%;
  max-width: 680px;
  margin: 0 auto;
  padding: 15px 2%;

  @media (min-width: 560px) and (max-width: 959px) {
    max-width: 720px;
    text-align: center;
  }

  @media (max-width: 559px) {
    max-width: 520px;
    text-align: center;
  }
`;

export default CategoryTitle;
