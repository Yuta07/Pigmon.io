import React from 'react';
import styled from 'styled-components';
// import components
import Bio from '../components/Bio';
import Layout from '../components/Layout';

const Index = (props: IndexProps) => {
  console.log(props);
  return (
    <Layout>
      <IndexWrapper>
        <Bio />
        <IndexContainer>
          {/* <div>
            <h1>Amazing Pandas Eating Things</h1>
            <h4>{props.data.allMarkdownRemark.totalCount} Posts</h4>
            {props.data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <h3>
                  {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
                </h3>
                <p>{node.excerpt}</p>
              </div>
            ))}
          </div> */}
        </IndexContainer>
      </IndexWrapper>
    </Layout>
  );
};

const IndexWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const IndexContainer = styled.div`
  width: calc(100% - 240px);
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  order: 1;
`;

interface IndexProps {
  data: {
    allMarkdownRemark: {
      totalCount: number;
      edges: [
        {
          node: {
            id: string;
            frontmatter: {
              title: string;
              date: string;
            };
            fields: {
              slug: string;
            };
            excerpt: string;
          };
        }
      ];
    };
  };
}

declare function graphql(x: TemplateStringsArray): any;
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default Index;
