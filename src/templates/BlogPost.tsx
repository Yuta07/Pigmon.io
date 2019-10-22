import React from 'react';
// import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
// import components
import Layout from '../components/Layout';

const BlogPost = () => {
  return (
    <Layout>
      <BlogPostContainer>
        <div>
          <h1>Amazing Pandas Eating Things</h1>
          {/* <h4>{props.data.allMarkdownRemark.totalCount} Posts</h4>
          {props.data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          ))} */}
        </div>
      </BlogPostContainer>
    </Layout>
  );
};

// BlogPost template style
const BlogPostContainer = styled.div`
  width: 100%;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
`;

// graphql settings
// interface BlogPostProps {
//   data: {
//     allMarkdownRemark: {
//       totalCount: number;
//       edges: [
//         {
//           node: {
//             id: string;
//             frontmatter: {
//               title: string;
//               date: string;
//             };
//             fields: {
//               slug: string;
//             };
//             excerpt: string;
//           };
//         }
//       ];
//     };
//   };
// }

// declare function graphql(x: TemplateStringsArray): any;
// export const query = graphql`
//   query IndexQuery {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;

export default BlogPost;