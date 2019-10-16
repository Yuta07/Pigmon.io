import React from 'react';
// import { Link, graphql } from 'gatsby';
// import Bio from '../components/bio';
// import Layout from '../components/layout';
// import SEO from '../components/seo';
// import { rhythm } from '../utils/typography';

type IndexProps = {
  data: {
    allMarkdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
};

const Index = (props: IndexProps) => {
  // const { data } = props;
  // const siteTitle = data.site.siteMetadata.title;
  // const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <p>asdf</p>
    </div>
  );
  //   <Layout location={this.props.location} title={siteTitle}>
  //     <SEO title="All posts" />
  //     <Bio />
  //     {posts.map(({ node }) => {
  //       const title = node.frontmatter.title || node.fields.slug;
  //       return (
  //         <article key={node.fields.slug}>
  //           <header>
  //             <h3
  //               style={{
  //                 marginBottom: rhythm(1 / 4),
  //               }}
  //             >
  //               <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
  //                 {title}
  //               </Link>
  //             </h3>
  //             <small>{node.frontmatter.date}</small>
  //           </header>
  //           <section>
  //             <p
  //               dangerouslySetInnerHTML={{
  //                 __html: node.frontmatter.description || node.excerpt,
  //               }}
  //             />
  //           </section>
  //         </article>
  //       );
  //     })}
  //   </Layout>
  // );
};

export default Index;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `;
