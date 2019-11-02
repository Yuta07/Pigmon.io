// link type
export type Link = {
  img: string;
  link: string;
  name: string;
};

// nav type
export type Category = {
  path: string;
  title: string;
};

// IndexImage type
// from index.d.ts in gatsby-image
interface FluidObject {
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
  base64?: string;
  tracedSVG?: string;
  srcWebp?: string;
  srcSetWebp?: string;
  media?: string;
}

interface fluid {
  fluid: FluidObject;
}

interface childImageSharp {
  childImageSharp: fluid;
}

// index page blog post type
export interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string;
            frontmatter: {
              title: string;
              date: string;
              description: string;
              categories: string[];
              featuredImage: childImageSharp;
            };
            fields: {
              slug: string;
            };
          };
        }
      ];
    };
  };
}

export interface BlogPostProps {
  pageContext: {
    slug: string;
  };
  data: {
    markdownRemark: {
      html: string;
      id: string;
      frontmatter: {
        title: string;
        description: string;
        date: string;
        categories: string[];
        featuredImage: childImageSharp;
      };
    };
  };
}
